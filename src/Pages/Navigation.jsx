import React, { useState } from 'react';
import { Menu, Search } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navigation() {
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img src={logo} alt="Koach" className="h-9 w-auto" />
          </div>

          <div className="hidden md:flex mr-40 pr-40 space-x-24 text-xl">
            <a href="/about" className="text-[#2D488F] hover:text-blue-700">About</a>
            <a href="#" className="text-[#2D488F] hover:text-blue-700">Connect</a>
            <a href="#" className="text-[#2D488F] hover:text-blue-700">Resources</a>
            <a href="#" className="text-[#2D488F] hover:text-blue-700">Circles</a>
          </div>

          <div className="md:flex items-center space-x-4 text-xl">
            {location.pathname !== '/about' ? (
              <>
                <div className="relative">
                  {isSearchOpen && (
                    <input
                      type="text"
                      placeholder="Search..."
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-48 px-4 py-1 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[2D488F] text-base"
                      autoFocus
                    />
                  )}
                  <Search 
                    className="h-5 w-5 text-[#2D488F] cursor-pointer relative z-10" 
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                  />
                </div>
                <a href="#" className="text-[#2D488F] hover:text-blue-700 underline">Log in</a>
                <a href="#" className="text-[#2D488F] hover:text-blue-700 underline">Register</a>
              </>
            ) : (
              <div className="w-32 ml-12"></div> 
            )}
          </div>

          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;