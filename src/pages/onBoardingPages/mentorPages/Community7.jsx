import React, { useState } from 'react';
import C5 from '../../../assets/signup/C5.png';
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import LeftPanel from "../../../components/onBoardingComp/LeftPanel";
import RightPanel from "../../../components/onBoardingComp/RightPanel";

export default function MentorCommunity7() {
  const navigate=useNavigate()
  const [selectedItems, setSelectedItems] = useState([]);
  const [otherMotivation, setOtherMotivation] = useState("");
  // Sample list of options
  const items = [
    'Empower clients to achieve their goals', 'Facilitate meaningful client transformations', 'Expand my coaching impact and my overall book of business', 
    'Streamline my coaching management workflow', 'Enhance client communication', 
    'Retain or increase client engagement in-between sessions',  
    
  ];

  const toggleItem = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item)
        ? prev.filter((selected) => selected !== item) // Deselect if already selected
        : [...prev, item] // Select if not already selected
    );
  };
  
  const handleInputChange = (e) => {
    setOtherMotivation(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const uid = localStorage.getItem("uid");
      const dataToSubmit = {
        step: 9,
          data: { uid,
           motivation: { 
             motivation: selectedItems, 
              otherMotivation: otherMotivation 
            }
          }
      };
      
      const response = await fetch('http://localhost:5001/api/onboarding/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSubmit),
      });

      const result = await response.json();
      if (response.ok) {
        console.log("User data saved successfully:", result);
        navigate('/AccCreated'); // Redirect after successful submission
      } else {
        console.error("Error saving user data:", result.message);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className='h-full w-screen flex md:flex-row flex-col '>
      {/* <div className='bg-[#2A4FB0] w-1/2 h-screen'>
        <div className='pl-6 pt-6'>
          <img src={Logo} className='h-[5vw] w-[4.5vw]' alt='Koach Logo' />
        </div>
        <div className='flex justify-center items-center mt-24'>
          <img src={C5} className='h-[20vw] w-[30vw]' alt='Illustration' />
        </div>
      </div> */}
      <LeftPanel imgSrc={C5} />
      {/* <div className='w-1/2 h-screen p-10'> */}
      <RightPanel>
        <div className='lg:text-[26px] md:text-xl text-xl mt-5 text-[#262626] font-bold '>
          What are your main motivations for joining Koach?
        </div>
        <div className='lg:px-[2vw] text-[#001F54]  space-x-5 flex lg:flex-row flex-col gap-1'>
          <div className="md:w-100 w-80 p-2 scrollbar-hide">
            {items.map((item,index) => (
              <label 
                key={index} 
                className={`flex  items-center md:my-2 p-2 rounded-md cursor-pointer 
                            transition-colors  duration-200 
                            ${selectedItems.includes(item) ? 'bg-[#2D488F] text-white' : 'font-bold text-[#001f54]'}`}
                  onClick={() => toggleItem(item)}
              >
                
                  <div className={`min-w-6 h-6 mr-3 border rounded-lg cursor-pointer p-1
                              transition-colors duration-200
                              ${selectedItems.includes(item) 
                                ? 'bg-[#001f54] text-white' 
                                : 'border-gray-300 bg-white'}`}
                                onChange={()=>toggleItem(item)}
                  onClick={()=>toggleItem(item)}>
                    {selectedItems.includes(item) && <FaCheck className="text-white w-4 h-4" />}
                  </div>
                <input
                  className="hidden"
                  type='checkbox'
                  checked={selectedItems.includes(item)}
                  onChange={()=>toggleItem(item)}
                  
                  
                />
                 <span className='text-left'>{item}</span>
                 </label>
                
            ))}
          </div>
          <div className='lg:m-0 mx-auto'>
            <div className='md:text-[20px] text-md text-left font-medium'>Other, please specify (Optional)</div>
            <div className='border border-black rounded-lg h-[85px] lg:w-[186px] w-80 mt-3'>
              <textarea placeholder='xyz' value={otherMotivation} onChange={handleInputChange} className='w-full h-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none' >
              </textarea>
            </div>
          </div>
        </div>
        
        <div className='pt-3 min-w-100 '>
          <button onClick={()=>navigate(-1)} className='bg-[#F5E649] text-black rounded-lg lg:px-17 px-12 py-3  font-bold'>
            Back
          </button>
          <button onClick={handleSubmit} className='bg-[#F5E649] text-black rounded-lg lg:px-17 px-12 py-3 font-bold ml-14'>
            Finish
          </button>
        </div>
      </RightPanel>
    </div>
  );
}