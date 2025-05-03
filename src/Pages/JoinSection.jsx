import React,{useState,useEffect} from 'react'
import { motion, AnimatePresence } from "framer-motion";
import J1 from '../assets/J1.png'
import J2 from '../assets/J2.png'
import J3 from '../assets/J3.png'
import J4 from '../assets/J4.png'
import J5 from '../assets/J5.png'
import J6 from '../assets/J6.png'
import Female from '../assets/Female.png'
import Triangle from '../assets/Triangle.png'

const MENTORS = [
  {
    id: 1,
    image: J1,
    name:"Patrice Long",
    role:"Senior Data Engineer",
    company: "Google",
  },
  {
    id: 2,
    image: J2,
    name:"Tom",
    role:"Senior Product Manager",
    company: "Tesla",
  },
  {
    id: 3,
    image: J3,
    name:"Cathy",
    role:"Developer",
    company: "Tesla",
  },
  {
    id: 4,
    image: J4,
    name:"Patrice Long",
    role:"Sales Manager",
    company: "Google",
  },
  {
    id: 5,
    image: J5,
    name:"cathy",
    role:"Marketing Head",
    company: "Google",
  },
  {
    id: 6,
    image: J6,
    name:"Jo",
    role:"Interior Designer",
    company: "Google",
  }
];
export default function JoinSection() {
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 3) % MENTORS.length); 
      setKey(prev => prev + 1);
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

  
  const cardVariants = {
    enter: (idx) => ({ 
      x: idx === 0 || idx === 1 ? -150 : 150,
      opacity: 0 
    }),
    center: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" 
         }
    },
    exit: (idx) => ({ 
      x: idx === 0 || idx === 1 ? -150 : 150,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn"  }
    })
  };
  const containerVariants = {
    enter: {},
    center: {
      transition: {
        staggerChildren: 0.1, 
        delayChildren: 0.2    
      }
    },
    exit: {}

  };
  const MentorCard = ({ mentor, idx }) => (
    <motion.div
      key={mentor.id}
      className={`relative shadow-lg h-[360px] w-[270px] ${idx === 1 ? "mt-40" : ""}`}
      custom={idx}
      variants={cardVariants}
      initial="enter"
      animate="center"
      exit="exit"
       
    >
      <img
        src={mentor.image}
        alt={mentor.name}
        className="h-full w-full object-cover"
      />
      
      
      <div className="absolute bottom-4 left-3/4 ml-12 transform -translate-x-1/2 bg-white border border-black p-2 shadow-lg w-[73%] text-left">
        <h3 className="font-bold text-lg">{mentor.name}</h3>
        <p className="text-gray-700">{mentor.role}</p>
        <p className="text-gray-600">{mentor.company}</p>
      </div>
    </motion.div>
  );
  return (
    <div className='max-w-[1200px] py-12 mx-auto text-center'>
    <h2 className='text-[36px] font-bold mb-12'>Find your Mentor: Infinite Possibilities</h2>
    
    
    <div className='relative flex justify-center items-center space-x-24 min-h-[480px] '>
      <AnimatePresence mode="wait"  >
      <motion.div 
        key={key}
        className="flex space-x-24"
        variants={containerVariants}
        initial="enter"
        animate="center"
        exit="exit"
      >
            {MENTORS.slice(index, index + 3).map((mentor, idx) => (
              <MentorCard key={mentor.id} mentor={mentor} idx={idx} />
            ))}
          </motion.div>
      </AnimatePresence>
    </div>
      
      <button className="text-white mt-16 font-bold  bg-[#2D488F] px-5 py-3 hover:bg-[#263f7e] transition-colors text-[20px] shadow-md rounded-md">
        Search for Koach
     </button>
      
      <div className='bg-[#050A30] flex p-8 mt-20 rounded-3xl items-center'>
        <div className='w-3/5  pl-10'>
          <h2 className='text-white text-center text-[36px] font-bold'>
            Join as <span className='text-[#F5E649]'>Coach</span>
          </h2>
          <p className='text-white text-left mt-4 text-[18px] leading-relaxed'>
            Are you passionate about guiding the next generation of leaders and innovators? 
            At Koach, you'll have the opportunity to coach talented individuals from startups, 
            VCs, and universities, helping them achieve their full potential.
          </p>
          <button className="text-[#2D488F] mt-8 font-bold bg-[#F5E649] px-10 py-3 hover:bg-[#f3e338] transition-colors text-[20px] rounded-md shadow-md">
            Join now
          </button>
        </div>
        <div className='relative h-[300px] w-[300px] ml-12 flex-shrink-0 flex items-center justify-center'>
          <img src={Triangle} alt="Background shape" className='absolute inset-0 w-full h-full object-contain' />
          <img 
            src={Female} 
            alt='Coach portrait' 
            className='absolute rounded-full h-[170px] w-[170px] mb-8 mr-8 object-cover z-10'
          />
        </div>
      </div>
    </div>
  )
}
