import { Search } from 'lucide-react';

const CircleSearchSection = () => {
  const popularSearches = [
    'Finance',
    'Education',
    'Innovation',
    'Startup',
    'Tech',
    'Design & Creative',
    'University Admission',
    'Marketing'
  ];

  return (
    <section className="relative w-full bg-[#efeff3] px-4 md:px-8 lg:px-20 xl:px-40 pb-8 md:pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto">
        {/* White container box */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 md:p-8 lg:p-12">
          {/* Search Bar */}
          <div className="mb-6 md:mb-8">
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-[#2D488F]/40" />
              </div>
              <input
                type="text"
                placeholder="Search by interests"
                className="w-full pl-12 pr-4 py-3 md:py-4 text-sm md:text-base text-[#2D488F] placeholder-[#2D488F]/50 bg-white border-2 border-[#2D488F]/20 rounded-full focus:outline-none focus:border-[#2D488F]/40 transition-colors"
              />
            </div>
          </div>

          {/* Popular Searches */}
          <div className="space-y-4">
            <h3 className="text-base md:text-lg font-semibold text-[#2D488F]/80 text-center md:text-left px-2">
              Popular Searches
            </h3>
            
            {/* Tags Grid */}
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
              {popularSearches.map((search, index) => (
                <button
                  key={index}
                  className="px-4 md:px-5 py-2 md:py-2.5 text-xs md:text-sm font-medium text-[#2D488F] bg-white border-2 border-[#2D488F]/20 rounded-full hover:bg-[#2D488F]/5 hover:border-[#2D488F]/40 transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  {search}
                </button>
              ))}
              
              {/* View All Button */}
              <button className="px-4 md:px-5 py-2 md:py-2.5 text-xs md:text-sm font-medium text-white bg-[#2D488F] rounded-full hover:bg-[#2D488F]/90 transition-all duration-200 hover:scale-105 active:scale-95">
                View all
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CircleSearchSection;