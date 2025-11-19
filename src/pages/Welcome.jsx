import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoWhite from "../assets/logowhite.png";
import WelcomeImage from "../assets/welcome_1.png";
import MenteeImage from "../assets/mentee.png";
import MentorImage from "../assets/mentor.png";

export default function Welcome() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleNext = () => {
    if (selected === "mentee") {
      navigate("/bio-step");
    } else if (selected === "mentor") {
      navigate("/bio-step1");
    }
  };

  return (
    <div className="flex min-h-screen flex-col lg:flex-row bg-gradient-to-b from-blue-50 to-white lg:bg-none">

      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#1E4AB8] flex-col justify-between items-center p-8">
        {/* Logo */}
        <div className="w-full text-left">
          <img src={LogoWhite} alt="Logo" className="h-10" />
        </div>
        {/* Illustration */}
        <div className="flex-grow flex justify-center items-center">
          <img
            src={WelcomeImage}
            alt="Welcome"
            className="max-w-2xl w-full h-auto"
            style={{ minHeight: "400px" }}
          />
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 bg-white/90 lg:bg-white backdrop-blur-sm lg:backdrop-blur-none flex flex-col justify-center items-center px-4 py-6 sm:px-8 sm:py-12 lg:px-16">
        <div className="max-w-2xl w-full flex flex-col items-center justify-center">
          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4A90E2] mb-2 sm:mb-3 text-center">
              Welcome to Koach
            </h2>
            <p className="text-base sm:text-lg text-[#4A90E2]/90 text-center font-medium px-2">
              Your accelerated professional growth starts here. Answer a few quick questions
              (takes ~3 mins) to find your ideal coach!
            </p>
          </div>

          {/* Options - Enhanced for mobile */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-12 justify-center mb-6 sm:mb-8 w-full px-2 sm:px-0">
            {/* Mentee Option */}
            <div
              onClick={() => setSelected("mentee")}
              className={`cursor-pointer border-2 rounded-xl p-4 sm:p-8 w-full sm:w-64 lg:w-72 h-48 sm:h-72 lg:h-80 flex flex-col items-center justify-center transition-all duration-200 active:scale-95 ${
                selected === "mentee" 
                  ? "border-[#FFD93B] shadow-lg bg-blue-50/50" 
                  : "border-gray-200 hover:border-blue-100"
              }`}
            >
              <img 
                src={MenteeImage} 
                alt="Mentee" 
                className="h-24 sm:h-36 lg:h-40 mb-3 sm:mb-6 transition-transform duration-200 group-hover:scale-105" 
              />
              <p className="text-[#4A90E2] font-semibold text-lg sm:text-xl">Mentee</p>
            </div>

            {/* Mentor Option */}
            <div
              onClick={() => setSelected("mentor")}
              className={`cursor-pointer border-2 rounded-xl p-4 sm:p-8 w-full sm:w-64 lg:w-72 h-48 sm:h-72 lg:h-80 flex flex-col items-center justify-center transition-all duration-200 active:scale-95 ${
                selected === "mentor" 
                  ? "border-[#FFD93B] shadow-lg bg-blue-50/50" 
                  : "border-gray-200 hover:border-blue-100"
              }`}
            >
              <img 
                src={MentorImage} 
                alt="Mentor" 
                className="h-24 sm:h-36 lg:h-40 mb-3 sm:mb-6 transition-transform duration-200 group-hover:scale-105" 
              />
              <p className="text-[#4A90E2] font-semibold text-lg sm:text-xl">Mentor</p>
            </div>
          </div>

          {/* Buttons - Enhanced for mobile */}
          <div className="flex justify-center mt-6 w-full px-4 sm:px-0">
            <button
              onClick={handleNext}
              disabled={!selected}
              className={`w-full max-w-xs py-3.5 rounded-lg font-medium text-base transition-all duration-200 transform active:scale-95 ${
                selected
                  ? "bg-gradient(95deg, #FFD93B 0%, #FFB800 100%) text-[#4A90E8] shadow-md hover:shadow-lg"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              {selected ? 'Continue' : 'Select an option'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}