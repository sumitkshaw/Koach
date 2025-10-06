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
  resendVerification
} from "./auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [needsVerification, setNeedsVerification] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState('');
  const verificationHandledRef = useRef(false);

  // Check authentication state and handle email verification
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Check for verification parameters in URL (guard against double-run in StrictMode)
        if (!verificationHandledRef.current) {
          const { userId, secret } = checkVerificationInUrl();
          if (userId && secret) {
            try {
              await verifyEmail(userId, secret);
              setVerificationMessage('Email verified successfully! You can now login.');
            } catch (error) {
              // Only set failure if success wasn't already set
              if (!verificationMessage) {
                setVerificationMessage('Verification failed. Please try again.');
              }
            } finally {
              // Clean up URL and mark handled to avoid second attempt
              window.history.replaceState({}, document.title, window.location.pathname);
              verificationHandledRef.current = true;
            }
          }
        }

        // Get current user
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

  const signup = async (name, email, password, navigate, setError) => {
    try {
      const result = await appwriteCreateAccount(email, password, name);

      // Show success message
      setVerificationMessage(result.message);
      setNeedsVerification(true);

      // Navigate to login page immediately so the banner shows there
      navigate("/login");
    } catch (error) {
      console.error("Sign-up error", error);
      if (error.message.includes('verification email failed')) {
        setError('Account created but verification email failed. Please try logging in and use "Resend Verification" button.');
      } else if (error.message.includes('already exists')) {
        setError('❌ Account already exists with this email! Please try logging in or use "Forgot Password" if you forgot your password.');
      } else {
        setError(`❌ ${error.message || "Sign-up failed. Please try again."}`);
      }
    }
  };

  const login = async (email, password, navigate, setError) => {
    try {
      const result = await appwriteLogin(email, password);
      setUser(result.user);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error", error);
      
      // Better error messages
      if (error.message.includes('verify your email')) {
        setError(`❌ Please verify your email first! Check your inbox (including spam folder) for verification link. If you didn't receive it, use "Resend Verification" button below.`);
        setNeedsVerification(true);
      } else if (error.message.includes('Invalid email or password')) {
        setError(`❌ Invalid email or password. Please check your credentials and try again.`);
      } else if (error.message.includes('rate limit')) {
        setError(`⏰ Too many login attempts. Please wait a few minutes before trying again.`);
      } else {
        setError(`❌ Login failed: ${error.message || "Please try again."}`);
      }
    }
  };

  const loginWithGoogle = async (navigate) => {
    try {
      await loginWithOAuth('google');
      // OAuth redirect will handle the navigation
    } catch (error) {
      console.error("Google login error", error);
    }
  };

  const loginWithLinkedIn = async (navigate) => {
    try {
      // Note: LinkedIn OAuth needs to be configured in Appwrite console
      await loginWithOAuth('linkedin');
    } catch (error) {
      console.error("LinkedIn login error", error);
    }
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

  const clearVerificationMessage = () => {
    setVerificationMessage('');
  };

  const resetPassword = async (email, setError, setSuccess) => {
    try {
      await createPasswordRecovery(email);
      setSuccess('✅ Password reset email sent! Please check your inbox (including spam folder) and click the reset link.');
    } catch (error) {
      console.error("Password reset error", error);
      if (error.message.includes('No account found')) {
        setError('❌ No account found with this email address. Please check your email or create a new account.');
      } else if (error.message.includes('rate limit')) {
        setError('⏰ Too many attempts. Please wait a few minutes before trying again.');
      } else {
        setError(`❌ Failed to send reset email: ${error.message || "Please try again."}`);
      }
    }
  };

  const confirmPasswordReset = async (userId, secret, newPassword, setError, setSuccess) => {
    try {
      await updatePassword(userId, secret, newPassword);
      setSuccess('✅ Password updated successfully! You can now login with your new password.');
      return true;
    } catch (error) {
      console.error("Password update error", error);
      setError(error.message || 'Failed to update password');
      return false;
    }
  };

  const resendVerificationEmail = async (email, password, setError, setSuccess) => {
    try {
      await resendVerification(email, password);
      setSuccess('✅ Verification email sent! Please check your inbox (including spam folder).');
    } catch (error) {
      console.error("Resend verification error", error);
      if (error.message.includes('verification email failed')) {
        setError('❌ Verification email failed to send. Please try again later or contact support.');
      } else if (error.message.includes('Invalid email or password')) {
        setError('❌ Invalid email or password. Please check your credentials.');
      } else {
        setError(`❌ ${error.message || "Failed to send verification email"}`);
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{ 
        user, 
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
        resendVerificationEmail
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthContext;