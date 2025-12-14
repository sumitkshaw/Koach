// src/pages/OAuthCallback.jsx - FIXED VERSION
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import { getCurrentUser } from "../utils/auth";
import {
  createUserProfile,
  getUserProfile,
  checkOnboardingStatus,
} from "../utils/database/profiles";

export default function OAuthCallback() {
  const navigate = useNavigate();
  const { user, setUser } = useAuth(); // Add setUser here

  useEffect(() => {
    const handleOAuthCallback = async () => {
  try {
    // Check if user exists after OAuth redirect
    const currentUser = await getCurrentUser();
    
    if (!currentUser) {
      navigate("/login");
      return;
    }
    
    // Set user in context
    setUser(currentUser);
    
    // Get or create profile (idempotent - safe to call multiple times)
    const userType = localStorage.getItem('signupUserType') || 'mentee';
    const profile = await createUserProfile({
      userId: currentUser.$id,
      userType,
      displayName: currentUser.name || '',
    });
    
    localStorage.removeItem('signupUserType');
    
    console.log('✅ OAuth successful, profile:', profile);
    
    // Simple redirect logic
    if (profile.userType === 'mentor' && !profile.onboardingComplete) {
      navigate("/mentor-onboarding");
    } else if (profile.userType === 'mentor') {
      navigate("/dashboard_mentor");
    } else {
      navigate("/dashboard");
    }
    
  } catch (error) {
    console.error("OAuth callback error:", error);
    // Even if profile creation fails, redirect to dashboard
    navigate("/dashboard");
  }
};

    handleOAuthCallback();
  }, [navigate, setUser]); // Add setUser to dependencies

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Completing authentication...</p>
      </div>
    </div>
  );
}
