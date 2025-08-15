import { useState, useEffect } from 'react'
import image1 from '../assets/image2222.png'
import image2 from '../assets/image1111.png'
import image3 from '../assets/image3333.png'
import Female from '../assets/Female.png'
import Triangle from '../assets/Triangle.png'
import { useNavigate } from "react-router-dom";

const MENTORS = [
  { 
    id: 1, 
    image: image1, 
    name: "Christina Diane Warner", 
    role: "Marketing Manager at", 
    company: "Cloudfare" 
  },
  { 
    id: 2, 
    image: image2, 
    name: "Jaspal Singh", 
    role: "Principal Software Engineer", 
    company: "TCS" 
  },
  { 
    id: 3, 
    image: image3, 
    name: "Rajiv Agarwal", 
    role: "Finance and Insurance Professional", 
    company: "Ex-Willis Group" 
  }
];

export default function JoinSection() {
  const navigate = useNavigate();
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const nextCard = () => {
    setCurrentCardIndex((prev) => (prev + 1) % MENTORS.length);
  };

  const prevCard = () => {
    setCurrentCardIndex((prev) => (prev - 1 + MENTORS.length) % MENTORS.length);
  };

  const MentorCard = ({ mentor, colorClass }) => (
    <div className="flex-shrink-0 w-80 md:mx-6 mx-4">
      <div className={`relative ${colorClass} rounded-2xl p-6 h-96 flex flex-col justify-between`}>
        {/* Decorative circles */}
        <div className="absolute top-4 left-4 w-16 h-16 bg-white bg-opacity-20 rounded-full"></div>
        <div className="absolute top-8 right-8 w-12 h-12 bg-white bg-opacity-15 rounded-full"></div>
        <div className="absolute bottom-20 right-4 w-20 h-20 bg-white bg-opacity-10 rounded-full"></div>
        
        {/* Profile Image */}
        <div className="flex justify-center mt-8">
          <img 
            src={mentor.image} 
            alt={mentor.name} 
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
        
        {/* Mentor Info */}
        <div className="text-center text-white z-10">
          <h3 className="text-xl font-bold mb-2">{mentor.name}</h3>
          <p className="text-sm opacity-90">{mentor.role}</p>
          <p className="text-sm font-semibold">{mentor.company}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className='max-w-[1400px] px-4 py-12 mx-auto text-center'>
      <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-[#2D488F]'>
        Find your mentor:<br />
        Infinite Possibilities
      </h2>
      
      <p className='text-gray-600 mb-12 max-w-2xl mx-auto text-base sm:text-lg'>
        Lorem ipsum dolor sit amet consectetur. Habitant gravida blandit mi in sit mi posuere nibh. Turpis lectus quis sed fermentum mi.
      </p>

      {/* Blue Banner Section with Scrollable Cards */}
      <div className='bg-[#2D488F] py-12 -mx-4 mb-12 relative'>
        {/* Desktop Navigation Buttons */}
        <button className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow">
          <svg className="w-6 h-6 text-[#2D488F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow">
          <svg className="w-6 h-6 text-[#2D488F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Mobile Navigation Buttons */}
        <button 
          onClick={prevCard}
          className="md:hidden absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
        >
          <svg className="w-6 h-6 text-[#2D488F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={nextCard}
          className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
        >
          <svg className="w-6 h-6 text-[#2D488F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Desktop: Scrollable Cards Container */}
        <div className="hidden md:block overflow-x-auto scrollbar-hide px-16">
          <div className="flex justify-center gap-8">
            <MentorCard mentor={MENTORS[0]} colorClass="bg-gradient-to-br from-green-400 to-green-300" />
            <MentorCard mentor={MENTORS[1]} colorClass="bg-gradient-to-br from-pink-400 to-pink-300" />
            <MentorCard mentor={MENTORS[2]} colorClass="bg-gradient-to-br from-yellow-400 to-yellow-300" />
          </div>
        </div>

        {/* Mobile: Single Card View */}
        <div className="md:hidden flex justify-center px-16">
          {currentCardIndex === 0 && (
            <MentorCard mentor={MENTORS[0]} colorClass="bg-gradient-to-br from-green-400 to-green-300" />
          )}
          {currentCardIndex === 1 && (
            <MentorCard mentor={MENTORS[1]} colorClass="bg-gradient-to-br from-pink-400 to-pink-300" />
          )}
          {currentCardIndex === 2 && (
            <MentorCard mentor={MENTORS[2]} colorClass="bg-gradient-to-br from-yellow-400 to-yellow-300" />
          )}
        </div>

        {/* Mobile: Dots Indicator */}
        <div className="md:hidden flex justify-center mt-6 space-x-2">
          {MENTORS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCardIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentCardIndex === index ? 'bg-white' : 'bg-white bg-opacity-40'
              }`}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-8">
          <button 
            onClick={() => navigate("/mentors")}
            className="bg-[#F5E649] text-[#2D488F] px-8 py-3 rounded-lg font-bold hover:bg-[#f3e338] transition-colors"
          >
            View All
          </button>
        </div>
      </div>

      {/* Join as Coach Section - unchanged */}
      <div className='bg-[#050A30] flex flex-col-reverse md:flex-row p-6 sm:p-10 mt-20 rounded-3xl items-center gap-8'>
        <div className='w-full md:w-3/5 px-4'>
          <h2 className='text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left'>
            Join as <span className='text-[#F5E649]'>Coach</span>
          </h2>
          <p className='text-white mt-4 text-left text-base sm:text-lg leading-relaxed'>
            Are you passionate about guiding the next generation of leaders and innovators? 
            At Koach, you&apos;ll have the opportunity to coach talented individuals from startups, 
            VCs, and universities, helping them achieve their full potential.
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="text-[#2D488F] mt-6 font-bold bg-[#F5E649] px-8 py-3 hover:bg-[#f3e338] transition-colors text-lg rounded-md shadow-md">
            Join now
          </button>
        </div>

        <div className='relative h-[250px] w-[250px] sm:h-[280px] sm:w-[280px] md:h-[300px] md:w-[300px] flex-shrink-0 flex items-center justify-center'>
          <img src={Triangle} alt="Background shape" className='absolute inset-0 w-full h-full object-contain' />
          <img 
            src={Female} 
            alt='Coach portrait' 
            className='absolute rounded-full h-[140px] w-[140px] sm:h-[160px] sm:w-[160px] md:h-[170px] md:w-[170px] object-cover z-10'
          />
        </div>
      </div>
    </div>
  )
}