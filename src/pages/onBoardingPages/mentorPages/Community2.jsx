import React, { useState } from 'react';
import axios from 'axios'; // Added missing import
import coaching from '../../../assets/signup/coaching.png';
import { useNavigate } from 'react-router-dom';

import LeftPanel from "../../../components/onBoardingComp/LeftPanel";
import RightPanel from "../../../components/onBoardingComp/RightPanel";
import NavigationButtons from "../../../components/onBoardingComp/NavigationButtons";

const Community2 = () => {
  const navigate = useNavigate();
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(2000);
  const [sessions, setSessions] = useState(3); // Default value
  const [deliverables, setDeliverables] = useState('');
  const [loading, setLoading] = useState(false);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
  };

  const handleSessionsChange = (e) => {
    setSessions(e.target.value);
  };

  const incrementSessions = () => {
    setSessions(prev => Number(prev) + 1);
  };

  const decrementSessions = () => {
    setSessions(prev => Math.max(1, Number(prev) - 1));
  };

  const handleDeliverablesChange = (e) => {
    setDeliverables(e.target.value);
  };

  const handleNext = async () => {
    setLoading(true);
    try {
      const uid = localStorage.getItem("uid");
      const response = await axios.post("http://localhost:5001/api/onboarding/save", {
        step: 4,
        data: { uid,
          rate: { 
            minBudget: minValue, 
            maxBudget: maxValue, 
            sessions: sessions, 
            deliverables: deliverables 
          } 
        },
      });
      if (response.status === 200) {
        navigate("/Community3");
      }
    } catch (error) {
      console.error("Error saving rate:", error);
      alert("Failed to save rate data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Calculate left positions for tooltips
  const minPos = (minValue / 2000) * 100;
  const maxPos = (maxValue / 2000) * 100;

  return (
    <div className="flex md:flex-row flex-col w-screen h-screen overflow-hidden">
      {/* Left Panel */}
      {/* <div className="w-1/2 bg-[#2A4FB0] relative">
        <div className="absolute left-1 top-3">
          <img 
            src={logo}
            alt="Koach Logo"
            className="w-[100px] h-[91px]"
          />
        </div>
        <div className="flex justify-center items-center h-full">
          <img 
            src={coaching}
            alt="Onboarding Illustration"
            className="w-[413px] h-[396px]"
          />
        </div>
      </div> */}

      <LeftPanel imgSrc={coaching}/>

      {/* Right Panel */}
      <RightPanel>
        <div className="md:mt-24 mt-6 md:mb-16 ">
          <h1 className="md:text-4xl text-md font-bold text-[#262626]  max-w-[663px] leading-[54px]">
            What is your desired rate per session?
          </h1>
        </div>

        {/* Dual Range Slider Container */}
        <div className="w-[320px] relative md:mb-16 mb-1">
          {/* Slider Track */}
          <div className="absolute w-full h-2 bg-[#EAECF0] rounded-md">
            {/* Progress Bar */}
            <div 
              className="absolute h-full bg-[#2D488F] rounded-md" 
              style={{ left: `${minPos}%`, width: `${maxPos - minPos}%` }} 
            />
          </div>

          {/* Min Value Tooltip */}
          <div 
            className="absolute -top-10 bg-white shadow-lg rounded-lg px-3 py-2 transform -translate-x-1/2"
            style={{ left: `${minPos}%` }}
          >
            <div className="text-xs text-gray-700">${minValue}</div>
            <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-white transform rotate-45 -translate-x-1/2 translate-y-1/2" />
          </div>

          {/* Max Value Tooltip */}
          <div 
            className="absolute -top-10 bg-white shadow-lg rounded-lg px-3 py-2 transform -translate-x-1/2"
            style={{ left: `${maxPos}%` }}
          >
            <div className="text-xs text-gray-700">${maxValue}</div>
            <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-white transform rotate-45 -translate-x-1/2 translate-y-1/2" />
          </div>

          {/* Range Inputs */}
          <input
            type="range"
            min="0"
            max="2000"
            value={minValue}
            onChange={handleMinChange}
             className="range-input absolute w-full top-7"
          />
          <input
            type="range"
            min="0"
            max="2000"
            value={maxValue}
            onChange={handleMaxChange}
            className="range-input absolute w-full top-0 z-10"
          />
        </div>

        {/* Sessions Input */}
        <div className="flex items-center w-full max-w-md mb-8 text-lg">
          <div className="font-bold mr-4">Package of 3 sessions:</div>
          <div className="flex items-center">
            <input 
              type="number" 
              value={sessions} 
              onChange={handleSessionsChange}
              className="border rounded-lg border-black w-16 h-10 text-center font-medium"
              min="1"
            />
            <div className="flex flex-col ml-2">
              <button 
                onClick={incrementSessions}
                className="h-5 w-5 flex items-center justify-center"
                aria-label="Increase sessions"
              >
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 0L9.33013 6H0.669873L5 0Z" fill="#2D488F"/>
                </svg>
              </button>
              <button 
                onClick={decrementSessions}
                className="h-5 w-5 flex items-center justify-center"
                aria-label="Decrease sessions"
              >
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 6L0.669873 0H9.33013L5 6Z" fill="#2D488F"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Deliverables Input */}
        <div className="w-full max-w-md flex mb-12">
          <div className="text-lg font-bold text-left mr-6 mb-3">Deliverables:</div>
          <textarea
            value={deliverables}
            onChange={handleDeliverablesChange}
            className="w-full border rounded-lg border-black p-2 min-h-23"
            placeholder="Describe what deliverables are included in your coaching package..."
          />
        </div>

        <NavigationButtons
          showBack={false}    
          onNext={handleNext}
          disabled={loading}

        />

        {/* Next Button */}
        {/* <button 
          onClick={handleNext} 
          className="bg-[#F5E649] text-black font-bold py-4 px-8 md:mb-0 mb-5 rounded-lg md:w-[246px] w-[155px]  text-lg md:text-xl"
          disabled={loading}
        >
          {loading ? "Saving..." : "Next"}
        </button> */}
    </RightPanel>

      {/* Global Styles */}
      {/* Custom Styles */}
      <style jsx>{`
            .range-input {
              pointer-events: auto;
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
  );
};

export default Community2;