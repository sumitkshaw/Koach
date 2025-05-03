import React, { useState } from 'react';
import KoachJourney3 from '../assets/koachjourney3.jpg';
import  video from '../assets/Copie a designului Koach video campaign.mp4';

const KoachJourney = () => {
  const skillTags = ['Sales', 'Design', 'Coding', 'Finance', 'Marketing', 'Management', 'Strategy'];

  const beforeKoachTags = [
    'Looking for a Job (Is it for you though?)',
    'Online Career Path',
    'No Influence',
    'Skills Gap',
    'Lack of Confidence'
  ];
 
  return (
    <div className="max-w-[1200px] mx-auto  py-12">
      {/* Top Section */}
      <div className="flex justify-between items-start mb-20">
        {/* Left Side */}
        <div className="max-w-[500px]">
          <h1 className="text-[36px] font-bold leading-tight mb-6 text-left">
            Unleash Your Potential.
            <br />
            Koach Your Career to the Next Level.
          </h1>          
        </div>

        {/* Right Side */}
        <div className="text-right relative ">
      <div className="mb-4">
        <h3 className="text-[24px] font-bold mb-4 text-left">Where are you looking to grow?</h3>
        <div className="mt-2 w-full max-w-[400px] flex items-center border border-black  overflow-hidden mb-5">
        <input 
          type="text" 
          placeholder="Search by Skills, Company, Role" 
          className="flex-1 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-4 py-2 bg-[#050A30] text-white font-semibold ">Search for Koach</button>
      </div>

        <div className="flex flex-wrap gap-4 justify-start max-w-[400px] ">
          {skillTags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-1  text-[#595959] text-lg  cursor-pointer border border-[#595959] rounded-lg "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      
      </div>
      </div>

      <div className="w-full flex justify-center mb-20 pb-10">
        <video 
          className="max-w-[1200px] w-full rounded-3xl shadow-lg"
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
          className="w-full h-[486px] object-cover object-[30%_40%]"
        />
        <div className="absolute inset-0 bg-black/20 " />
        <div className="absolute inset-0 flex  ">
            <div className='absolute inset-0 mt-5 ml-5'>
          <div className="text-center max-w-[600px] text-black bg-white/50 p-12 rounded-2xl ">
            <h2 className="text-4xl font-bold mb-2">Koach is for all</h2>
            <p className="text-[20px] font-medium mb-6">(Em)Powered by Experience. Leading the Future. Today.</p>
            <p className="max-w-[600px] mx-auto text-[20px] font-medium mb-6">
            We connect you with World-Class coaches who've dominated their fields and domains and are ready to accelerate your professional-career goals.            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default KoachJourney;