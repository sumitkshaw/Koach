import { X, Search as SearchIcon, MapPin, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const SearchPopup = ({ isOpen, onClose }) => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('skills');
  const [customSkill, setCustomSkill] = useState('');
  const [customLocation, setCustomLocation] = useState('');
  const [showCustomLocationInput, setShowCustomLocationInput] = useState(false);
  const contentRef = useRef(null);

  const skillCategories = {
    'Technology': [
      'Web Development', 'Mobile Development', 'Data Science', 
      'AI/ML Engineering', 'DevOps', 'Cloud Computing',
      'Cybersecurity', 'Blockchain', 'UI/UX Design'
    ],
    'Business': [
      'Startup Consulting', 'Business Strategy', 'Digital Marketing',
      'Product Management', 'Growth Hacking', 'Financial Planning',
      'Sales & Business Development', 'Entrepreneurship'
    ],
    'Creative': [
      'Graphic Design', 'Content Creation', 'Video Production',
      'Photography', 'Creative Writing', 'Branding'
    ],
    'Personal Development': [
      'Leadership', 'Public Speaking', 'Career Growth',
      'Time Management', 'Emotional Intelligence', 'Mindfulness'
    ]
  };

  const popularLocations = [
    'Mumbai', 'Bangalore', 'Delhi NCR', 'Hyderabad',
    'Singapore', 'Dubai', 'New York', 'London',
    'Remote (India)', 'Remote (Global)'
  ];

  const allSkills = Object.values(skillCategories).flat();

  const toggleSkill = (skill) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const toggleLocation = (location) => {
    setSelectedLocations(prev => 
      prev.includes(location)
        ? prev.filter(l => l !== location)
        : [...prev, location]
    );
  };

  const handleSearch = () => {
    if (selectedSkills.length > 0 || selectedLocations.length > 0) {
      const params = new URLSearchParams();
      if (selectedSkills.length > 0) params.append('skills', selectedSkills.join(','));
      if (selectedLocations.length > 0) params.append('locations', selectedLocations.join(','));
      window.location.href = `/listing?${params.toString()}`;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#2D488F]">Find Your Perfect Koach</h2>
              <p className="text-gray-500 text-sm mt-1">Select skills and locations to find the best match</p>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-50"
              aria-label="Close search"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="px-6 pt-4">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={`Search ${activeTab === 'skills' ? 'skills' : 'locations'}...`}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2D488F] focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-100 px-6 mt-4">
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-4 py-3 font-medium text-sm flex items-center space-x-2 transition-colors ${
              activeTab === 'skills' 
                ? 'text-[#2D488F] border-b-2 border-[#2D488F]' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <span>Skills</span>
            {selectedSkills.length > 0 && (
              <span className="bg-[#2D488F] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {selectedSkills.length}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('locations')}
            className={`px-4 py-3 font-medium text-sm flex items-center space-x-2 transition-colors ${
              activeTab === 'locations' 
                ? 'text-[#2D488F] border-b-2 border-[#2D488F]' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <span>Locations</span>
            {selectedLocations.length > 0 && (
              <span className="bg-[#2D488F] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {selectedLocations.length}
              </span>
            )}
          </button>
        </div>

        {/* Content */}
        <div 
          ref={contentRef}
          className="flex-1 overflow-y-auto p-6"
          style={{
            maxHeight: 'calc(90vh - 240px)',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}
        >
          {activeTab === 'skills' ? (
            <div className="space-y-6">
              {Object.entries(skillCategories).map(([category, skills]) => (
                <div key={category} className="space-y-3">
                  <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills
                      .filter(skill => 
                        skill.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        searchTerm === ''
                      )
                      .map(skill => (
                        <button
                          key={skill}
                          onClick={() => toggleSkill(skill)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center space-x-2 ${
                            selectedSkills.includes(skill)
                              ? 'bg-[#2D488F] text-white border border-transparent'
                              : 'bg-gray-50 text-gray-700 border border-gray-200 hover:border-[#2D488F]/50 hover:bg-blue-50/50'
                          }`}
                        >
                          <span>{skill}</span>
                          {selectedSkills.includes(skill) && <X size={14} />}
                        </button>
                      ))}
                  </div>
                </div>
              ))}
              
              {/* Custom Skill Input */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">
                  Can't find your skill?
                </h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={customSkill}
                    onChange={(e) => setCustomSkill(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && customSkill.trim()) {
                        if (!allSkills.includes(customSkill.trim()) && 
                            !selectedSkills.includes(customSkill.trim())) {
                          toggleSkill(customSkill.trim());
                          setCustomSkill('');
                        }
                      }
                    }}
                    placeholder="Type your skill and press Enter"
                    className="flex-1 px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D488F] focus:border-transparent"
                  />
                  <button
                    onClick={() => {
                      if (customSkill.trim() && 
                          !allSkills.includes(customSkill.trim()) && 
                          !selectedSkills.includes(customSkill.trim())) {
                        toggleSkill(customSkill.trim());
                        setCustomSkill('');
                      }
                    }}
                    disabled={!customSkill.trim() || 
                             allSkills.includes(customSkill.trim()) || 
                             selectedSkills.includes(customSkill.trim())}
                    className="px-4 py-2.5 bg-[#2D488F] text-white rounded-lg hover:bg-[#1e3a8a] disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-4">
                {/* Popular Locations */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">
                    Popular Locations
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {popularLocations
                      .filter(location => 
                        location.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        searchTerm === ''
                      )
                      .map(location => (
                        <button
                          key={location}
                          onClick={() => toggleLocation(location)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center space-x-2 ${
                            selectedLocations.includes(location)
                              ? 'bg-[#2D488F] text-white border border-transparent'
                              : 'bg-gray-50 text-gray-700 border border-gray-200 hover:border-[#2D488F]/50 hover:bg-blue-50/50'
                          }`}
                        >
                          <span>{location}</span>
                          {selectedLocations.includes(location) && <X size={14} />}
                        </button>
                      ))}
                  </div>
                </div>

                {/* Custom Location */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-gray-700">
                      Need a different location?
                    </h3>
                    <button
                      onClick={() => setShowCustomLocationInput(!showCustomLocationInput)}
                      className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                    >
                      {showCustomLocationInput ? 'Cancel' : 'Add Custom Location'}
                    </button>
                  </div>
                  
                  {showCustomLocationInput && (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={customLocation}
                        onChange={(e) => setCustomLocation(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && customLocation.trim()) {
                            toggleLocation(customLocation.trim());
                            setCustomLocation('');
                            setShowCustomLocationInput(false);
                          }
                        }}
                        placeholder="E.g., New York, USA"
                        className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        autoFocus
                      />
                      <button
                        onClick={() => {
                          if (customLocation.trim()) {
                            toggleLocation(customLocation.trim());
                            setCustomLocation('');
                            setShowCustomLocationInput(false);
                          }
                        }}
                        disabled={!customLocation.trim()}
                        className="px-4 py-2 bg-[#2D488F] text-white text-sm rounded-lg hover:bg-[#1e3a8a] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                      >
                        Add
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 p-4 bg-gray-50">
          <div className="flex flex-wrap gap-2 mb-4">
            {selectedSkills.map(skill => (
              <span 
                key={`skill-${skill}`}
                className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-[#2D488F] text-white"
              >
                {skill}
                <button 
                  onClick={() => toggleSkill(skill)}
                  className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full bg-white/20 hover:bg-white/30"
                >
                  <X size={10} />
                </button>
              </span>
            ))}
            {selectedLocations.map(location => (
              <span 
                key={`loc-${location}`}
                className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-[#2D488F] text-white"
              >
                {location}
                <button 
                  onClick={() => toggleLocation(location)}
                  className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full bg-white/20 hover:bg-white/30"
                >
                  <X size={10} />
                </button>
              </span>
            ))}
          </div>
          <button
            onClick={handleSearch}
            disabled={selectedSkills.length === 0 && selectedLocations.length === 0}
            className="w-full py-3 px-6 bg-[#2D488F] hover:bg-[#1e3a8a] text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Search {selectedSkills.length + selectedLocations.length} {selectedSkills.length + selectedLocations.length === 1 ? 'Filter' : 'Filters'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
