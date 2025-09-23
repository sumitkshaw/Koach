import { createContext, useContext, useState, useEffect } from "react";
import { 
  getCurrentUser, 
  logout as appwriteLogout, 
  verifyEmail, 
  checkVerificationInUrl,
  createAccount as appwriteCreateAccount,
  login as appwriteLogin,
  loginWithOAuth
} from "./auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [needsVerification, setNeedsVerification] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState('');

  // Check authentication state and handle email verification
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Check for verification parameters in URL
        const { userId, secret } = checkVerificationInUrl();
        
        if (userId && secret) {
          try {
            await verifyEmail(userId, secret);
            setVerificationMessage('Email verified successfully! You can now login.');
            
            // Clean up URL
            window.history.replaceState({}, document.title, window.location.pathname);
          } catch (error) {
            setVerificationMessage('Verification failed. Please try again.');
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
      await appwriteCreateAccount(email, password, name);
      
      // Show magic link sent message
      setVerificationMessage(`Verification email sent to ${email}! Please check your inbox.`);
      setNeedsVerification(true);
      
      navigate("/login");
    } catch (error) {
      console.error("Sign-up error", error);
      setError(error.message || "Sign-up failed");
    }
  };

  const login = async (email, password, navigate, setError) => {
    try {
      await appwriteLogin(email, password);
      const currentUser = await getCurrentUser();
      setUser(currentUser);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error", error);
      setError(error.message || "Login failed");
      
      // If error is about verification, set needs verification
      if (error.message.includes('verify your email')) {
        setNeedsVerification(true);
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
        clearVerificationMessage
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthContext;