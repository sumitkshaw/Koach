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
  account  // Add this import
} from "./auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [needsVerification, setNeedsVerification] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState('');
  const verificationHandledRef = useRef(false);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        if (!verificationHandledRef.current) {
          const { userId, secret } = checkVerificationInUrl();
          if (userId && secret) {
            try {
              await verifyEmail(userId, secret);
              setVerificationMessage('Email verified successfully! You can now login.');
            } catch (error) {
              if (!verificationMessage) {
                setVerificationMessage('Verification failed. Please try again.');
              }
            } finally {
              window.history.replaceState({}, document.title, window.location.pathname);
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

  // ---- UPDATED: signup now redirects to /past-experience ----
  const signup = async (name, email, password, navigate, setError) => {
    try {
      // Check if user is already logged in
      const currentUser = await getCurrentUser();
      if (currentUser) {
        navigate("/dashboard");
        return;
      }

      const result = await appwriteCreateAccount(email, password, name);

      // show verification message if any (createAccount returns a message)
      setVerificationMessage(result.message || 'Account created. Please verify email.');

      // mark that verification may be needed
      setNeedsVerification(true);

      // Navigate directly to mentee onboarding
      navigate("/past-experience");
    } catch (error) {
      console.error("Sign-up error", error);
      if (error.message && error.message.toLowerCase().includes('already exists')) {
        setError('❌ Account already exists with this email! Please try logging in or use "Forgot Password".');
        // Redirect to login after showing error
        setTimeout(() => navigate("/login"), 2000);
      } else if (error.message && error.message.toLowerCase().includes('verification')) {
        setError('Account created but verification email failed. Please check your inbox or resend verification from login.');
      } else {
        setError(error.message || 'Sign-up failed. Please try again.');
      }
    }
  };

  // ---- UPDATED: login now redirects to /past-experience ----
  const login = async (email, password, navigate, setError) => {
    try {
      // Check if user is already logged in
      const currentUser = await getCurrentUser();
      if (currentUser) {
        navigate("/dashboard");
        return;
      }

      const result = await appwriteLogin(email, password);
      setUser(result.user);

      // Direct user to mentee onboarding
      navigate("/past-experience");
    } catch (error) {
      console.error("Login error", error);

      if ((error.message || '').toLowerCase().includes('verify your email')) {
        setError('❌ Please verify your email first! Check your inbox for verification link.');
        setNeedsVerification(true);
      } else if ((error.message || '').toLowerCase().includes('invalid')) {
        setError('❌ Invalid email or password. Please check your credentials.');
      } else if ((error.message || '').toLowerCase().includes('rate limit')) {
        setError('⏰ Too many login attempts. Please wait a few minutes.');
      } else {
        setError(error.message || 'Login failed. Please try again.');
      }
    }
  };

  // ---- UPDATED: OAuth login with proper user existence check ----
  const loginWithOAuthAndRedirect = async (provider, navigate, isSignupFlow = false) => {
    try {
      // Clear any existing session first to get fresh state
      try {
        await account.deleteSession('current');
      } catch (e) {
        // Ignore errors if no session exists
      }

      // Use different success URLs based on whether this is signup or login
      const successUrl = isSignupFlow 
        ? `${window.location.origin}/welcome-step`  // New users go to onboarding
        : `${window.location.origin}/oauth-callback`; // Existing users go to callback handler

      const failureUrl = `${window.location.origin}/login?error=${encodeURIComponent(
        JSON.stringify({ 
          message: `${provider} authentication failed`, 
          type: 'oauth_error' 
        })
      )}`;

      await loginWithOAuth(provider, successUrl, failureUrl);
      // The OAuth flow will redirect the user away
    } catch (error) {
      console.error(`${provider} OAuth error:`, error);
      throw error;
    }
  };

  // ---- UPDATED: Separate functions for signup vs login OAuth ----
  const loginWithGoogle = async (navigate, isSignupFlow = false) => {
    await loginWithOAuthAndRedirect('google', navigate, isSignupFlow);
  };

  const loginWithLinkedIn = async (navigate, isSignupFlow = false) => {
    await loginWithOAuthAndRedirect('linkedin', navigate, isSignupFlow);
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

  const clearVerificationMessage = () => setVerificationMessage('');

  const resetPassword = async (email, setError, setSuccess) => {
    try {
      await createPasswordRecovery(email);
      setSuccess('✅ Password reset email sent! Check inbox.');
    } catch (error) {
      console.error("Password reset error", error);
      setError(error.message || 'Failed to send reset email.');
    }
  };

  const confirmPasswordReset = async (userId, secret, newPassword, setError, setSuccess) => {
    try {
      await updatePassword(userId, secret, newPassword);
      setSuccess('✅ Password updated successfully! You can now log in.');
      return true;
    } catch (error) {
      console.error("Password update error", error);
      setError(error.message || 'Failed to update password.');
      return false;
    }
  };

  const resendVerificationEmail = async (email, password, setError, setSuccess) => {
    try {
      await resendVerification(email, password);
      setSuccess('✅ Verification email sent! Check your inbox.');
    } catch (error) {
      console.error("Resend verification error", error);
      setError(error.message || 'Failed to resend verification email.');
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
        resendVerificationEmail,
        checkUserExistsAfterOAuth,  // Export this new function
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthContext;