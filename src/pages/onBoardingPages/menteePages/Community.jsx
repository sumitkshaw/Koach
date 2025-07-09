import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/signup/KoachLogo.png";
import coaching from "../../../assets/signup/coaching.png";
import NavigationButtons from "../../../components/onBoardingComp/NavigationButtons";

import LeftPanel from "../../../components/onBoardingComp/LeftPanel";
import RightPanel from "../../../components/onBoardingComp/RightPanel";

const BudgetRangeSelector = () => {
  const navigate = useNavigate();
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(2000);
  const [loading, setLoading] = useState(false);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
  };

  const handleNext = async () => {
    setLoading(true);
    try {
      const uid = localStorage.getItem("uid");
      const response = await axios.post("http://localhost:5001/api/onboarding/save", {
        step: 4,
        data: { uid,budgetPreferences: { minBudget: minValue, maxBudget: maxValue } },
      });
      if (response.status === 200) {
        navigate("/mentee/Community5");//goals
      }
    } catch (error) {
      console.error("Error saving budget preferences:", error);
      alert("Failed to save budget data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const minPos = (minValue / 2000) * 100;
  const maxPos = (maxValue / 2000) * 100;

  return (
    <div className="flex md:flex-row flex-col max-w-screen h-screen ">
      {/* Left Panel */}
      <LeftPanel imgSrc={coaching}/>

      {/* Right Panel */}
      <RightPanel>
      <div className="flex flex-col h-screen ">
        <div className="mt-24 mb-24 text-left">
          <h1 className="lg:text-4xl md:text-3xl text-xl font-bold text-[#262626]  max-w-[623px] ">
            Please select your preferred budget range for coaching and mentorship services.
          </h1>
        </div>
        {/* Range Selector */}
        <div className="w-[320px] relative lg:mb-40 mb-10 ml-4">
          <div className="absolute w-full h-2 bg-[#EAECF0] rounded-md ">
            <div className="absolute h-full bg-[#2D488F] rounded-md " style={{ left: `${minPos}%`, width: `${maxPos - minPos}%` }} />
          </div>
          {/* Min Tooltip */}
          <div className="absolute -top-10 bg-white shadow-lg rounded-lg px-3 py-2 transform -translate-x-1/2 " style={{ left: `${minPos}%` }}>
            <div className="text-xs text-gray-700 ">${minValue}</div>
            <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-white transform rotate-45 -translate-x-1/2 translate-y-1/2" />
          </div>
          {/* Max Tooltip */}
          <div className="absolute -top-10 bg-white shadow-lg rounded-lg px-3 py-2 transform -translate-x-1/2" style={{ left: `${maxPos}%` }}>
            <div className="text-xs text-gray-700">${maxValue}</div>
            <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-white transform rotate-45 -translate-x-1/2 translate-y-1/2" />
          </div>
          {/* Sliders */}
          <input type="range" min="0" max="2000" value={minValue} onChange={handleMinChange} className="range-input absolute w-full top-7 " />
          <input type="range" min="0" max="2000" value={maxValue} onChange={handleMaxChange} className="range-input absolute w-full top-0 z-10" />
          <style jsx>{`
            .range-input {
              pointer-events: auto; // Allow interaction
              -webkit-appearance: none;
              appearance: none;
              background: transparent;
              position: relative; // Ensure positioning is correct
            
              
            }
            .range-input::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              width: 24px;
              height: 24px;
              border-radius: 50%;
              background: white;
              border: 1px solid #2D488F;
              box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1);
              cursor: pointer;
              position: relative;
              z-index: 1;
              bottom : 36px
            }
            .range-input::-moz-range-thumb {
              width: 24px;
              height: 24px;
              border-radius: 50%;
              background: white;
              border: 1px solid #2D488F;
              box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1);
              cursor: pointer;
              position: relative;
              z-index: 1;
            }
          `}</style>
        </div>
        </div>
        <NavigationButtons
          onNext={handleNext}
          disableNext={loading}
        />  

        {/* <div className="mt-10">
        <div className=" flex gap-8 mt-auto justify-center pr-60">
                    <button className="text-[#2D488F] w-[200px] h-[50px] bg-[#F5E649]  font-bold text-xl rounded-[5px]" onClick={() => navigate(-1)}>Back</button>
                    <button className=" text-[#2D488F] w-[200px] h-[50px] bg-[#F5E649]  font-bold text-xl rounded-[5px]" onClick={handleNext} disabled={loading}>Next</button>
                </div>
      </div> */}
      
      </RightPanel>
    </div>
  );
};

export default BudgetRangeSelector;