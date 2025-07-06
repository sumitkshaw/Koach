import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MC5 from '../../../assets/signup/MC5.png';
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import LeftPanel from "../../../components/onBoardingComp/LeftPanel";
import RightPanel from "../../../components/onBoardingComp/RightPanel";

export default function MentorCommunity5() {
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState([]);
  const [otherCertificates, setOtherCertificates] = useState(`1.\n2.\n3.`);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("Adam McKinnon");

  // Sample list of options
  const items = [
    'ICF', 'CCE', 'ACA', 'PARW/CC', 'PCC', 'NCDA', 'GCDF'
  ];

  // Load saved data when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/onboarding/data?step=7");
        if (response.data && response.data.education) {
          if (response.data.education.expertise) {
            setSelectedItems(response.data.education.expertise);
          }
          if (response.data.education.othercertificates) {
            setOtherCertificates(response.data.education.othercertificates);
          }
        }
      } catch (error) {
        console.error("Error fetching education data:", error);
      }
    };
    
    fetchData();
  }, []);

  const toggleItem = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item)
        ? prev.filter((selected) => selected !== item) // Deselect if already selected
        : [...prev, item] // Select if not already selected
    );
  };

  const handleInputChange = (e) => {
    setOtherCertificates(e.target.value);
  };

  const handleNext = async () => {
    setLoading(true);
    try {
      // Save data to API
      const uid = localStorage.getItem("uid");
      await axios.post("http://localhost:5001/api/onboarding/save", {
        step: 7,
        data: {uid,
          education: {
            expertise: selectedItems,
            othercertificates: otherCertificates
          }
        }
      });
      
      navigate('/mentor/Community6'); //no of clients
    } catch (error) {
      console.error("Error saving education data:", error);
      alert("Failed to save your education information. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='h-screen w-screen flex md:flex-row flex-col overfow-hidden'>
      {/* <div className='bg-[#2A4FB0] w-1/2 h-screen'>
        <div className='pl-6 pt-6'>
          <img src={Logo} className='h-[5vw] w-[4.5vw]' alt='Koach Logo' />
        </div>
        <div className='flex justify-center items-center mt-24 '>
          <img src={MC5} className='h-[382px] w-[397px]' alt='Illustration' />
        </div>
      </div> */}
      <LeftPanel imgSrc={MC5} />
      {/* <div className='w-1/2 h-screen p-6'> */}
        <RightPanel>
        <div className='lg:text-[36px] md:text-2xl text-xl text-[#262626] font-bold pb-2 mt-10'>
          Active Coaching Certifications, Credentials, and Education
        </div>
        <div className='text-center text-[#001F54]   p-0 pt-2  md:space-x-10 space-x-0 flex gap-0 flex-col justify-center items-center'>
          <div className=' text-center font-bold lg:text-[20px] text-md  mt-5 mb-6 text-[#001F54]'>You've worked hard to elevate your career to where it is now, share your credentials and increase interest from new prospective clients</div>
          <div className='flex'>
          <div className="text-md lg:w-96 p-2 scrollbar-hide">            
            {items.map((item, index) => (
              <label
                key={index} 
                className={`flex text-sm text-[#001F54] font-bold items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer 
                          transition-colors duration-200 
                          ${selectedItems.includes(item) ? 'bg-blue-50' : ''}`}
                onClick={() => toggleItem(item)}
              >
                <div className={`min-w-6 h-6 mr-3 border rounded-lg cursor-pointer p-1
                            transition-colors duration-200
                            ${selectedItems.includes(item) 
                              ? 'bg-[#2D488F] border-white' 
                              : 'border-gray-300 bg-white'}`}
                              
                onClick={() => toggleItem(item)}>
                  {selectedItems.includes(item) && <FaCheck className="text-white w-4 h-4" />}
                </div>
                <input
                  className="hidden"
                  type='checkbox'
                  checked={selectedItems.includes(item)}
                  onChange={() => toggleItem(item)}
                  onClick={()=>toggleItem(item)}
                />
                <span className='text-gray-700 md:text-base text-md text-left'>{item}</span>
              </label>
            ))}
          </div>
          <div className='lg:w-3/4  md:text-[20px] text-md'>
            <div className='text-left font-bold mb-3 w-[186px]'>Other, please specify (Optional)</div>
            <div className='min-h-[100px] max-w-[210px]'>
              <textarea
                placeholder='Additional certificates'
                className='w-full px-5 min-h-[100px] text-sm  border  rounded-md p-2 focus:ring-1 focus:ring-blue-500 focus:outline-none'
                value={otherCertificates}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        </div>
        
        <div className='flex justify-center md:w-1/2 w-screen md:mb-0  mb-10 pt-0 min-w-100 lg:absolute bottom-10'>
          <button 
            onClick={() => navigate(-1)} 
            className='bg-[#F5E649] text-black rounded-lg lg:px-17 px-12 py-3 font-bold transition-colors hover:bg-[#E6D83D]'
            disabled={loading}
          >
            Back
          </button>
          <button 
            onClick={handleNext} 
            className='bg-[#F5E649] text-black rounded-lg lg:px-17 px-12 py-3 font-bold ml-14 hover:bg-[#E6D83D]'
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Next'}
          </button>
        </div>
      </RightPanel>
    </div>
  );
}