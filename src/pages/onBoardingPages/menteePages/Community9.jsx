import React, { useState } from 'react';
import C5 from '../../../assets/signup/C5.png';
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import LeftPanel from "../../../components/onBoardingComp/LeftPanel";
import RightPanel from "../../../components/onBoardingComp/RightPanel";
import NavigationButtons from "../../../components/onBoardingComp/NavigationButtons";

export default function Community9() {
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState([]);
  const [otherReason, setOtherReason] = useState("");
  
  const items = [
    'Develop Specific skills', 'Achieve career goals', 'Gain clarity on career direction or explore transitions', 
    'Enhance personal branding and marketability', 'Prepare for job interviews and salary negotiations', 
    'Overcome career-related obstacles and setbacks',  
  ];

  const toggleItem = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item)
        ? prev.filter((selected) => selected !== item)
        : [...prev, item]
    );
  };

  const handleSubmit = async () => {
    try {
      const uid = localStorage.getItem("uid");
      const dataToSubmit = {
        step: 9,
          data: { uid,
           mainReason: { 
             reasons: selectedItems, 
              otherReason: otherReason 
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
        navigate('/'); // Redirect after successful submission
      } else {
        console.error("Error saving user data:", result.message);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className='h-full w-screen flex md:flex-row flex-col md:overflow-hidden'>
      <LeftPanel imgSrc={C5} />
      <RightPanel>
        <div className="flex flex-col lg:h-screen lg:justify-between">
        <div>
        <div className='lg:text-4xl md:text-3xl text-xl text-[#262626] font-bold lg:pt-5 md:pt-20 pt-5 p-4 text-left'>
          What are your main reasons for joining <span className='text-[#2A4FB0]'>Koach?</span>
        </div>
        <div className='text-left px-[2vw] w-full md:pt-5 pt-0 md:space-x-10  flex md:flex-row flex-col  '>
          <div className="">
            {items.map((item, index) => (
              <label
                key={index}
                className={`flex items-center md:text-sm text-xs p-3 mb-2 rounded-md cursor-pointer transition-all duration-200 
                  ${selectedItems.includes(item) ? 'bg-[#2D488F] border-[#2D488F] text-white' : 'border-gray-300 bg-white text-gray-700'}`}
                onClick={() => toggleItem(item)}
              >
                <div className={`min-w-6 h-6 mr-3 border rounded-lg cursor-pointer p-1
                              transition-colors duration-200
                              ${selectedItems.includes(item) 
                                ? 'bg-[#2D488F] text-white border-white' 
                                : 'border-gray-700 bg-white'}`}>
                    {selectedItems.includes(item) && <FaCheck className="text-white w-4 h-4" />}
                </div>
                <span className='text-left '>{item}</span>
              </label>
            ))}
          </div>
          <div className=''>
            <div className='md:text-[20px] text-md  font-medium'>Other, please specify (Optional)</div>
            <div className='mt-2 md:mt-5'>
              <textarea
                placeholder='xyz' 
                className='w-full border border-gray-900 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                value={otherReason}
                onChange={(e) => setOtherReason(e.target.value)}
              > </textarea>
            </div>
          </div>
        </div>
        </div>
        
        <NavigationButtons 
          onNext={handleSubmit}
        />
        </div>
      </RightPanel>
    </div>
  );
}
