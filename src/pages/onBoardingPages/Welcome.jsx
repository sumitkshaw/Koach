import React, { useState, useEffect } from "react";
import axios from "axios";
import welcome from "../../assets/signup/Welcome.png";
import LeftPanel from "../../components/onBoardingComp/LeftPanel";
import RightPanel from "../../components/onBoardingComp/RightPanel";
import NavigationButtons from "../../components/onBoardingComp/NavigationButtons";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa"; // ✅ ICON IMPORT

const Welcome = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("");


  const handleSubmit = async () => {
    if (!userType) {
      alert("Please select an option");
      return;
    }


    try {
      const uid = localStorage.getItem("uid");
      const response = await axios.post("http://localhost:5001/api/onboarding/save", {
        step: 2,
        data: { uid,
          roleInfo: { userType } },
      });

      console.log("Success:", response.data);
      if(userType=="mentor")
        navigate("/mentor/bio");
      else navigate("/mentee/bio")
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Failed to save data. Please try again.");
    }
  };

  const RadioOption = ({ value, label }) => (
    <div
      onClick={() => setUserType(value)}
      className={`flex items-center justify-between mr-20 cursor-pointer py-2 rounded-md ${
        userType === value ? "border-[#2A4FB0]" : "border-gray-300"
      }`}
    >
      <span className="font-proxima text-[1.3rem] text-[#001F54]">{label}</span>
      <div
        className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center ${
          userType === value ? "bg-[#2A4FB0] border-[#2A4FB0]" : "border-gray-500"
        }`}
      >
        {userType === value && <FaCheck className="text-white text-xs" />}
      </div>
    </div>
  );

  return (
    <div className="flex md:flex-row flex-col h-screen w-screen  bg-white">
      <LeftPanel imgSrc={welcome} imgW="max-w-[350px]" />

      <RightPanel>
        <h1 className="font-proxima font-bold md:text-[36px] text-[2rem]  text-black mt-10 md:mb-0 mb-4">
          Welcome to Koach, <span className="text-[#2A4FB0]">{name}</span>!
        </h1>

        <p className="font-proxima font-semibold md:text-lg text-[1.2rem] text-center leading-[1.5] text-[#262626] md:mb-20 md:mt-5 mb-3 mt-4">
          Welcome to Koach, {name}! Your accelerated professional growth starts here and now. Answer a few quick questions (it'll take 3 mins to complete) and get to finding your ideal coach!
        </p>

        {/* Radio-style Buttons */}
        <div className="flex flex-col text-left w-full gap-4 mb-12">
          <p className="text-left font-bold text-lg text-[#001F54]">You are</p>
          <RadioOption value="mentor" label="Coach/Mentor" />
          <RadioOption value="mentee" label="Looking to be mentored" />
        </div>

        <NavigationButtons onNext={handleSubmit} />
      </RightPanel>
    </div>
  );
};

export default Welcome;
