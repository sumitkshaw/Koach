// src/AuthContext.jsx - Updated with OAuth improvements
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
  account, // Add this import
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
  const verificationHandledRef = useRef(false);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        if (!verificationHandledRef.current) {
          const { userId, secret } = checkVerificationInUrl();
          if (userId && secret) {
            try {
              await verifyEmail(userId, secret);
              setVerificationMessage(
                "Email verified successfully! You can now login."
              );
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

        const currentUser = await getCurrentUser();
        setUser(currentUser);

        if (currentUser && !currentUser.emailVerification) {
          setNeedsVerification(true);
        }
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
      return null; // Feature flag disabled
    }

    try {
      // Get userType from localStorage or default to 'mentee'
      const userType =
        localStorage.getItem("signupUserType") || userData.userType || "mentee";

      // Clean up localStorage
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
      // Don't block auth flow on profile creation failure
      return null;
    }
  };

  // Helper: Handle post-login redirection based on profile
  const handlePostLoginRedirection = async (userId, navigate) => {
    if (!FEATURE_FLAGS.ENABLE_ROLE_BASED_ONBOARDING) {
      navigate("/dashboard");
      return;
    }

    try {
      const status = await checkOnboardingStatus(userId);

      // AUTO-CREATE PROFILE IF NOT EXISTS
      if (!status.hasProfile) {
        const currentUser = await getCurrentUser();
        await createUserProfileWithRole(userId, {
          name: currentUser?.name || "",
          userType: "mentee", // Default existing users to mentee
        });

        // Get updated status
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
      // Mentee
      navigate("/dashboard");
      // Note: Profile completion is non-blocking for mentees
    }
  };

  // ---- NEW: Helper to check if user exists with OAuth ----
  const checkUserExistsAfterOAuth = async () => {
    try {
      const user = await getCurrentUser();
      if (user) {
        setUser(user);
        return { exists: true, user };
      }
      return { exists: false, user: null };
    } catch (error) {
      return { exists: false, user: null, error };
    }
  };

  const signup = async (
    name,
    email,
    password,
    navigate,
    setError,
    userType = "mentee"
  ) => {
    try {
      // Store userType for profile creation
      localStorage.setItem("signupUserType", userType);

      // Check if user is already logged in
      const currentUser = await getCurrentUser();
      if (currentUser) {
        navigate("/dashboard");
        return;
      }

      const result = await appwriteCreateAccount(email, password, name);

      // Show verification message
      setVerificationMessage(
        result.message || "Account created. Please verify email."
      );
      setNeedsVerification(true);

      // Create user profile
      const user = await getCurrentUser();
      if (user) {
        await createUserProfileWithRole(user.$id, { name, userType });
      }

      // Redirect based on role
      if (userType === "mentor") {
        navigate("/mentor-onboarding");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Sign-up error", error);
      localStorage.removeItem("signupUserType"); // Clean up on error

      if (
        error.message &&
        error.message.toLowerCase().includes("already exists")
      ) {
        setError(
          '❌ Account already exists with this email! Please try logging in or use "Forgot Password".'
        );
        setTimeout(() => navigate("/login"), 2000);
      } else if (
        error.message &&
        error.message.toLowerCase().includes("verification")
      ) {
        setError(
          "Account created but verification email failed. Please check your inbox or resend verification from login."
        );
      } else {
        setError(error.message || "Sign-up failed. Please try again.");
      }
    }
  };
  // ---- UPDATED: login now redirects to /past-experience ----
  const login = async (
    email,
    password,
    navigate,
    setError,
    userType = null
  ) => {
    try {
      // Store userType if provided (for mentor login page)
      if (userType) {
        localStorage.setItem("signupUserType", userType);
      }

      // Check if user is already logged in
      const currentUser = await getCurrentUser();
      if (currentUser) {
        await handlePostLoginRedirection(currentUser.$id, navigate);
        return;
      }

      const result = await appwriteLogin(email, password);
      setUser(result.user);

      // Handle post-login redirection
      await handlePostLoginRedirection(result.user.$id, navigate);
    } catch (error) {
      console.error("Login error", error);

      if ((error.message || "").toLowerCase().includes("verify your email")) {
        setError(
          "❌ Please verify your email first! Check your inbox for verification link."
        );
        setNeedsVerification(true);
      } else if ((error.message || "").toLowerCase().includes("invalid")) {
        setError(
          "❌ Invalid email or password. Please check your credentials."
        );
      } else if ((error.message || "").toLowerCase().includes("rate limit")) {
        setError("⏰ Too many login attempts. Please wait a few minutes.");
      } else {
        setError(error.message || "Login failed. Please try again.");
      }
    }
  };

  const loginWithOAuthAndRedirect = async (
    provider,
    navigate,
    isSignupFlow = false,
    userType = null
  ) => {
    try {
      // Store userType if provided
      if (userType) {
        localStorage.setItem("signupUserType", userType);
      }

      // Clear any existing session first
      try {
        await account.deleteSession("current");
      } catch (e) {
        // Ignore errors if no session exists
      }

      // Use different success URLs
      const successUrl = `${window.location.origin}/oauth-callback`;
      const failureUrl = `${window.location.origin
        }/login?error=${encodeURIComponent(
          JSON.stringify({
            message: `${provider} authentication failed`,
            type: "oauth_error",
          })
        )}`;

      await loginWithOAuth(provider, successUrl, failureUrl);
    } catch (error) {
      console.error(`${provider} OAuth error:`, error);
      throw error;
    }
  };

  // Update the individual OAuth functions:
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

  const logout = async (navigate) => {
    try {
      await appwriteLogout();
      setUser(null);
      setNeedsVerification(false);
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
      console.error("Resend verification error", error);
      setError(error.message || "Failed to resend verification email.");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated: !!user,
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
        checkUserExistsAfterOAuth, // Export this new function
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthContext;
