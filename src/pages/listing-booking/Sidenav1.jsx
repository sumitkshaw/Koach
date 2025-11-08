import React from 'react';
import { X, ChevronRight, Filter } from 'lucide-react';

const Sidenav1 = ({ sidebarOpen, setSidebarOpen }) => {
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const sortOptions = [
    { name: 'Available ASAP', type: 'toggle' },
    { name: 'Hourly charges', type: 'dropdown' },
    { name: 'Ratings', type: 'dropdown' },
    { name: 'Years of experience', type: 'dropdown' },
    { name: 'Service category', type: 'dropdown' },
    { name: 'Industry', type: 'dropdown' },
    { name: 'Location', type: 'dropdown' },
    { name: 'Language', type: 'dropdown' },
    { name: 'Skill-set', type: 'dropdown' },
  ];

  return (
    <>
      {/* Filter Toggle Button for Mobile */}
      <button
        onClick={toggleSidebar}
        className="fixed top-20 left-4 z-50 bg-gradient-to-r from-blue-100 to-indigo-400 text-white p-3 rounded-xl shadow-2xl hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105 lg:hidden"
      >
        <div className={`transition-transform duration-300 ${sidebarOpen ? 'rotate-180' : 'rotate-0'}`}>
          {sidebarOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Filter className="w-5 h-5" />
          )}
        </div>
      </button>

      {/* Backdrop Overlay for Mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 bg-[#0A1F44] text-white transition-transform duration-500 ease-in-out z-40 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } w-80 shadow-2xl flex flex-col lg:top-16 lg:h-[calc(100vh-4rem)]`}>
        
        {/* Close Button - Mobile Only */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 lg:hidden text-white hover:text-gray-300 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Mobile Header Spacer */}
        <div className="h-28 lg:hidden"></div>
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-8">
          
          {/* Availability Section */}
          <div className="mb-8 lg:mt-0">
            <h3 className="text-xl font-bold mb-4">Availability</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm text-gray-300 mb-2">Select date</label>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="From"
                    className="bg-white text-gray-800 px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <input
                    type="text"
                    placeholder="To"
                    className="bg-white text-gray-800 px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sort By Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Sort by</h3>
              <button className="text-sm text-gray-300 hover:text-white transition-colors">
                Show all
              </button>
            </div>

            <div className="space-y-1">
              {sortOptions.map((option, index) => (
                <div key={index}>
                  {option.type === 'toggle' ? (
                    <div className="flex items-center justify-between py-3 border-b border-white/10">
                      <span className="text-sm font-medium">{option.name}</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white"></div>
                      </label>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between py-3 border-b border-white/10 cursor-pointer hover:bg-[#112a5c] transition-colors">
                      <span className="text-sm font-medium">{option.name}</span>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Show Results Button */}
        <div className="p-6 border-t border-white/10 flex-shrink-0">
          <button 
            onClick={toggleSidebar}
            className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors shadow-lg"
          >
            Show results
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidenav1;
