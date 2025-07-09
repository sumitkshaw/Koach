import React, { useState } from "react";
import C1 from "../../../assets/signup//C1.png";
import Logo from "../../../assets/signup//Logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import NavigationButtons from "../../../components/onBoardingComp/NavigationButtons";
import LeftPanel from "../../../components/onBoardingComp/LeftPanel";
import RightPanel from "../../../components/onBoardingComp/RightPanel";

export default function Community5() {
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const options = [
    "I am a graduating senior looking to start professional mentorship",
    "I recently graduated college seeking mentorship",
    "I am a new pro (1-5 years experience) seeking mentorship",
    "I want to extend or enhance my skills",
    "Transitioning career or job",
    "Seeking promotion",
    "Transitioning into mid-manager or senior level role",
    "I'm an entrepreneur experiencing a roadblock",
  ];

  const handleSelectItem = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleNext = async () => {
    if (selectedItems.length === 0) {
      setError("Please select at least one option before proceeding.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const uid = localStorage.getItem("uid");
      const response = await axios.post("http://localhost:5001/api/onboarding/save", {
        step: 5,
      data: {uid,
        goals: {
          selectedItem: selectedItems 
          }
        },
      });

      console.log("Step 4 data saved:", response.data);
      navigate("/mentee/Community6");//timeline
    } catch (err) {
      console.error("Error saving step 4 data:", err);
      setError("Failed to save data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex md:flex-row flex-col lg:overflow-hidden">
      <LeftPanel imgSrc={C1}/>
      <RightPanel>
        <div className="flex flex-col gap-10 lg:h-screen lg:justify-between">
        <div className='flex flex-col md:gap-10'>
        <div className="lg:text-3xl md:text-2xl text-xl text-[#262626] font-bold px-5 md:mt-20 lg:mt-0 text-center lg:mb-5 mb-15 ">
          How would you best describe yourself and your goals for coaching?
        </div>
        <div className="text-left px-[1.5vw] my-2 mb-10 lg:mt-3 mt-10 ">
          {options.map((option, index) => (
            <>
            <button
              key={index}
              onClick={() => handleSelectItem(option)}
              className={`border-2 mb-2 space-y-5 rounded-lg p-1 text-sm text-[#050A30] lg:h-10 h-auto
                ${selectedItems.includes(option) ? "bg-[#2D488F] border-[#2D488F] text-white" : "bg-white text-black border-black"} 
                lg:text-base md:text-sm text-xs font-medium hover:bg-[#2D488F] hover:text-[#FFFFFF] hover:border-[#2D488F]`}
            >
              {option}
            </button>
            <br></br>
            </>
          ))}
        </div>
        
        {error && <p className="text-red-500 py-1 text-sm">{error}</p>}
        </div>
        <NavigationButtons
          onNext={handleNext}
          disableNext={loading}
        />
        </div>  
      </RightPanel>
    </div>
  );
}