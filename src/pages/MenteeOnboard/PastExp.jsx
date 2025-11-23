import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logowhite.png";
import DrummerImage from "../../assets/drummer.png";

import Option1Icon from "../../assets/experience/option1.png";
import Option2Icon from "../../assets/experience/option2.png";
import Option3Icon from "../../assets/experience/option3.png";
import Option4Icon from "../../assets/experience/option4.png";
import Option5Icon from "../../assets/experience/option5.png";
import Option6Icon from "../../assets/experience/option6.png";
import Option7Icon from "../../assets/experience/option7.png";
import Option8Icon from "../../assets/experience/option8.png";

export default function WhoIsAdam() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);

  const experiences = [
    { 
      label: "I am a graduating senior looking to start professional mentoring", 
      icon: Option1Icon 
    },
    { 
      label: "I recently graduated college seeking mentorship", 
      icon: Option2Icon 
    },
    { 
      label: "I am a new pro (1-5 years experience) seeking mentorship", 
      icon: Option3Icon 
    },
    { 
      label: "I want to extend of enhance my skills", 
      icon: Option4Icon 
    },
    { 
      label: "Transitioning career or job", 
      icon: Option5Icon 
    },
    { 
      label: "Seeking promotion", 
      icon: Option6Icon 
    },
    { 
      label: "Transitioning into mid manager or senior level role", 
      icon: Option7Icon 
    },
    { 
      label: "I am an entrepreneur experiencing a roadblock", 
      icon: Option8Icon 
    },
  ];

  const handleSelect = (experience) => {
    setSelected(prev => 
      prev.includes(experience.label)
        ? prev.filter(item => item !== experience.label)
        : [...prev, experience.label]
    );
  };

  const handleNext = () => {
    console.log("Selected experiences:", selected);
    navigate("/timeline");
  };

  const handleBack = () => {
    navigate("/bio-step");
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#1E4AB8] text-white flex-col items-center justify-center p-8 relative">
        <img
          src={Logo}
          alt="Koach Logo"
          className="h-10 mb-8 absolute top-8 left-8"
        />
        <div className="w-full flex flex-col justify-center items-center h-full">
          <img
            src={DrummerImage}
            alt="Drummer Illustration"
            className="w-[90%] max-w-3xl h-auto"
            style={{ minHeight: "500px" }}
          />
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-50 via-white to-indigo-50 lg:bg-white flex flex-col justify-center items-center px-4 sm:px-8 py-8 sm:py-12 lg:px-16 relative overflow-hidden">
        <div className="lg:hidden absolute top-0 right-0 w-32 h-32 bg-[#FFD93B] rounded-full opacity-5 blur-3xl"></div>
        <div className="lg:hidden absolute bottom-0 left-0 w-40 h-40 bg-[#4A90E2] rounded-full opacity-5 blur-3xl"></div>
        <div className="max-w-2xl w-full flex flex-col items-center justify-center relative z-10">
          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-6 sm:mb-10">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#4A90E2] to-[#1E4AB8] bg-clip-text text-transparent mb-2 sm:mb-3 text-center">
              Who is Adam?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 lg:text-[#4A90E2] text-center font-medium">
              Tell us about your experience
            </p>
          </div>

          {/* Experience Options */}
          <div className="flex flex-col gap-3 sm:gap-3 w-full mb-6 sm:mb-8">
            {experiences.map((experience, index) => (
              <button
                key={index}
                onClick={() => handleSelect(experience)}
                className={`flex items-center gap-3 sm:gap-3 p-4 sm:p-4 border-2 rounded-2xl lg:rounded-full text-left transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] ${
                  selected.includes(experience.label)
                    ? "border-[#FFD93B] bg-gradient-to-r from-[#FFFBEA] to-[#FFF8DC] shadow-lg lg:shadow-none lg:bg-[#FFFBEA]"
                    : "border-gray-200 lg:border-gray-300 bg-white hover:border-[#4A90E2] hover:bg-blue-50/50 shadow-md lg:shadow-none"
                }`}
              >
                <div className={`flex-shrink-0 w-8 h-8 sm:w-6 sm:h-6 flex items-center justify-center rounded-lg ${selected.includes(experience.label) ? 'bg-[#FFD93B]/20' : 'bg-gray-100'}`}>
                  <img 
                    src={experience.icon} 
                    alt={experience.label} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className={`font-semibold lg:font-medium flex-1 text-sm sm:text-sm ${selected.includes(experience.label) ? 'text-[#1E4AB8]' : 'text-gray-700 lg:text-[#4A90E2]'}`}>
                  {experience.label}
                </span>
              </button>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-center mt-6 sm:mt-6 w-full">
            <div className="flex gap-3 sm:gap-4 w-full justify-center">
              <button
                onClick={handleBack}
                className="lg:w-32 w-full sm:w-28 py-3 sm:py-3 text-sm sm:text-base border-2 border-[#FFD93B] text-[#4A90E2] rounded-xl lg:rounded hover:bg-[#FFD93B] transition-all duration-200 font-semibold shadow-md lg:shadow-none hover:shadow-lg active:scale-95"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={selected.length === 0}
                className={`lg:w-32 w-full sm:w-28 py-3 sm:py-3 text-sm sm:text-base rounded-xl lg:rounded transition-all duration-200 font-semibold shadow-md lg:shadow-none hover:shadow-lg active:scale-95 ${
                  selected.length > 0
                    ? "bg-gradient-to-r from-[#FFD93B] to-[#FFE066] text-[#1E4AB8] hover:opacity-90" 
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}