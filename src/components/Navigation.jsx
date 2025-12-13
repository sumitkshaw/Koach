import { useState, useEffect, useRef } from "react";
import { Menu, Search } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import image3 from "../assets/image3.png";
import { useAuth } from "../utils/AuthContext";
import { FaCloud } from "react-icons/fa";

function Navigation() {
  const location = useLocation();
  const { user, logout } = useAuth();
  const [isSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Get dashboard type from localStorage or determine from current path
  const getStoredDashboardType = () => {
    // Check if we're currently on a dashboard route
    if (location.pathname.startsWith('/dashboard_mentor')) {
      localStorage.setItem('dashboardType', 'mentor');
      return 'mentor';
    } else if (location.pathname.startsWith('/dashboard')) {
      localStorage.setItem('dashboardType', 'mentee');
      return 'mentee';
    }
    
    // Fallback to stored value or default
    const stored = localStorage.getItem('dashboardType');
    return stored || 'mentee'; // default to mentee if nothing stored
  };

  const [dashboardType, setDashboardType] = useState(getStoredDashboardType);

  useEffect(() => {
    // Update dashboard type when location changes
    if (location.pathname.startsWith('/dashboard_mentor')) {
      setDashboardType('mentor');
      localStorage.setItem('dashboardType', 'mentor');
    } else if (location.pathname.startsWith('/dashboard')) {
      setDashboardType('mentee');
      localStorage.setItem('dashboardType', 'mentee');
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowResourcesDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getInitials = (name) => {
    if (!name) return "";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const getDashboardPath = () => {
    return dashboardType === 'mentor' ? "/dashboard_mentor" : "/dashboard";
  };

  const handleDashboardNavigation = () => {
    const dashboardPath = getDashboardPath();
    navigate(dashboardPath);
  };

  const handleBecomeMentor = () => {
    // Redirect to mentor-signup page
    navigate("/mentor-signup");
    setIsMenuOpen(false);
  };

  // Check if current path matches nav link
  const isActive = (path) => {
    return location.pathname === path || 
           (path === '/' && location.pathname === '/') ||
           (path !== '/' && location.pathname.startsWith(path));
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
              className="cursor-pointer"
            >
              <img src={image3} alt="Koach" className="h-10 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-10 ml-16">
            {/* Navigation Links with underline animation */}
            <div className="flex space-x-10">
              <a
                href="/about"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/about");
                }}
                className="group relative text-gray-700 hover:text-gray-900 text-lg font-medium tracking-wide py-2 px-1 transition-colors duration-200"
              >
                About Us
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#2D488F] to-blue-500 transform origin-left transition-transform duration-300 ${isActive('/about') ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}></span>
              </a>

              <a
                href="/circles"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/circles");
                }}
                className="group relative text-gray-700 hover:text-gray-900 text-lg font-medium tracking-wide py-2 px-1 transition-colors duration-200"
              >
                Circle
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#2D488F] to-blue-500 transform origin-left transition-transform duration-300 ${isActive('/circles') ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}></span>
              </a>

              <a
                href="/listing"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/listing");
                }}
                className="group relative text-gray-700 hover:text-gray-900 text-lg font-medium tracking-wide py-2 px-1 transition-colors duration-200"
              >
                Koach
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#2D488F] to-blue-500 transform origin-left transition-transform duration-300 ${isActive('/listing') ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}></span>
              </a>

              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/contact");
                }}
                className="group relative text-gray-700 hover:text-gray-900 text-lg font-medium tracking-wide py-2 px-1 transition-colors duration-200"
              >
                Contact
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#2D488F] to-blue-500 transform origin-left transition-transform duration-300 ${isActive('/contact') ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}></span>
              </a>

              {/* Dashboard link - only show when user is logged in */}
              {user && (
                <a
                  href={getDashboardPath()}
                  onClick={(e) => {
                    e.preventDefault();
                    handleDashboardNavigation();
                  }}
                  className="group relative text-gray-700 hover:text-gray-900 text-lg font-medium tracking-wide py-2 px-1 transition-colors duration-200"
                >
                  Dashboard
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#2D488F] to-blue-500 transform origin-left transition-transform duration-300 ${isActive('/dashboard') || isActive('/dashboard_mentor') ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}></span>
                </a>
              )}
            </div>
          </div>

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  {/* Profile Section */}
                  <div className="flex items-center space-x-4">
                    {/* Profile Picture with Initials */}
                    <div 
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-r from-[#2D488F] to-blue-500 text-white font-medium text-sm shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
                      onClick={() => handleDashboardNavigation()}
                    >
                      {getInitials(user.displayName || user.email)}
                    </div>
                    
                    {/* Logout Button */}
                    <button
                      onClick={() => {
                        // Clear dashboard type on logout
                        localStorage.removeItem('dashboardType');
                        logout(navigate);
                      }}
                      className="text-gray-600 hover:text-gray-900 px-4 py-2 text-sm font-medium border border-gray-200 hover:border-gray-300 rounded-md transition-all duration-200 hover:shadow-sm"
                    >
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* Become a Mentor Button */}
                  <button
                    onClick={handleBecomeMentor}
                    className="text-gray-600 hover:text-gray-900 px-4 py-2 text-sm font-medium border border-gray-200 hover:border-gray-300 rounded-md transition-all duration-200 hover:shadow-sm"
                  >
                    Become a Mentor
                  </button>
                  
                  {/* Login Button */}
                  <a
                    href="/login"
                    className="text-gray-600 hover:text-gray-900 px-4 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    Log in
                  </a>
                  
                  {/* Get Started Button */}
                  <a
                    href="/signup"
                    className="bg-gradient-to-r from-[#2D488F] to-blue-500 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:shadow-md transition-all duration-200 hover:opacity-95"
                  >
                    Get Started
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-600 hover:text-gray-900 transition-transform duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    d="M6 6L18 18M6 18L18 6"
                  />
                </svg>
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Updated with same text styling as desktop */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="md:hidden absolute top-16 right-4 bg-white/95 backdrop-blur-md shadow-2xl p-6 rounded-3xl w-72 z-50 space-y-4 border border-gray-100"
          >
            <a
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 hover:text-gray-900 py-3 px-4 rounded-2xl hover:bg-gray-50/70 transition-all duration-200 font-medium tracking-wide hover:translate-x-1 hover:shadow-sm"
            >
              Home
            </a>

            <a
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 hover:text-gray-900 py-3 px-4 rounded-2xl hover:bg-gray-50/70 transition-all duration-200 font-medium tracking-wide hover:translate-x-1 hover:shadow-sm"
            >
              About Us
            </a>

            <a
              href="/circles"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 hover:text-gray-900 py-3 px-4 rounded-2xl hover:bg-gray-50/70 transition-all duration-200 font-medium tracking-wide hover:translate-x-1 hover:shadow-sm"
            >
              Circle
            </a>

            <a
              href="/listing"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 hover:text-gray-900 py-3 px-4 rounded-2xl hover:bg-gray-50/70 transition-all duration-200 font-medium tracking-wide hover:translate-x-1 hover:shadow-sm"
            >
              Koach
            </a>

            <a
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 hover:text-gray-900 py-3 px-4 rounded-2xl hover:bg-gray-50/70 transition-all duration-200 font-medium tracking-wide hover:translate-x-1 hover:shadow-sm"
            >
              Contact
            </a>

            {/* Dashboard link for mobile - only show when user is logged in */}
            {user && (
              <a
                href={getDashboardPath()}
                onClick={(e) => {
                  e.preventDefault();
                  handleDashboardNavigation();
                  setIsMenuOpen(false);
                }}
                className="block text-gray-700 hover:text-gray-900 py-3 px-4 rounded-2xl hover:bg-gray-50/70 transition-all duration-200 font-medium tracking-wide hover:translate-x-1 hover:shadow-sm"
              >
                Dashboard
              </a>
            )}

            {user ? (
              <div className="flex items-center gap-3 py-3 px-4 rounded-2xl bg-gradient-to-r from-gray-50/30 to-gray-50/30 hover:bg-gray-50/50 transition-all duration-200 hover:translate-x-1 hover:shadow-sm">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#2D488F] to-blue-500 text-white font-medium shadow-sm hover:shadow-md transition-all duration-200">
                  {getInitials(user.displayName || user.email)}
                </div>
                <button
                  onClick={() => {
                    localStorage.removeItem('dashboardType');
                    logout(navigate);
                    setIsMenuOpen(false);
                  }}
                  className="text-sm text-gray-600 hover:text-gray-900 bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-gray-300 px-5 py-2 rounded-full transition-all duration-200 font-medium hover:shadow-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {/* Become a Mentor Button for Mobile - Updated styling */}
                <button
                  onClick={handleBecomeMentor}
                  className="w-full text-gray-600 hover:text-gray-900 text-sm bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-gray-300 px-6 py-3 rounded-full text-center transition-all duration-200 font-medium hover:translate-x-1 hover:shadow-sm"
                >
                  Become a Mentor
                </button>
                
                <a
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-600 hover:text-gray-900 text-sm bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-gray-300 px-6 py-3 rounded-full text-center transition-all duration-200 font-medium hover:translate-x-1 hover:shadow-sm"
                >
                  Log in
                </a>
                
                <a
                  href="/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-white hover:text-[#2D488F] text-sm bg-gradient-to-r from-[#2D488F] to-blue-500 hover:bg-white border hover:border-[#2D488F] px-6 py-3 rounded-full text-center transition-all duration-200 font-medium shadow-sm hover:shadow hover:translate-x-1"
                >
                  Get Started
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;