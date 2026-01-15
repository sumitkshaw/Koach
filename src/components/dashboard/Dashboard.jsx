import React, { useState, useEffect } from 'react';
import { Calendar, Trophy, Users, BookOpen, Target, Award, Star, Clock, ChevronRight, Shield, Mail } from 'lucide-react';
import Navigation from '../Navigation';
import Sidenav from './Sidenav';
import Footer from '../Footer';
import { useAuth } from '../../utils/AuthContext';
import { useToast } from '../../context/ToastContext';
import { getUserProfile } from '../../utils/database/profiles';
import ProfileWarning from '../../components/ProfileWarning';
import { getCurrentUser } from '../../utils/auth';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [showWarning, setShowWarning] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showVerificationOverlay, setShowVerificationOverlay] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const { user, sendVerification } = useAuth();
  const { showToast } = useToast();

  useEffect(() => {
    const checkVerificationStatus = async () => {
      try {
        const currentUser = await getCurrentUser();

        if (!currentUser) {
          setLoading(false);
          return;
        }

        // Show welcome toast if flagged (after successful login/signup)
        const welcomeToast = localStorage.getItem("welcome_toast");
        if (welcomeToast) {
          showToast(welcomeToast);
          localStorage.removeItem("welcome_toast");
        }

        setUserEmail(currentUser.email);

        // Check if user is verified
        if (!currentUser.emailVerification) {
          console.log('⚠️ User not verified, showing overlay');
          setShowVerificationOverlay(true);
        } else {
          console.log('✅ User verified, loading profile');
          loadUserProfile();
        }

      } catch (error) {
        console.error('Error checking verification:', error);
        setLoading(false);
      }
    };

    const loadUserProfile = async () => {
      if (!user?.$id) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        console.log('🔄 Loading user profile for:', user.$id);

        const profile = await getUserProfile(user.$id);

        // Auto-create profile if doesn't exist (for existing users)
        if (!profile) {
          console.log('📝 No profile found, checking if auto-creation needed...');
          setTimeout(() => {
            loadUserProfile();
          }, 1000);
          return;
        }

        setUserProfile(profile);
        console.log('✅ Profile loaded:', profile);

        // Show warning for mentees with incomplete profiles
        if (profile?.userType === 'mentee' && !profile.profileComplete) {
          console.log('⚠️ Showing profile warning for mentee');
          setShowWarning(true);
        }

      } catch (error) {
        console.error('❌ Error loading profile:', error);
      } finally {
        setLoading(false);
      }
    };

    checkVerificationStatus();
  }, [user]);

  const handleSendVerification = async () => {
    try {
      await sendVerification(
        () => { }, // setError function
        (message) => {
          alert(message);
        }
      );
    } catch (error) {
      console.error('Failed to send verification:', error);
      alert('Failed to send verification email. Please try again.');
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading your dashboard...</p>
          </div>
        </div>
      </div>
    );
  }

  // Verification Overlay
  if (showVerificationOverlay) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <Navigation />
        <Sidenav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} currentRoute="/dashboard" />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="fixed top-20 left-4 z-30 lg:hidden bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
        >
          <div className="w-6 h-6 flex flex-col justify-center gap-1">
            <div className="w-full h-0.5 bg-gray-600 rounded"></div>
            <div className="w-full h-0.5 bg-gray-600 rounded"></div>
            <div className="w-full h-0.5 bg-gray-600 rounded"></div>
          </div>
        </button>

        {/* Main Content with Blur Overlay */}
        <div className="pt-16">
          <div className="px-4 sm:px-6 lg:px-8 py-6">
            <div className="pt-6 max-w-7xl mx-auto">
              {/* Verification Modal - Centered */}
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                      <Shield className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Verification Required
                    </h2>
                    <p className="text-gray-600">
                      Please verify your email to access the dashboard
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Email: <span className="font-semibold">{userEmail}</span>
                    </p>
                  </div>

                  <div className="space-y-4">
                    <button
                      onClick={handleSendVerification}
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Send Verification Email
                    </button>

                    <a
                      href="/verify-required"
                      className="block w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-center"
                    >
                      Go to Verification Page
                    </a>
                  </div>

                  <p className="text-xs text-gray-500 mt-4 text-center">
                    Check your spam folder if you don't see the email
                  </p>
                </div>
              </div>

              {/* Blurry Dashboard Content */}
              <div className="filter blur-sm pointer-events-none">
                {/* Header */}
                <div className="mb-8 flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-500 rounded-full mr-4 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-2xl">U</span>
                    </div>
                    <div>
                      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center">
                        Welcome Friend!
                        <span className="ml-2 text-2xl">👋</span>
                      </h1>
                      <p className="text-gray-600 mt-1">
                        Ready to learn something new today?
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Dashboard content remains the same but blurred */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Track Your Progress */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50">
                      <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-white font-bold">📈</span>
                        </div>
                        Track your Progress
                      </h2>
                    </div>

                    {/* Milestones */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50">
                      <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-white font-bold">🎯</span>
                        </div>
                        Milestones
                      </h2>
                    </div>

                    {/* Badges */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50">
                      <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-white font-bold">⭐</span>
                        </div>
                        Badges
                      </h2>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Next Session Date */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                          <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                          Next Session Date
                        </h3>
                      </div>
                    </div>

                    {/* Progress towards Goals */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                          <Target className="w-5 h-5 mr-2 text-green-600" />
                          Progress towards Goals
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    );
  }

  // Get user's first name or display name
  const getUserDisplayName = () => {
    if (userProfile?.displayName) return userProfile.displayName;
    if (user?.name) {
      // Extract first name
      const firstName = user.name.split(' ')[0];
      return firstName;
    }
    return 'Friend';
  };

  // Get user initial for avatar
  const getUserInitial = () => {
    if (userProfile?.displayName) return userProfile.displayName.charAt(0).toUpperCase();
    if (user?.name) return user.name.charAt(0).toUpperCase();
    return 'U';
  };

  // Normal dashboard when verified
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <Navigation />
      <Sidenav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} currentRoute="/dashboard" />

      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed top-20 left-4 z-30 lg:hidden bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
      >
        <div className="w-6 h-6 flex flex-col justify-center gap-1">
          <div className="w-full h-0.5 bg-gray-600 rounded"></div>
          <div className="w-full h-0.5 bg-gray-600 rounded"></div>
          <div className="w-full h-0.5 bg-gray-600 rounded"></div>
        </div>
      </button>

      {/* Main Content */}
      <div className={`pt-16 transition-all duration-300`}>
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="pt-6 max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8 flex items-start justify-between">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-500 rounded-full mr-4 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <span className="text-white font-bold text-2xl">
                    {getUserInitial()}
                  </span>
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center">
                    Welcome {getUserDisplayName()}!
                    <span className="ml-2 text-2xl">👋</span>
                  </h1>
                  <p className="text-gray-600 mt-1">
                    {userProfile?.userType === 'mentee' ? 'Ready to learn something new today?' : 'Happy mentoring!'}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-6">
                {/* Track Your Progress */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300">
                  <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold">📈</span>
                    </div>
                    Track your Progress
                  </h2>

                  {/* Progress Chart */}
                  <div className="mb-6">
                    <div className="flex items-end justify-center space-x-4 sm:space-x-6 md:space-x-8 h-48 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                      {['MON', 'TUES', 'WED', 'THURS', 'FRI'].map((day, index) => {
                        const heights = [120, 100, 70, 90, 80];
                        const isDone = index < 2;
                        return (
                          <div key={day} className="flex flex-col items-center group">
                            <div
                              className={`w-10 sm:w-12 rounded-lg transition-all duration-500 ${isDone
                                ? 'bg-gradient-to-t from-blue-500 to-blue-600'
                                : 'bg-gradient-to-t from-gray-300 to-gray-400'
                                } group-hover:scale-105`}
                              style={{ height: `${heights[index]}px` }}
                            ></div>
                            <span className="text-sm font-medium text-gray-700 mt-3">{day}</span>
                            <span className={`text-xs ${isDone ? 'text-gray-500' : 'text-blue-600 font-medium'}`}>
                              {isDone ? 'Done' : 'To be Done'}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Milestones */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300">
                  <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold">🎯</span>
                    </div>
                    Milestones
                  </h2>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {[
                      { icon: Clock, value: '100 mins', label: 'Time Saved', color: 'from-blue-500 to-blue-600' },
                      { icon: BookOpen, value: '5', label: 'New Skills Learned', color: 'from-purple-500 to-purple-600' },
                      { icon: Users, value: '$80', label: 'Money Saved', color: 'from-green-500 to-emerald-600' },
                      { icon: Calendar, value: '100%', label: 'Attendance Streak', color: 'from-amber-500 to-amber-600' },
                      { icon: Target, value: '5', label: 'Goals Achieved', color: 'from-red-500 to-pink-600' },
                      { icon: Award, value: '3', label: 'Projects Completed', color: 'from-indigo-500 to-indigo-600' },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="text-center p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 group"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-lg font-bold text-gray-900">{item.value}</div>
                        <div className="text-xs text-gray-600">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Badges */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300">
                  <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold">⭐</span>
                    </div>
                    Badges
                  </h2>

                  <div className="grid grid-cols-3 gap-6">
                    {[
                      { title: 'First Post', icon: Award, color: 'from-blue-500 to-blue-600' },
                      { title: 'First Engagement', icon: Star, color: 'from-purple-500 to-purple-600' },
                      { title: 'First Question', icon: Award, color: 'from-green-500 to-emerald-600' },
                    ].map((badge, index) => (
                      <div key={index} className="text-center p-4 group">
                        <div className={`w-20 h-20 bg-gradient-to-br ${badge.color} rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
                          <badge.icon className="w-10 h-10 text-white" />
                        </div>
                        <div className="text-sm font-semibold text-gray-900 group-hover:text-gray-800 transition-colors">{badge.title}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Next Session Date */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                      Next Session Date
                    </h3>
                    <ChevronRight className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors" />
                  </div>
                  <div className="space-y-3">
                    {[1, 2].map((item) => (
                      <div key={item} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-xl hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 border border-blue-100">
                        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg border border-blue-200">
                          <div className="text-center">
                            <div className="text-xs font-semibold text-blue-700">MAY</div>
                            <div className="text-sm font-bold text-blue-700">{24 + item}</div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-gray-900">Andrea Watson at 3:00 pm</div>
                        </div>
                        <div className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 cursor-pointer transition-colors">
                          <div className="w-6 h-6 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full"></div>
                          <span className="text-xs font-medium">View Profile</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress towards Goals */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-green-600" />
                      Progress towards Goals
                    </h3>
                    <ChevronRight className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors" />
                  </div>

                  {/* Progress bars */}
                  <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
                    <span>0%</span>
                    <span>25%</span>
                    <span>100%</span>
                  </div>

                  <div className="h-2 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full overflow-hidden mb-4">
                    <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full w-1/4"></div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">Your Goals for the Next 30 Days</p>

                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      {['Front End Development', 'Leadership', 'Web Development', 'Project Management'].map((goal) => (
                        <span key={goal} className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 text-xs font-medium rounded-full border border-blue-200">
                          {goal}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* This Week's Activities */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-purple-600" />
                    This Week's Activities
                  </h3>
                  <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="flex items-start space-x-3 group">
                        <div className="w-8 h-8 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex-shrink-0 group-hover:from-gray-400 group-hover:to-gray-500 transition-all duration-300"></div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-gray-900 group-hover:text-gray-800 transition-colors">Andrea Watson</div>
                          <div className="text-sm text-gray-600">Watch Figma Tutorial on Auto Layout</div>
                          <div className="text-xs text-blue-600 font-medium mt-1">Front End Development</div>
                        </div>
                        <span className="text-xs text-gray-500 flex-shrink-0 group-hover:text-gray-700 transition-colors">Due May 26</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Book a New Session */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Book a New Session</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { title: 'Book Another', count: 2 },
                      { title: 'Book Featured', count: 5 },
                    ].map((item, index) => (
                      <div key={index} className="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100">
                        <div className="flex -space-x-2 justify-center mb-3">
                          {Array.from({ length: item.count }).map((_, idx) => (
                            <div key={idx} className="w-8 h-8 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full border-2 border-white shadow-sm"></div>
                          ))}
                        </div>
                        <div className="text-sm font-semibold text-gray-900">{item.title}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>

      {/* Profile Warning for incomplete mentee profiles */}
      {showWarning && <ProfileWarning />}
    </div>
  );
};

export default Dashboard;