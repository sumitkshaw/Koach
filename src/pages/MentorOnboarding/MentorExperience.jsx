import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoWhite from "../../assets/logowhite.png";
import UsingComputer from "../../assets/UsingComputer.png";

import TransitionalIcon from "../../assets/expert-symbols/transitional.png";
import CareerIcon from "../../assets/expert-symbols/career.png";
import ExecutiveIcon from "../../assets/expert-symbols/executive.png";
import SalesIcon from "../../assets/expert-symbols/sales.png";
import LeadershipIcon from "../../assets/expert-symbols/leadership.png";
import PerformanceIcon from "../../assets/expert-symbols/performance.png";
import MarketingIcon from "../../assets/expert-symbols/marketing.png";
import DevOpsIcon from "../../assets/expert-symbols/devops.png";
import SuccessIcon from "../../assets/expert-symbols/success.png";

export default function MentorExperience() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);

  const expertiseOptions = [
    { label: "Transitional", icon: TransitionalIcon },
    { label: "Career", icon: CareerIcon },
    { label: "Executive", icon: ExecutiveIcon },
    { label: "Sales", icon: SalesIcon },
    { label: "Leadership", icon: LeadershipIcon },
    { label: "Performance", icon: PerformanceIcon },
    { label: "Marketing", icon: MarketingIcon },
    { label: "Dev ops/IT", icon: DevOpsIcon },
    { label: "Success", icon: SuccessIcon },
  ];

  const handleSelect = (option) => {
    setSelected(prev =>
      prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option]
    );
  };

  const handleNext = () => {
    if (selected.length > 0) {
      console.log("Selected expertise:", selected);
      navigate("/skills");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#1E4AB8] flex-col justify-between items-center p-8">
        {/* Logo */}
        <div className="w-full text-left">
          <img src={LogoWhite} alt="Logo" className="h-10" />
        </div>
        {/* Illustration */}
        <div className="flex-grow flex justify-center items-center">
          <img
            src={UsingComputer}
            alt="Mentor Expertise"
            className="w-[644px] h-[476px] object-contain"
            style={{ maxWidth: "644px", maxHeight: "476px" }}
          />
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center px-8 py-12 lg:px-16">
        <div className="max-w-2xl w-full text-center">
          {/* Header */}
          <h2 className="text-[40px] font-bold text-[#001F54] mb-6 font-['Proxima Nova']">
            Your Expertise
          </h2>
          <p className="text-gray-600 mb-10 font-['Proxima Nova']">
            Select your primary coaching niches
          </p>

          {/* Expertise Grid */}
          <div className="grid grid-cols-2 gap-6 justify-center">
            {expertiseOptions.map((option, index) => (
              <div
                key={option.label}
                onClick={() => handleSelect(option.label)}
                className={`cursor-pointer flex items-center py-5 px-4 border rounded-md transition 
                  ${
                    selected.includes(option.label)
                      ? "bg-[#2A4FB0] text-white border-[#001F54]"
                      : "border-[#001F54] text-[#001F54] bg-white hover:bg-gray-50"
                  }`}
              >
                <img
                  src={option.icon}
                  alt={option.label + " icon"}
                  className={`h-8 w-8 mr-4 transition-all duration-200 ${
                    selected.includes(option.label) ? "filter invert brightness-0" : "filter"
                  }`}
                  style={{
                    filter: selected.includes(option.label)
                      ? "invert(100%) brightness(200%)"
                      : "invert(27%) sepia(94%) saturate(749%) hue-rotate(191deg) brightness(92%) contrast(101%)"
                  }}
                />
                <span>{option.label}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-center mt-12 w-full">
            <div className="flex gap-8 w-full justify-center">
              <button
                onClick={() => navigate("/bio-step1")}
                className="w-40 py-3 border border-[#FFD93B] text-[#1E4AB8] rounded hover:bg-[#FFD93B] transition"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={selected.length === 0}
                className={`w-40 py-3 rounded transition ${
                  selected.length > 0
                    ? "bg-[#FFD93B] text-[#1E4AB8] hover:opacity-90"
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