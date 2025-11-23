import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logowhite.png";
import CalendarImage from "../../assets/calendar.png";

export default function Timeline() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");

  // Timeline options
  const timelineOptions = [
    "Less than 3 months",
    "3-6 months", 
    "6 months",
    "About a year",
    "1 year"
  ];

  const handleSelect = (option) => {
    setSelected(option);
  };

  const handleNext = () => {
    console.log("Selected timeline:", selected);
    navigate("/sessions");
  };

  const handleBack = () => {
    navigate("/past-experience");
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
            src={CalendarImage}
            alt="Calendar Illustration"
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
          <div className="flex flex-col items-center justify-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#4A90E2] to-[#1E4AB8] bg-clip-text text-transparent mb-3 sm:mb-4 text-center">
              Timeline
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 lg:text-[#4A90E2] text-center font-medium">
              What is your desired timeline for achieving your goals?
            </p>
          </div>

          {/* Timeline Options */}
          <div className="flex flex-col gap-3 sm:gap-4 w-full mb-8 sm:mb-12 max-w-md">
            {timelineOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(option)}
                className={`p-4 sm:p-4 border-2 rounded-2xl lg:rounded-lg text-left transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] ${
                  selected === option
                    ? "border-[#FFD93B] bg-gradient-to-r from-[#FFFBEA] to-[#FFF8DC] shadow-lg lg:shadow-none"
                    : "border-gray-200 lg:border-gray-300 bg-white hover:border-[#4A90E2] hover:bg-blue-50/50 shadow-md lg:shadow-none"
                }`}
              >
                <span className="text-sm sm:text-base font-semibold lg:font-medium text-gray-700 lg:text-[#4A90E2]">
                  {option}
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
                disabled={!selected}
                className={`lg:w-32 w-full sm:w-28 py-3 sm:py-3 text-sm sm:text-base rounded-xl lg:rounded transition-all duration-200 font-semibold shadow-md lg:shadow-none hover:shadow-lg active:scale-95 ${
                  selected 
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