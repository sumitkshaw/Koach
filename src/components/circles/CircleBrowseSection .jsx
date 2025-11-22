import { TrendingUp, DollarSign, Palette, Briefcase, Code, Users, ArrowRight } from 'lucide-react';
import research from '../../assets/circle/research.png';
import promotion from '../../assets/circle/promotion.png';
import finance from '../../assets/circle/finance.png';
import art from '../../assets/circle/art.png';
import innovation from '../../assets/circle/innovation.png';
import animation from '../../assets/circle/animation.png';
import { useState } from 'react';

const CircleBrowseSection = () => {
  const [selectedInterest, setSelectedInterest] = useState(0);

  const interestCategories = [
    { icon: TrendingUp, label: 'Trending', color: 'bg-yellow-50 border-yellow-200' },
    { icon: DollarSign, label: 'Finance', color: 'bg-white border-gray-200' },
    { icon: Palette, label: 'Design', color: 'bg-white border-gray-200' },
    { icon: Briefcase, label: 'Business', color: 'bg-white border-gray-200' },
    { icon: Code, label: 'Development', color: 'bg-white border-gray-200' },
    { icon: Users, label: 'Community', color: 'bg-white border-gray-200' },
    { icon: TrendingUp, label: 'Technology', color: 'bg-white border-gray-200' },
    { icon: Palette, label: 'Creative', color: 'bg-white border-gray-200' }
  ];

  const circleCategories = [
    {
      title: 'Marketing',
      circles: [
        {
          name: 'Research',
          members: '21k',
          illustration: research,
          illustrationSize: 'w-28 h-28 md:w-32 md:h-48',
          bgColor: 'bg-gradient-to-br from-blue-50 to-white'
        },
        {
          name: 'Promotion',
          members: '18k',
          illustration: promotion,
          illustrationSize: 'w-28 h-28 md:w-32 md:h-39',
          bgColor: 'bg-gradient-to-br from-purple-50 to-white'
        },
        {
          name: 'Finance & Budgeting',
          members: '15k',
          illustration: finance,
          illustrationSize: 'w-32 h-32 md:w-36 md:h-45',
          bgColor: 'bg-gradient-to-br from-pink-50 to-white'
        }
      ]
    },
    {
      title: 'Modern art and Design',
      circles: [
        {
          name: 'Design Thinking',
          members: '23k',
          illustration: art,
          illustrationSize: 'w-26 h-26 md:w-25 md:h-24',
          bgColor: 'bg-gradient-to-br from-purple-50 to-white'
        },
        {
          name: 'Innovation',
          members: '19k',
          illustration: innovation,
          illustrationSize: 'w-24 h-24 md:w-28 md:h-28',
          bgColor: 'bg-gradient-to-br from-yellow-50 to-white'
        },
        {
          name: 'Animation',
          members: '17k',
          illustration: animation,
          illustrationSize: 'w-28 h-28 md:w-32 md:h-32',
          bgColor: 'bg-gradient-to-br from-gray-50 to-white'
        }
      ]
    }
  ];

  const handleInterestClick = (index) => {
    setSelectedInterest(index);
  };

  const CircleCard = ({ circle }) => (
    <div className={`${circle.bgColor} rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100`}>
      {/* Card Content */}
      <div className="p-4 md:p-5 relative">
        {/* Circle Header */}
        <div className="space-y-3 mb-3">
          <h4 className="text-lg md:text-xl font-bold text-[#2D488F] leading-tight">
            {circle.name}
          </h4>
          
          {/* Join Button */}
          <button className="px-5 py-2 bg-[#2D488F] text-white text-xs font-semibold rounded-full hover:bg-[#1e3260] transition-all duration-300 shadow-md hover:shadow-lg active:scale-95">
            <span>Join Now</span>
          </button>

          {/* Members Info */}
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white shadow-sm"></div>
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white shadow-sm"></div>
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white shadow-sm"></div>
            </div>
            <span className="text-xs text-[#2D488F]/70 font-medium">
              {circle.members} members
            </span>
          </div>
        </div>

        {/* Illustration Area - Bottom Right */}
        <div className={`absolute bottom-3 right-3 ${circle.illustrationSize || 'w-24 h-24 md:w-28 md:h-28'}`}>
          <img 
            src={circle.illustration} 
            alt={`${circle.name} illustration`}
            className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </div>
  );

  return (
    <section className="px-4 md:px-8 lg:px-20 xl:px-40 py-8 md:py-12 lg:py-16 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
        
        {/* Browse by Interests Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2D488F] mb-2">
              Browse by interests
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-md">
              Discover communities tailored to your professional interests and passions
            </p>
          </div>
          <button className="self-start sm:self-auto text-sm md:text-base text-[#2D488F] hover:text-[#1e3260] font-medium transition-colors flex items-center space-x-1 bg-white px-4 py-2 rounded-lg border border-gray-200 hover:border-[#2D488F]/30 shadow-sm">
            <span>View all interests</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Interest Icons Grid - Improved Mobile */}
        <div className="relative">
          <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 scrollbar-hide px-1">
            {interestCategories.map((interest, index) => {
              const Icon = interest.icon;
              const isSelected = selectedInterest === index;
              
              return (
                <button
                  key={index}
                  onClick={() => handleInterestClick(index)}
                  className={`flex-shrink-0 flex flex-col items-center gap-3 p-4 md:p-4 border-2 rounded-xl transition-all duration-300 hover:scale-105 min-w-[85px] md:min-w-[90px] shadow-sm hover:shadow-md ${
                    isSelected 
                      ? 'bg-yellow-100 border-yellow-400 shadow-md scale-105' 
                      : 'bg-white border-gray-200 hover:border-[#2D488F]/30'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${
                    isSelected ? 'bg-yellow-500' : 'bg-gray-100'
                  }`}>
                    <Icon className={`h-5 w-5 md:h-6 md:w-6 ${
                      isSelected ? 'text-white' : 'text-[#2D488F]'
                    }`} />
                  </div>
                  <span className={`text-xs font-medium text-center leading-tight ${
                    isSelected ? 'text-gray-900 font-semibold' : 'text-[#2D488F]'
                  }`}>
                    {interest.label}
                  </span>
                </button>
              );
            })}
          </div>
          
          {/* Gradient fade for mobile scroll indication */}
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#f8f9fa] to-transparent pointer-events-none md:hidden"></div>
        </div>

        {/* Circle Categories */}
        {circleCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-6 md:space-y-8">
            {/* Category Header */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#2D488F] mb-1">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  Popular communities in {category.title.toLowerCase()}
                </p>
              </div>
              <button className="self-start sm:self-auto text-sm md:text-base text-[#2D488F] hover:text-[#1e3260] font-medium transition-colors flex items-center space-x-1 bg-white px-4 py-2 rounded-lg border border-gray-200 hover:border-[#2D488F]/30 shadow-sm">
                <span>View all</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Circle Cards Grid - Improved Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {category.circles.map((circle, circleIndex) => (
                <CircleCard key={circleIndex} circle={circle} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default CircleBrowseSection;