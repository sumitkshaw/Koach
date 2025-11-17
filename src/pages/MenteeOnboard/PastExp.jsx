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
    navigate("/welcome-step");
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
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center px-8 py-12 lg:px-16">
        <div className="max-w-2xl w-full flex flex-col items-center justify-center">
          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A90E2] mb-3 text-center">
              Who is Adam?
            </h2>
            <p className="text-lg text-[#4A90E2] text-center font-medium">
              Tell us about your experience
            </p>
          </div>

          {/* Experience Options */}
          <div className="flex flex-col gap-3 w-full mb-8">
            {experiences.map((experience, index) => (
              <button
                key={index}
                onClick={() => handleSelect(experience)}
                className={`flex items-center gap-3 p-4 border rounded-full text-left transition ${
                  selected.includes(experience.label)
                    ? "border-[#FFD93B] bg-[#FFFBEA]"
                    : "border-gray-300 bg-white hover:border-gray-400"
                }`}
              >
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  <img 
                    src={experience.icon} 
                    alt={experience.label} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="text-[#4A90E2] font-medium flex-1 text-sm">
                  {experience.label}
                </span>
              </button>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-center mt-4 w-full">
            <div className="flex gap-4 w-full justify-center">
              <button
                onClick={handleBack}
                className="w-32 py-3 border border-[#FFD93B] text-[#4A90E2] rounded hover:bg-[#FFD93B] transition"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={selected.length === 0}
                className={`w-32 py-3 rounded transition ${
                  selected.length > 0
                    ? "bg-[#FFD93B] text-[#4A90E2] hover:opacity-90" 
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