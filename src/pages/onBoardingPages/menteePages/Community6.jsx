import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/signup//Logo.png";
import C2 from "../../../assets/signup/C2.png";

import LeftPanel from "../../../components/onBoardingComp/LeftPanel";
import RightPanel from "../../../components/onBoardingComp/RightPanel";
import NavigationButtons from "../../../components/onBoardingComp/NavigationButtons";
export default function Community6() {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  
  const items = [
    "less than 6 months",
    "3-6 months",
    "in 6 months",
    "about a year",
    "1 year +"
  ];

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  const handleNext = async () => {
    if (!selectedItem) {
      alert("Please select a timeline before proceeding.");
      return;
    }

    try {
      const uid = localStorage.getItem("uid");
      const response = await fetch("http://localhost:5001/api/onboarding/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          step: 6,
          data: {uid,
            timeline: selectedItem
          }
        })
      });

      const result = await response.json();
      if (response.ok) {
        console.log("Step 5 data saved successfully:", result);
        navigate("/mentee/Community7");//noof sessions
      } else {
        alert(result.message || "Failed to save data.");
      }
    } catch (error) {
      console.error("Error saving step 5 data:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="h-screen relative w-screen flex flex-col md:flex-row md:overflow-hidden">
      <LeftPanel imgSrc={C2}/>
      <RightPanel>
        <div className="flex flex-col md:gap-10 gap-2 mt-2  lg:h-screen lg:justify-between">
        <div className='flex flex-col md:gap-10'>
        <div className="lg:text-4xl md:text-2xl text-xl text-[#262626] font-bold mb-2 lg:mt-0 mt-10  px-0 ">
          What is your desired timeline for achieving your goals?
        </div>
        <div className="text-left px-[2vw] md:py-10 space-y-5 mb-10">
          {items.map((item, index) => (
            <>
            <button
              key={index}
              onClick={() => handleSelectItem(item)}
              className={`border-2 rounded-lg p-1 mb-2  md:text-lg text-sm font-medium ${
    selectedItem === item
      ? "bg-[#2D488F] border-[#2D488F] text-white"
      : "bg-white text-black border-black"
  } hover:bg-[#2D488F] hover:text-[#FFFFFF] hover:border-[#2D488F]`}
            >
              {item}
            </button>
            <br></br>
                    </>
          ))}
        </div>
        </div>
        <NavigationButtons
          onNext={handleNext}
        /> 
        </div> 
      </RightPanel>
      
    </div>
  );
}