import { Search, Star, Filter } from 'lucide-react';
import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Sidenav1 from './Sidenav1';
import AlexBricks from '../../assets/AlexBricks.jpg';
import DannyBlue from '../../assets/DannyBlue.jpg';
import BiancaLorenzo from '../../assets/BiancaLorenzo.jpg';
import JenniferSmith from '../../assets/Jennifer Smith.jpg';
import BobbyRoy from '../../assets/BobbyRoy.jpg';

function Listing() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filters, setFilters] = useState({
    availableASAP: false,
    hourlyCharges: null,
    ratings: null,
    experience: null,
    serviceCategory: null,
    industry: null,
    location: null,
    language: null,
    skillset: null
  });
  const navigate = useNavigate();

  const mentors = [
    {
      id: 1,
      name: 'Alex Bricks',
      country: '🇨🇦',
      role: 'Backend developer',
      company: 'Apple',
      experience: '2 years',
      rating: 4.9,
      image: AlexBricks,
      badge: 'Available ASAP',
      badgeType: 'primary',
      topContributor: true,
      serviceCategory: 'backend',
      industry: 'technology',
      location: 'north-america',
      language: 'english',
      skillset: ['javascript', 'nodejs'],
      hourlyCharge: 100
    },
    {
      id: 2,
      name: 'Danny Blue',
      country: '🇮🇪',
      role: 'Frontend developer',
      company: 'Samsung',
      experience: '2 years',
      rating: 4.8,
      image: DannyBlue,
      badge: 'Available ASAP',
      badgeType: 'primary',
      serviceCategory: 'frontend',
      industry: 'technology',
      location: 'europe',
      language: 'english',
      skillset: ['javascript', 'react'],
      hourlyCharge: 80
    },
    {
      id: 3,
      name: 'Jessica Barney',
      country: '🇫🇷',
      role: 'Marketing Head',
      company: 'PWC',
      experience: '6 years',
      rating: 4.0,
      image: '/jessica.png',
      badge: 'New mentor',
      badgeType: 'secondary',
      serviceCategory: 'marketing',
      industry: 'finance',
      location: 'europe',
      language: 'french',
      skillset: ['marketing-strategy'],
      hourlyCharge: 150
    },
    {
      id: 4,
      name: 'Bianca Lorenzo',
      country: '🇮🇹',
      role: 'IT project manager',
      company: 'GitLab',
      experience: '2 years',
      rating: 4.8,
      image: BiancaLorenzo,
      badge: 'Available ASAP',
      badgeType: 'primary',
      serviceCategory: 'project-management',
      industry: 'technology',
      location: 'europe',
      language: 'italian',
      skillset: ['project-management'],
      hourlyCharge: 120
    },
    {
      id: 5,
      name: 'Jennifer Smith',
      country: '🇦🇺',
      role: 'Security analyst',
      company: 'Deloitte',
      experience: '2 years',
      rating: 5.0,
      image: JenniferSmith,
      badge: 'Top 1%',
      badgeType: 'gold',
      serviceCategory: 'security',
      industry: 'consulting',
      location: 'australia',
      language: 'english',
      skillset: ['python'],
      hourlyCharge: 200
    },
    {
      id: 6,
      name: 'Bobby Roy',
      country: '🇦🇺',
      role: 'Network engineer',
      company: 'IBM',
      experience: '2 years',
      rating: 4.7,
      image: BobbyRoy,
      serviceCategory: 'networking',
      industry: 'technology',
      location: 'australia',
      language: 'english',
      skillset: ['python'],
      hourlyCharge: 90
    }
  ];

  // Apply filters function
  const applyFilters = () => {
    // Filter logic is applied in the filteredMentors useMemo below
    console.log('Applying filters:', filters);
  };

  // Filter mentors based on search and filters
  const filteredMentors = useMemo(() => {
    return mentors.filter(mentor => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        if (!mentor.name.toLowerCase().includes(query) && 
            !mentor.role.toLowerCase().includes(query) &&
            !mentor.company.toLowerCase().includes(query)) {
          return false;
        }
      }

      // Available ASAP filter
      if (filters.availableASAP && mentor.badge !== 'Available ASAP') {
        return false;
      }

      // Rating filter
      if (filters.ratings) {
        const minRating = parseFloat(filters.ratings);
        if (mentor.rating < minRating) {
          return false;
        }
      }

      // Experience filter
      if (filters.experience) {
        const expYears = parseInt(mentor.experience);
        if (filters.experience === '1-2' && expYears > 2) return false;
        if (filters.experience === '3-5' && (expYears < 3 || expYears > 5)) return false;
        if (filters.experience === '5+' && expYears < 5) return false;
        if (filters.experience === '10+' && expYears < 10) return false;
      }

      // Hourly charges filter
      if (filters.hourlyCharges) {
        const [min, max] = filters.hourlyCharges.split('-').map(Number);
        if (max && (mentor.hourlyCharge < min || mentor.hourlyCharge > max)) {
          return false;
        } else if (!max && mentor.hourlyCharge < min) {
          return false;
        }
      }

      // Service category filter
      if (filters.serviceCategory && mentor.serviceCategory !== filters.serviceCategory) {
        return false;
      }

      // Industry filter
      if (filters.industry && mentor.industry !== filters.industry) {
        return false;
      }

      // Location filter
      if (filters.location && mentor.location !== filters.location) {
        return false;
      }

      // Language filter
      if (filters.language && mentor.language !== filters.language) {
        return false;
      }

      // Skillset filter
      if (filters.skillset && !mentor.skillset.includes(filters.skillset)) {
        return false;
      }

      return true;
    });
  }, [mentors, searchQuery, filters]);

  const handleCardClick = (mentorName) => {
    navigate(`/listing/${mentorName.toLowerCase().replace(' ', '-')}`);
  };

  return (
    <div className="w-full bg-[#ECF0F6] min-h-screen">
      {/* Sidenav with filter props */}
      <Sidenav1 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen}
        filters={filters}
        setFilters={setFilters}
        applyFilters={applyFilters}
      />

      {/* Filter Toggle Button - Mobile */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-20 left-4 z-50 bg-[#0A1F44] text-white p-3 rounded-xl shadow-2xl hover:bg-[#0d2855] transition-all duration-300 transform hover:scale-105 lg:hidden"
      >
        <Filter className="w-5 h-5" />
      </button>

      {/* Main Content */}
      <div className={`transition-all duration-500 ${sidebarOpen ? 'lg:ml-80' : 'lg:ml-0'}`}>
        {/* Header Section - Reduced Spacing */}
        <section className="bg-white px-4 sm:px-6 md:px-12 lg:px-16 py-6 md:py-8 pt-32 sm:pt-28 md:pt-20">

          <div className="max-w-7xl mx-auto">

            <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-[#2D488F] mb-1 md:mb-2">
              Mentors
            </h1>

            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <span className="text-sm sm:text-base text-gray-600 font-medium">
                {filteredMentors.length} results
              </span>
              {Object.values(filters).some(filter => filter && filter !== false) && (
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                  Filters applied
                </span>
              )}
            </div>

            {/* Desktop Filter Button placed below results */}
            <div className="hidden lg:block mb-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="flex items-center gap-2 bg-[#0A1F44] text-white px-5 py-2.5 rounded-xl shadow-lg hover:bg-[#0d2855] transition-all duration-300 text-sm"
              >
                <Filter className="w-4 h-4" />
                <span className="font-semibold">{sidebarOpen ? 'Hide Filters' : 'Show Filters'}</span>
              </button>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-3xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="text"
                placeholder="Search by name, profession"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2D488F] focus:border-transparent outline-none text-sm sm:text-base"
              />
            </div>
          </div>
        </section>

        {/* Mentors Grid - Reduced Spacing */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-16 py-6 md:py-8">
          <div className="max-w-7xl mx-auto">
            {filteredMentors.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No mentors found</h3>
                <p className="text-gray-500">Try adjusting your filters or search terms</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                {filteredMentors.map((mentor) => (
                  <div
                    key={mentor.id}
                    onClick={() => handleCardClick(mentor.name)}
                    className="bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group"
                  >
                    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-100">
                      <img 
                        src={mentor.image} 
                        alt={mentor.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {mentor.badge && (
                        <div className={`absolute top-2 sm:top-3 left-2 sm:left-3 px-2 sm:px-2.5 py-1 rounded-full text-xs font-semibold ${
                          mentor.badgeType === 'primary'
                            ? 'bg-blue-100 text-blue-700'
                            : mentor.badgeType === 'gold'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {mentor.badge}
                        </div>
                      )}

                      {mentor.topContributor && (
                        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 px-2 sm:px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700">
                          Top Contributor
                        </div>
                      )}
                    </div>

                    <div className="p-4 sm:p-5">
                      <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800">{mentor.name}</h3>
                        <span className="text-lg sm:text-xl">{mentor.country}</span>
                      </div>

                      <div className="flex items-center gap-1.5 text-gray-600 mb-3 sm:mb-4">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-xs sm:text-sm truncate">{mentor.role} - {mentor.company}</span>
                      </div>

                      <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-200">
                        <div>
                          <p className="text-xs text-gray-500 mb-0.5">Experience</p>
                          <p className="text-sm font-semibold text-gray-800">{mentor.experience}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-base sm:text-lg font-bold text-gray-800">{mentor.rating}</span>
                          <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default Listing;