import { useState, useEffect, useRef } from "react";
import { Menu, Search } from "lucide-react";
import { useLocation } from "react-router-dom";
import image3 from '../assets/image3.png'

function Navigation() {
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle
  const menuRef = useRef(null); // Ref for the menu to detect clicks outside

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img src={image3} alt="Koach" className="h-12 w-auto " />
            </a>
          </div>

          {/* Middle: Nav Links - Hidden on mobile */}
          <div className="hidden md:flex space-x-12 text-xl ml-12">
            <a href="/about" className="text-[#2D488F] hover:text-blue-700">
              About Us
            </a>
            <a href="/circles" className="text-[#2D488F] hover:text-blue-700">
              Circle
            </a>
            <a href="#" className="text-[#2D488F] hover:text-blue-700">
              Resources
            </a>
            <a href="#" className="text-[#2D488F] hover:text-blue-700">
              Connect
            </a>
          </div>

          {/* Right: Search + Auth (Only shown on md and above) */}
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
          </div>

          {/* Hamburger Icon - visible on mobile */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="md:hidden absolute top-16 right-4 bg-white shadow-lg p-4 rounded-md w-64 z-50 space-y-2"
          >
            <a
              href="/about"
              className="block text-[#2D488F] hover:text-blue-700"
            >
              About Us
            </a>
            <a href="/circles" className="block text-[#2D488F] hover:text-blue-700">
              Circle
            </a>
            <a href="#" className="block text-[#2D488F] hover:text-blue-700">
              Resources
            </a>
            <a href="#" className="block text-[#2D488F] hover:text-blue-700">
              Connect
            </a>

            {/* Mobile Login/Register/Search */}
            {location.pathname !== "/about" && (
              <>
                <hr className="my-2" />
                <div className="flex items-center gap-2">
                  <Search
                    className="h-5 w-5 text-[#2D488F] cursor-pointer"
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                  />
                  {isSearchOpen && (
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2D488F] text-sm bg-white"
                      autoFocus
                    />
                  )}
                </div>
                <a
                  href="/login"
                  className="block text-[#2D488F] hover:text-blue-700 text-sm border border-[#2D488F] px-4 py-2 rounded-full text-center"
                >
                  Log in
                </a>
                <a
                  href="signup"
                  className="block text-[#2D488F] hover:text-blue-700 text-sm border border-[#2D488F] px-4 py-2 rounded-full text-center"
                >
                  Register
                </a>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
