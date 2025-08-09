import { useState, useEffect, useRef } from "react";
import { Menu, Search } from "lucide-react";
import { useLocation } from "react-router-dom";
import image3 from "../assets/image3.png";
import { useAuth } from "../utils/AuthContext";
import { FaCloud } from 'react-icons/fa'; // Using react-icons for the cloud

function Navigation() {
  const location = useLocation();
  const { user, logout } = useAuth(); // 👈 Grab user and logout
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
  const dropdownRef = useRef(null);

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

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getInitials = (name) => {
    if (!name) return "";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
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
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowResourcesDropdown(!showResourcesDropdown)}
                className="text-[#2D488F] hover:text-blue-700 focus:outline-none"
              >
                Resources
              </button>

              {/* Cloud Dropdown - Desktop */}
              {showResourcesDropdown && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 z-50">
                  {/* Cloud Body */}
                  <div className="bg-white rounded-3xl shadow-lg py-4 px-6 relative border border-gray-200">
                    <div className="flex items-center justify-center text-gray-600">
                      <FaCloud className="mr-2 text-gray-400 text-lg" />
                      <span className="text-sm italic font-medium">Coming Soon!</span>
                    </div>
                  </div>
                  
                  {/* Cloud Tail */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-200"></div>
                </div>
              )}
            </div>
            <a href="/contact" className="text-[#2D488F] hover:text-blue-700">
              Contact
            </a>
          </div>

          {/* Auth / Search (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {location.pathname !== "/about" && (
              <>
                <div className="relative">
                  {isSearchOpen && (
                    <input
                      type="text"
                      placeholder="Search..."
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-40 px-3 py-1 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2D488F] text-sm z-20 bg-white"
                      autoFocus
                    />
                  )}
                  <Search
                    className="h-5 w-5 text-[#2D488F] cursor-pointer z-10"
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                  />
                </div>

                {user ? (
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2D488F] text-white font-semibold">
                      {getInitials(user.displayName || user.email)}
                    </div>
                    <button
                      onClick={logout}
                      className="text-sm text-[#2D488F] border border-[#2D488F] px-3 py-1 rounded-full"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <>
                    <a
                      href="/login"
                      className="text-[#2D488F] hover:text-blue-700 text-sm border border-[#2D488F] px-4 py-2 rounded-full transition duration-300"
                    >
                      Log in
                    </a>
                    <a
                      href="/signup"
                      className="text-[#2D488F] hover:text-blue-700 text-sm border border-[#2D488F] px-4 py-2 rounded-full transition duration-300"
                    >
                      Register
                    </a>
                  </>
                )}
              </>
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* Mobile Menu */}
{isMenuOpen && (
  <div
    ref={menuRef}
    className="md:hidden absolute top-16 right-4 bg-white/95 backdrop-blur-md shadow-2xl p-6 rounded-3xl w-72 z-50 space-y-4 border border-gray-100"
  >
    <a
      href="/about"
      className="block text-[#2D488F] hover:text-blue-700 py-3 px-4 rounded-2xl hover:bg-blue-50/70 transition-all duration-300 font-medium"
    >
      About Us
    </a>
    <a
      href="/circles"
      className="block text-[#2D488F] hover:text-blue-700 py-3 px-4 rounded-2xl hover:bg-blue-50/70 transition-all duration-300 font-medium"
    >
      Circle
    </a>
    
    {/* Resources with dropdown for mobile */}
    <div className="relative">
      <button
        onClick={() => setShowResourcesDropdown(!showResourcesDropdown)}
        className="block w-full text-left text-[#2D488F] hover:text-blue-700 focus:outline-none py-3 px-4 rounded-2xl hover:bg-blue-50/70 transition-all duration-300 font-medium"
      >
        Resources
      </button>
      
      {/* Cloud Dropdown - Mobile */}
      {showResourcesDropdown && (
        <div className="mt-3 ml-4 relative">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-2xl py-4 px-5 relative border border-gray-100/50 shadow-sm">
            <div className="flex items-center text-gray-600">
              <FaCloud className="mr-3 text-blue-300 text-lg" />
              <span className="text-sm italic font-light">Coming Soon!</span>
            </div>
          </div>
        </div>
      )}
    </div>
    
    <a 
      href="/contact" 
      className="block text-[#2D488F] hover:text-blue-700 py-3 px-4 rounded-2xl hover:bg-blue-50/70 transition-all duration-300 font-medium"
    >
      Contact
    </a>

    {location.pathname !== "/about" && (
      <>
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-4" />
        <div className="flex items-center gap-3 py-2 px-4 rounded-2xl bg-gray-50/50">
          <Search
            className="h-5 w-5 text-[#2D488F] cursor-pointer hover:text-blue-700 transition-colors duration-200"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          />
          {isSearchOpen && (
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D488F]/20 text-sm bg-white/80 backdrop-blur-sm shadow-sm"
              autoFocus
            />
          )}
        </div>
        {user ? (
          <div className="flex items-center gap-3 py-3 px-4 rounded-2xl bg-gradient-to-r from-blue-50/30 to-indigo-50/30">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#2D488F] to-blue-600 text-white font-semibold shadow-lg">
              {getInitials(user.displayName || user.email)}
            </div>
            <button
              onClick={logout}
              className="text-sm text-[#2D488F] bg-white/80 backdrop-blur-sm border border-[#2D488F]/20 px-5 py-2 rounded-full hover:bg-[#2D488F] hover:text-white transition-all duration-300 font-medium shadow-sm"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <a
              href="/login"
              className="block text-[#2D488F] hover:text-white text-sm bg-white/80 backdrop-blur-sm border border-[#2D488F]/20 px-6 py-3 rounded-full text-center hover:bg-[#2D488F] transition-all duration-300 font-medium shadow-sm"
            >
              Log in
            </a>
            <a
              href="/signup"
              className="block text-white hover:text-[#2D488F] text-sm bg-gradient-to-r from-[#2D488F] to-blue-600 hover:bg-white border hover:border-[#2D488F] px-6 py-3 rounded-full text-center transition-all duration-300 font-medium shadow-lg"
            >
              Register
            </a>
          </div>
        )}
      </>
    )}
  </div>
)}
      </div>
    </nav>
  );
}

export default Navigation;