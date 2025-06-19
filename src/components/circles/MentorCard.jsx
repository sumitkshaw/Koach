import { Star } from 'lucide-react';

const MentorCard = ({
  name,
  title,
  company,
  imageSrc,
  rating,
  experience,
  country,
  badges = [],
  isTopContributor = false,
  isAvailableASAP = false,
  isTop1Percent = false
}) => {
  return (
    <div className="w-full max-w-[300px] rounded-lg shadow-md overflow-hidden">
      {/* Card Image */}
      <div className="relative h-[228px] bg-gray-200">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        
        {/* Badges */}
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {isAvailableASAP && (
            <div className="bg-white px-2 py-1 rounded-md">
              <span className="text-xs font-bold bg-gradient-to-r from-[#2A468C] to-[#4C7FFF] bg-clip-text text-transparent">
                Available ASAP
              </span>
            </div>
          )}
          {isTopContributor && (
            <div className="bg-white px-2 py-1 rounded-md">
              <span className="text-xs font-bold bg-gradient-to-r from-[#2A468C] to-[#4C7FFF] bg-clip-text text-transparent">
                Top Contributor
              </span>
            </div>
          )}
          {isTop1Percent && (
            <div className="bg-white px-2 py-1 rounded-md">
              <span className="text-xs font-bold bg-gradient-to-r from-[#2A468C] to-[#4C7FFF] bg-clip-text text-transparent">
                Top 1%
              </span>
            </div>
          )}
        </div>
      </div>
      
      {/* Card Details */}
      <div className="p-5 bg-[#F9F9F9] flex flex-col gap-6">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-bold text-[#090E1C]">{name}</h3>
            {country && <span className="text-sm">{country}</span>}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 7H4C3.44772 7 3 7.44772 3 8V19C3 19.5523 3.44772 20 4 20H20C20.5523 20 21 19.5523 21 19V8C21 7.44772 20.5523 7 20 7Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 7V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V7" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-base text-[#090E1C]">{title} - {company}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-end">
          <div>
            <p className="text-sm font-bold text-[#121D39]">Experience</p>
            <p className="text-base text-[#121D39]">{experience}</p>
          </div>
          <div className="flex items-center gap-1 bg-[#F5F5F5] px-2 py-1 rounded-md">
            <span className="text-base">{rating.toFixed(1)}</span>
            <Star size={15} fill="#ECC026" stroke="none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
