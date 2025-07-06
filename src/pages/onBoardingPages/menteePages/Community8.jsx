import React, { useState } from 'react';
import C4 from '../../../assets/signup/C4.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import LeftPanel from "../../../components/onBoardingComp/LeftPanel";
import RightPanel from "../../../components/onBoardingComp/RightPanel";
import NavigationButtons from "../../../components/onBoardingComp/NavigationButtons";

export default function Community8() {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState({ qualities: [], traits: [] });
  
  const Items = [
    "Marketing", "Interview Skills", "Stress management", "Networking", "Sales", "Productivity", "IT/Devops", 
    "Customer Service", "Negotiation", "Time Management", "Communication", "Resume Writing", "Leadership", 
    "Confidence building", "Career change", "Performance", "Startups", "Management", "Finding a job in a specific industry"
  ];

  const Traits = [
    "Directive", "Collaborative", "Patient", "Challenging", "Encouraging", "Enthusiastic"
  ];

  const handleSelectItem = (item, category) => {
    setSelectedValue((prev) => {
      const updatedCategory = prev[category].includes(item)
        ? prev[category].filter((i) => i !== item)
        : [...prev[category], item];
      
      return {
        ...prev,
        [category]: updatedCategory
      };
    });
  };

  const handleSubmit = async () => {
    try {
      // Send qualities and traits separately
      const uid = localStorage.getItem("uid");
      const response = await axios.post('http://localhost:5001/api/onboarding/save', {
        step: 8, 
        data: {uid,
          preferences: {
            qualities: selectedValue.qualities, // Send only selected qualities
            traits: selectedValue.traits, // Send only selected traits
          },
        }
      });
      console.log('Data submitted:', response.data);
      navigate('/mentee/Community9'); // reasons
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div className="h-full w-screen flex md:flex-row flex-col md:overflow-hidden">    
      <LeftPanel imgSrc={C4} />
      
      <RightPanel>
        <div className="flex flex-col md:gap-10 gap-5 lg:h-screen lg:justify-between">
        <div className='flex flex-col md:gap-10'>
        <div className="lg:text-4xl md:text-3xl text-xl  text-[#262626] font-bold pt-10">
          Are there any specific qualities or areas of expertise you seek in a coach?
        </div>
        
        <div className="text-center p-[1vw] space-x-2 ml-[-30px]">
          {Items.map((item, index) => (
            <button 
              key={index} 
              onClick={() => handleSelectItem(item, 'qualities')} 
              className={`border-2 rounded-xl p-1 mb-2 text-[#050A30] md:text-sm text-xs font-medium ${selectedValue.qualities.includes(item) ? 'bg-[#2D488F] border-[#2D488F] text-white' : 'bg-white text-black border-black'} hover:bg-[#2D488F] hover:text-[#FFFFFF] hover:border-[#2D488F]`}>
              {item}
            </button>
          ))}
        </div>

        <div className="lg:text-3xl md:text-2xl text-xl text-[#262626] font-bold mx-auto text-center">
          Traits
        </div>
        
        <div className="text-center mx-auto pr-[2vw]  space-x-2 ">
          {Traits.map((item, index) => (
            <button 
              key={index} 
              onClick={() => handleSelectItem(item, 'traits')} 
              className={`border-2 rounded-xl p-1 mb-2 text-[#050A30]  md:text-sm text-xs font-medium ${selectedValue.traits.includes(item) ? 'bg-[#2D488F] border-[#2D488F] text-white' : 'bg-white text-black border-black'} hover:bg-[#2D488F] hover:text-[#FFFFFF] hover:border-[#2D488F]`}>
              {item}
            </button>
          ))}
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
