// src/pages/OAuthCallback.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import { getCurrentUser } from "../utils/auth";

export default function OAuthCallback() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  useEffect(() => {
    const handleOAuthCallback = async () => {
      try {
        // Check if user exists after OAuth redirect
        const user = await getCurrentUser();
        
        if (user) {
          // User exists - set user in context
          setUser(user);
          
          // Check if user has completed onboarding
          // You might want to check for user profile data here
          // For now, redirect to dashboard
          navigate("/dashboard");
        } else {
          // User doesn't exist - redirect to signup/onboarding
          navigate("/welcome-step");
        }
      } catch (error) {
        console.error("OAuth callback error:", error);
        navigate("/login");
      }
    };

    handleOAuthCallback();
  }, [navigate, setUser]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Completing authentication...</p>
      </div>
    </div>
  );
}