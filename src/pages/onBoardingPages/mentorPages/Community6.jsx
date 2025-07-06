import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MC6 from '../../../assets/signup/MC6.png';
import { useNavigate } from 'react-router-dom';
import LeftPanel from "../../../components/onBoardingComp/LeftPanel";
import RightPanel from "../../../components/onBoardingComp/RightPanel";
const MentorCommunity6 = () => {
  const navigate = useNavigate();
  const [value,setValue]=useState(1);
  const [loading, setLoading] = useState(false);
  
  // Load saved data when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/onboarding/data?step=8");
        
      } catch (error) {
        console.error("Error fetching client capacity data:", error);
      }
    };
    
    fetchData();
  }, []);

  const handleChange =(e)=>{
    setValue(e.target.value)
  }
  

  const handleNext = async () => {
    setLoading(true);
    try {
      // Save data to API
      const uid = localStorage.getItem("uid");
      await axios.post("http://localhost:5001/api/onboarding/save", {
        step: 8,
        data: {uid,
          clients: Number(value)
        }
      });
      
      navigate('/mentor/Community7');//motivation
    } catch (error) {
      console.error("Error saving client capacity data:", error);
      alert("Failed to save your client capacity information. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex md:flex-row flex-col w-screen h-screen overflow-hidden">
      {/* <div className="w-1/2 bg-[#2A4FB0] relative">
        <div className="absolute left-1 top-3">
          <img src={logo} alt="Koach Logo" className="w-[100px] h-[91px]" />
        </div>
        <div className="flex justify-center items-center h-full">
          <img src={MC6} alt="Onboarding Illustration" className="w-[505px] h-[530px]" />
        </div>
      </div> */}
      <LeftPanel imgSrc={MC6} />

      {/* <div className="w-1/2 bg-white p-8 flex flex-col items-center"> */}
      <RightPanel>
      <div className='flex flex-col'>
        <div className="md:mt-24 mt-10 md:mb-16 mb-0">
          <h1 className="lg:text-4xl mb-5 md:text-2xl text-xl font-bold text-[#262626]  max-w-[663px] ">
            How many new clients are you able to comfortably manage at once?
          </h1>
        </div>

      <div className='text-[#001F54] m-5'>
      
      <label htmlFor="clients" className='text-left text-lg' style={{ display: 'block', marginBottom: '8px' }}>
        Number of clients
      </label>
      <input
        type="number"
        id="clients"
        name="clients"
        value={value}
        min={1}
        max={7}
        onChange={handleChange}
        className='w-full px-4 block py-2 text-lg border border-1 rounded-md'
        
      />
      </div>
    </div>

        <div className='min-w-100 lg:absolute bottom-10'>
          <button 
            onClick={() => navigate(-1)} 
            className='bg-[#F5E649] text-black rounded-lg md:px-17 px-12 py-3 font-bold hover:bg-[#E6D83D] transition-colors'
            disabled={loading}
          >
            Back
          </button>
          <button 
            onClick={handleNext} 
            className='bg-[#F5E649] text-black rounded-lg md:px-17 px-12 py-3 font-bold ml-14 hover:bg-[#E6D83D] transition-colors'
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Next'}
          </button>
        </div>
      </RightPanel>
    </div>
  );
};

export default MentorCommunity6;