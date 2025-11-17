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

  const isDashboardRoute = location.pathname.startsWith('/dashboard');

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                if (user) {
                  navigate("/dashboard");
                } else {
                  navigate("/");
                }
              }}
              className="cursor-pointer"
            >
              <img src={image3} alt="Koach" className="h-12 w-auto" />
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-12 text-xl ml-12">
            <a href="/about" className="text-[#2D488F] hover:text-blue-700">
              About Us
            </a>
            <a href="/circles" className="text-[#2D488F] hover:text-blue-700">
              Circle
            </a>
            {/* <a href="/resources" className="text-[#2D488F] hover:text-blue-700">
              Resources
            </a> */}
            <a href="/contact" className="text-[#2D488F] hover:text-blue-700">
              Contact
            </a>
          </div>

          {/* Desktop Auth / Search */}
          <div className="hidden md:flex items-center space-x-4">
            {location.pathname !== "/about" && (
              <>
                <div className="flex items-center gap-2 bg-blue-50/50 hover:bg-blue-50/80 transition-all duration-300 rounded-full px-4 py-2 cursor-pointer border border-blue-100/50">
                  <span
                    className="text-[#2D488F] text-sm font-medium hover:text-blue-700 transition-colors"
                    onClick={() => navigate("/listing")}
                  >
                    Search for mentor
                  </span>
                  <Search
                    className="h-4 w-4 text-[#2D488F] cursor-pointer hover:text-blue-700 transition-colors"
                    onClick={() => navigate("/listing")}
                  />
                </div>

                {!isDashboardRoute && (
                  <div className="flex items-center space-x-4">
                    {user ? (
                      <button
                        onClick={() => logout(navigate)}
                        className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                      >
                        Logout
                      </button>
                    ) : (
                      <>
                        <a
                          href="/login"
                          className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                        >
                          Log in
                        </a>
                        <a
                          href="/signup"
                          className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
                        >
                          Get started
                        </a>
                      </>
                    )}
                  </div>
                )}
              </>
            )}
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="md:hidden absolute top-16 right-4 bg-white/95 backdrop-blur-md shadow-2xl p-6 rounded-3xl w-72 z-50 space-y-4 border border-gray-100"
          >
            {/* NEW HOME BUTTON */}
            <a
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[#2D488F] hover:text-blue-700 py-3 px-4 rounded-2xl hover:bg-blue-50/70 transition-all duration-300 font-medium"
            >
              Home
            </a>

            <a
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[#2D488F] hover:text-blue-700 py-3 px-4 rounded-2xl hover:bg-blue-50/70 transition-all duration-300 font-medium"
            >
              About Us
            </a>

            <a
              href="/circles"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[#2D488F] hover:text-blue-700 py-3 px-4 rounded-2xl hover:bg-blue-50/70 transition-all duration-300 font-medium"
            >
              Circle
            </a>

            {/* <a
              href="/resources"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[#2D488F] hover:text-blue-700 py-3 px-4 rounded-2xl hover:bg-blue-50/70 transition-all duration-300 font-medium"
            >
              Resources
            </a> */}

            <a
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[#2D488F] hover:text-blue-700 py-3 px-4 rounded-2xl hover:bg-blue-50/70 transition-all duration-300 font-medium"
            >
              Contact
            </a>

            {/* Search For Mentor */}
            <div
              className="flex items-center justify-between gap-3 py-3 px-4 rounded-2xl bg-blue-50/50 hover:bg-blue-50/80 transition-all duration-300 cursor-pointer border border-blue-100/50"
              onClick={() => {
                navigate("/listing");
                setIsMenuOpen(false);
              }}
            >
              <span className="text-[#2D488F] text-sm font-medium">
                Search for mentor
              </span>
              <Search className="h-4 w-4 text-[#2D488F]" />
            </div>

            {user ? (
              <div className="flex items-center gap-3 py-3 px-4 rounded-2xl bg-gradient-to-r from-blue-50/30 to-indigo-50/30">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#2D488F] to-blue-600 text-white font-semibold shadow-lg">
                  {getInitials(user.displayName || user.email)}
                </div>
                <button
                  onClick={() => {
                    logout(navigate);
                    setIsMenuOpen(false);
                  }}
                  className="text-sm text-[#2D488F] bg-white/80 backdrop-blur-sm border border-[#2D488F]/20 px-5 py-2 rounded-full hover:bg-[#2D488F] hover:text-white transition-all duration-300 font-medium shadow-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <a
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-[#2D488F] hover:text-white text-sm bg-white/80 backdrop-blur-sm border border-[#2D488F]/20 px-6 py-3 rounded-full text-center hover:bg-[#2D488F] transition-all duration-300 font-medium shadow-sm"
                >
                  Log in
                </a>
                <a
                  href="/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-white hover:text-[#2D488F] text-sm bg-gradient-to-r from-[#2D488F] to-blue-600 hover:bg-white border hover:border-[#2D488F] px-6 py-3 rounded-full text-center transition-all duration-300 font-medium shadow-lg"
                >
                  Register
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
