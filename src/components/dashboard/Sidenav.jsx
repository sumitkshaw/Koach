import React from 'react';
import { Menu, X, TrendingUp, Users, User, Target, Calendar, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Sidenav = ({ sidebarOpen, setSidebarOpen, currentRoute = '/dashboard' }) => {
  const navigate = useNavigate(); // Add this line - you were missing this!

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const navigationItems = [
    { name: 'Dashboard', icon: TrendingUp, route: '/dashboard' },
    { name: 'My Mentors', icon: Users, route: '/dashboard/mentors' },
    { name: 'Goals', icon: Target, route: '/dashboard/goals' },
    { name: 'Calendar', icon: Calendar, route: '/dashboard/calendar' },
    { name: 'Messages', icon: MessageSquare, route: '/dashboard/messages' },
  ];

  const handleNavigation = (route) => {
    navigate(route);
    
    // Close sidebar on mobile after navigation
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-20 left-4 z-50 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-xl shadow-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
      >
        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Backdrop Blur Overlay for Mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-gradient-to-b from-slate-900 via-blue-900 to-indigo-900 text-white transition-transform duration-500 ease-in-out z-40 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } w-64 shadow-2xl backdrop-blur-sm`}>
        <div className="p-4 pt-16">
          <nav className="space-y-3">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = currentRoute === item.route;
              
              return (
                <div
                  key={item.route}
                  onClick={() => handleNavigation(item.route)}
                  className={`flex items-center space-x-3 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg' 
                      : 'hover:bg-white hover:bg-opacity-10 hover:shadow-lg backdrop-blur-sm'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className={isActive ? 'font-semibold' : 'font-medium'}>{item.name}</span>
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidenav;