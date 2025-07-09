import React, { useState, useEffect } from 'react';
import axios from 'axios';
import C4 from '../../../assets/signup/C4.png';
import { useNavigate } from 'react-router-dom';

import LeftPanel from "../../../components/onBoardingComp/LeftPanel";
import RightPanel from "../../../components/onBoardingComp/RightPanel";

export default function MentorCommunity3() {
  const navigate = useNavigate();
  const [expertise, setExpertise] = useState(`1.\n2.\n3.`);
  const [loading, setLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // Validate form whenever expertise changes
  useEffect(() => {
    setIsFormValid(expertise.trim().length > 0);
  }, [expertise]);

  const handleExpertiseChange = (e) => {
    setExpertise(e.target.value);
  };

  const handleNext = async () => {
    if (!isFormValid) return;
    
    setLoading(true);
    try {
      const uid = localStorage.getItem("uid");
      const response = await axios.post("http://localhost:5001/api/onboarding/save", {
        step: 5,
        data: { uid,
          skills: {skill:expertise} 
        },
      });
      
      if (response.status === 200) {
        navigate('/mentor/community4');//expert
      }
    } catch (error) {
      console.error("Error saving expertise data:", error);
      alert("Failed to save expertise data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleBack = async () => {
    try {
      // Optionally save current progress before going back
      await axios.post("http://localhost:5001/api/onboarding/save", {
        step: 6,
        data: { expertise: expertise },
        isComplete: false
      });
    } catch (error) {
      console.error("Error saving current progress:", error);
    }
    navigate(-1);
  };

  // Load saved data if available
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/onboarding/data?step=5");
        if (response.data && response.data.expertise) {
          setExpertise(response.data.expertise);
        }
      } catch (error) {
        console.error("Error fetching saved data:", error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className='h-screen  w-screen flex md:flex-row flex-col'>    
      {/* Left Panel */}
      {/* <div className='bg-[#2A4FB0] w-1/2 h-screen'>
        <div className='pl-6 pt-6'>
          <img src={Logo} alt="Koach Logo" className='h-[5vw] w-[4.5vw]'/>
        </div>
        <div className='flex justify-center items-center p-10'>
          <img src={C4} alt="Expertise Illustration" className='h-[450px] w-[303px]'/>
        </div>
      </div> */}
      <LeftPanel imgSrc={C4}/>
      
      {/* Right Panel */}
      {/* <div className='w-1/2 h-screen p-14 flex flex-col'> */}
      <RightPanel>
        <div className='lg:text-[36px] text-2xl text-[#262626] font-bold lg:mt-0 mt-10 px-4 mb-6'>
          Briefly list your key skills and areas of expertise
        </div>
        
        <div className='p-5 flex flex-col'>
          <label className='text-left p-2' >Type here</label>
          <textarea
            id="expertise"
            value={expertise}
            onChange={handleExpertiseChange}
            placeholder='type here'
            className='lg:w-150 w-80 md:h-[350px] h-[100px] rounded-[5px] border border-[#2D488F] p-4 resize-none focus:ring-1 focus:ring-[#001F54] focus:outline-none mb-3'
          />
          
        </div>
        
        <div className='pt-0 min-w-100 lg:absolute bottom-10'>
          <div className='flex justify-center space-x-14'>
            <button 
              onClick={handleBack}
              className='bg-[#F5E649] text-black  rounded-lg md:px-17 px-10 py-3 font-bold transition-colors'
            >
              Back
            </button>
            <button 
              onClick={handleNext}
              disabled={!isFormValid || loading}
              className={`bg-[#F5E649] "bg-[#F5E649]   text-black font-bold md:px-17 px-10 py-3 rounded-lg text-xl"font-bold transition-colors ${
                !isFormValid || loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#E6D83D]'
              }`}
            >
              {loading ? 'Saving...' : 'Next'}
            </button>
          </div>
        </div>
      </RightPanel>
    </div>
  );
}