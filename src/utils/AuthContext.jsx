import { createContext, useContext, useState, useEffect, useRef } from "react";
import {
  getCurrentUser,
  logout as appwriteLogout,
  verifyEmail,
  checkVerificationInUrl,
  createAccount as appwriteCreateAccount,
  login as appwriteLogin,
  loginWithOAuth,
  createPasswordRecovery,
  updatePassword,
  checkPasswordResetInUrl,
  resendVerification,
  account,
  checkUserVerification,
  sendVerificationEmail,
  getSessionStatus,
} from "./auth";
import {
  createUserProfile,
  getUserProfile,
  checkOnboardingStatus,
  completeMentorOnboarding,
  completeMenteeProfile,
} from "./database/profiles";
import { FEATURE_FLAGS } from "./featureFlags";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [needsVerification, setNeedsVerification] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const verificationHandledRef = useRef(false);

  // Check verification status on load
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Handle verification from URL
        if (!verificationHandledRef.current) {
          const { userId, secret } = checkVerificationInUrl();
          if (userId && secret) {
            try {
              await verifyEmail(userId, secret);
              setVerificationMessage(
                "Email verified successfully! You can now login."
              );
              setIsVerified(true);
            } catch (error) {
              if (!verificationMessage) {
                setVerificationMessage(
                  "Verification failed. Please try again."
                );
              }
            } finally {
              window.history.replaceState(
                {},
                document.title,
                window.location.pathname
              );
              verificationHandledRef.current = true;
            }
          }
        }

        // Check current user and verification status
        const { user: currentUser, isVerified: verified } = await checkUserVerification();
        setUser(currentUser);
        setIsVerified(verified);
        setNeedsVerification(currentUser && !verified);

      } catch (error) {
        console.error("Auth initialization error:", error);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // Helper: Create profile for new user
  const createUserProfileWithRole = async (userId, userData) => {
    if (!FEATURE_FLAGS.USE_NEW_PROFILE_SYSTEM) {
      return null;
    }

    try {
      const userType = localStorage.getItem("signupUserType") || userData.userType || "mentee";
      localStorage.removeItem("signupUserType");

      const profileData = {
        userId,
        userType,
        displayName: userData.name || "",
        onboardingComplete: false,
        profileComplete: false,
        currentOnboardingStep: 1,
      };

      const profile = await createUserProfile(profileData);
      console.log("✅ Created user profile:", profile);
      return profile;
    } catch (error) {
      console.error("❌ Failed to create user profile:", error);
      return null;
    }
  };

  // Helper: Handle post-login redirection with verification check
  const handlePostLoginRedirection = async (userId, navigate, isVerified) => {
    if (!isVerified) {
      // User not verified, redirect to verification page
      navigate("/verify-required");
      return;
    }

    if (!FEATURE_FLAGS.ENABLE_ROLE_BASED_ONBOARDING) {
      navigate("/dashboard");
      return;
    }

    try {
      const status = await checkOnboardingStatus(userId);

      if (!status.hasProfile) {
        const currentUser = await getCurrentUser();
        await createUserProfileWithRole(userId, {
          name: currentUser?.name || "",
          userType: "mentee",
        });

        const newStatus = await checkOnboardingStatus(userId);
        redirectBasedOnStatus(newStatus, navigate);
        return;
      }

      redirectBasedOnStatus(status, navigate);
    } catch (error) {
      console.error("❌ Error in redirection:", error);
      navigate("/dashboard");
    }
  };

  // Helper: Redirect based on profile status
  const redirectBasedOnStatus = (status, navigate) => {
    if (status.userType === "mentor") {
      if (status.needsOnboarding) {
        navigate("/mentor-onboarding");
      } else {
        navigate("/dashboard_mentor");
      }
    } else {
      navigate("/dashboard");
    }
  };

  // Signup function - FIXED
  const signup = async (
    name,
    email,
    password,
    navigate,
    setError,
    userType = "mentee"
  ) => {
    try {
      localStorage.setItem("signupUserType", userType);
      localStorage.setItem("signupEmail", email);

      const currentUser = await getCurrentUser();
      if (currentUser) {
        navigate("/dashboard");
        return;
      }

      const result = await appwriteCreateAccount(email, password, name);

      // Show verification message
      setVerificationMessage(result.message);
      setNeedsVerification(true);

      // Create user profile
      const user = await getCurrentUser();
      if (user) {
        await createUserProfileWithRole(user.$id, { name, userType });
      }

      // Redirect based on verification status
      if (!result.message?.includes('sent')) {
        // Verification not sent, redirect to verify-required
        navigate("/verify-required");
      } else if (userType === "mentor") {
        navigate("/verify-required");
      } else {
        navigate("/verify-required");
      }


    } catch (error) {
      console.error("Sign-up error", error);
      localStorage.removeItem("signupUserType");
      localStorage.removeItem("signupEmail");

      if (error.message?.toLowerCase().includes("already exists")) {
        setError('❌ Account already exists! Please try logging in or use "Forgot Password".');
        setTimeout(() => navigate("/login"), 2000);
      } else if (error.message?.toLowerCase().includes("verification")) {
        setError("Account created but verification failed. Please login and resend verification.");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setError(error.message || "Sign-up failed. Please try again.");
      }
      return false;
    }
  };

  // Login function - UPDATED with verification check
  const login = async (
    email,
    password,
    navigate,
    setError,
    userType = null
  ) => {
    try {
      if (userType) {
        localStorage.setItem("signupUserType", userType);
      }

      const currentUser = await getCurrentUser();
      if (currentUser) {
        const { isVerified } = await checkUserVerification();
        await handlePostLoginRedirection(currentUser.$id, navigate, isVerified);
        return;
      }

      const result = await appwriteLogin(email, password);
      setUser(result.user);
      setIsVerified(result.isVerified || result.user?.emailVerification);

      // Handle redirection with verification check
      await handlePostLoginRedirection(result.user.$id, navigate, result.isVerified || result.user?.emailVerification);
    } catch (error) {
      console.error("Login error", error);

      if (error.message?.includes('verify your email')) {
        setError("❌ Please verify your email first! Check your inbox.");
        setNeedsVerification(true);
      } else if (error.message?.includes('Invalid')) {
        setError("❌ Invalid email or password. Please check your credentials.");
      } else if (error.message?.includes('rate limit')) {
        setError("⏰ Too many login attempts. Please wait a few minutes.");
      } else {
        setError(error.message || "Login failed. Please try again.");
      }
    }
  };

  // OAuth functions
  const loginWithOAuthAndRedirect = async (
    provider,
    navigate,
    isSignupFlow = false,
    userType = null
  ) => {
    try {
      if (userType) {
        localStorage.setItem("signupUserType", userType);
      }

      const oauthAttempt = {
        provider,
        timestamp: Date.now(),
        email: localStorage.getItem('lastEmailAttempt') || '',
        isSignupFlow
      };
      localStorage.setItem('lastOAuthAttempt', JSON.stringify(oauthAttempt));

      try {
        await account.deleteSession("current");
      } catch (e) { }

      const successUrl = `${window.location.origin}/oauth-callback`;
      const failureUrl = `${window.location.origin}/login?error=${encodeURIComponent(
        JSON.stringify({
          message: `${provider} authentication failed`,
          type: "oauth_error",
        })
      )}`;

      await loginWithOAuth(provider, successUrl, failureUrl);
    } catch (error) {
      console.error(`${provider} OAuth error:`, error);
      localStorage.removeItem('lastOAuthAttempt');
      localStorage.removeItem('lastEmailAttempt');
      throw error;
    }
  };

  const loginWithGoogle = async (
    navigate,
    isSignupFlow = false,
    userType = null
  ) => {
    await loginWithOAuthAndRedirect("google", navigate, isSignupFlow, userType);
  };

  const loginWithLinkedIn = async (
    navigate,
    isSignupFlow = false,
    userType = null
  ) => {
    await loginWithOAuthAndRedirect(
      "linkedin",
      navigate,
      isSignupFlow,
      userType
    );
  };

  // Send verification email
  const sendVerification = async (setError, setSuccess) => {
    try {
      await sendVerificationEmail();
      setSuccess("✅ Verification email sent! Check your inbox and spam folder.");
    } catch (error) {
      console.error("Send verification error:", error);
      setError("Failed to send verification email. Please try again.");
    }
  };

  const logout = async (navigate) => {
    try {
      await appwriteLogout();
      setUser(null);
      setNeedsVerification(false);
      setIsVerified(false);

      localStorage.removeItem('lastOAuthAttempt');
      localStorage.removeItem('lastEmailAttempt');
      localStorage.removeItem('signupEmail');

      navigate("/");
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  const clearVerificationMessage = () => setVerificationMessage("");

  const resetPassword = async (email, setError, setSuccess) => {
    try {
      await createPasswordRecovery(email);
      setSuccess("✅ Password reset email sent! Check inbox.");
    } catch (error) {
      console.error("Password reset error", error);
      setError(error.message || "Failed to send reset email.");
    }
  };

  const confirmPasswordReset = async (
    userId,
    secret,
    newPassword,
    setError,
    setSuccess
  ) => {
    try {
      await updatePassword(userId, secret, newPassword);
      setSuccess("✅ Password updated successfully! You can now log in.");
      return true;
    } catch (error) {
      console.error("Password update error", error);
      setError(error.message || "Failed to update password.");
      return false;
    }
  };

  const resendVerificationEmail = async (
    email,
    password,
    setError,
    setSuccess
  ) => {
    try {
      await resendVerification(email, password);
      setSuccess("✅ Verification email sent! Check your inbox.");
    } catch (error) {
      console.error("Resend verification error:", error);
      setError(error.message || "Failed to resend verification email.");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated: !!user,
        isVerified,
        needsVerification,
        verificationMessage,
        loading,
        login,
        signup,
        loginWithGoogle,
        loginWithLinkedIn,
        logout,
        clearVerificationMessage,
        resetPassword,
        confirmPasswordReset,
        resendVerificationEmail,
        sendVerification,
        checkUserVerification,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthContext;