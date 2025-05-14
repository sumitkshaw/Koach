import { useState, useEffect, useRef } from 'react';
import { Menu, Search } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

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
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img src={logo} alt="Koach" className="h-9 w-auto" />
            </a>
          </div>

          {/* Middle: Nav Links - Hidden on mobile */}
          <div className="hidden md:flex space-x-12 text-xl ml-12">
            <a href="/about" className="text-[#2D488F] hover:text-blue-700">About</a>
            <a href="#" className="text-[#2D488F] hover:text-blue-700">Connect</a>
            <a href="#" className="text-[#2D488F] hover:text-blue-700">Resources</a>
            <a href="#" className="text-[#2D488F] hover:text-blue-700">Circles</a>
          </div>

          {/* Right: Search + Auth - Always visible on all screen sizes */}
          <div className="flex items-center space-x-4 absolute right-4 top-3 md:static">
            {location.pathname !== '/about' && (
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
                  href="#"
                  className="text-[#2D488F] hover:text-blue-700 text-sm border border-[#2D488F] px-4 py-2 rounded-full transition duration-300"
                >
                  Log in
                </a>
                <a
                  href="#"
                  className="text-[#2D488F] hover:text-blue-700 text-sm border border-[#2D488F] px-4 py-2 rounded-full transition duration-300"
                >
                  Register
                </a>
              </>
            )}
          </div>
        </div>

        {/* Hamburger Icon - Positioned below on mobile */}
        <div className="md:hidden mt-1 flex justify-end pr-4">
          <button className="text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu - Appears when isMenuOpen is true */}
        {isMenuOpen && (
          <div ref={menuRef} className="md:hidden absolute top-16 right-4 bg-white shadow-lg p-4 rounded-md w-48">
            <a href="/about" className="block text-[#2D488F] hover:text-blue-700 py-2" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#" className="block text-[#2D488F] hover:text-blue-700 py-2" onClick={() => setIsMenuOpen(false)}>
              Connect
            </a>
            <a href="#" className="block text-[#2D488F] hover:text-blue-700 py-2" onClick={() => setIsMenuOpen(false)}>
              Resources
            </a>
            <a href="#" className="block text-[#2D488F] hover:text-blue-700 py-2" onClick={() => setIsMenuOpen(false)}>
              Circles
            </a>
           
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
