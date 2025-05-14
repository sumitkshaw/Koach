import React from 'react';
import KoachJourney3 from '../assets/koachjourney3.jpg';
import video from '../assets/Copie a designului Koach video campaign.mp4';

const KoachJourney = () => {
  const skillTags = ['Sales', 'Design', 'Coding', 'Finance', 'Marketing', 'Management', 'Strategy'];

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 mb-20">
        {/* Left Side */}
        <div className="w-full lg:max-w-[500px]">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-6 text-left">
            Unleash Your Potential.
            <br />
            Koach Your Career to the Next Level.
          </h1>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-[600px]">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-left">Where are you looking to grow?</h3>
          <div className="flex flex-col sm:flex-row w-full border border-black overflow-hidden mb-5">
            <input
              type="text"
              placeholder="Search by Skills, Company, Role"
              className="flex-1 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />
            <button className="px-4 py-3 bg-[#050A30] text-white font-semibold text-sm sm:text-base">
              Search for Koach
            </button>
          </div>

          <div className="flex flex-wrap gap-3 justify-start">
            {skillTags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-1 border border-[#595959] text-[#595959] text-sm sm:text-base rounded-lg cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="w-full flex justify-center mb-20">
        <video
          className="w-full max-w-full rounded-3xl shadow-lg"
          controls
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Bottom Section */}
      <div className="relative rounded-3xl overflow-hidden">
        <img
          src={KoachJourney3}
          alt="Entrepreneur working"
          className="w-full h-[400px] sm:h-[500px] object-cover object-[30%_40%]"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-start justify-start p-6 sm:p-12">
          <div className="bg-white/60 p-6 sm:p-12 rounded-2xl max-w-full sm:max-w-[600px] text-black">
            <h2 className="text-2xl sm:text-4xl font-bold mb-2">Koach is for all</h2>
            <p className="text-base sm:text-lg font-medium mb-4">
              (Em)Powered by Experience. Leading the Future. Today.
            </p>
            <p className="text-base sm:text-lg font-medium">
              We connect you with World-Class coaches who've dominated their fields and domains and are ready to accelerate your professional-career goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KoachJourney;
