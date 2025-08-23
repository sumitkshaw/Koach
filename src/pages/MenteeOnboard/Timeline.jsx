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
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center px-8 py-12 lg:px-16">
        <div className="max-w-2xl w-full flex flex-col items-center justify-center">
          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A90E2] mb-4 text-center">
              Timeline
            </h2>
            <p className="text-lg text-[#4A90E2] text-center font-medium">
              What is your desired timeline for achieving your goals?
            </p>
          </div>

          {/* Timeline Options */}
          <div className="flex flex-col gap-4 w-full mb-12 max-w-md">
            {timelineOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(option)}
                className={`p-4 border rounded-lg text-left transition ${
                  selected === option
                    ? "border-[#FFD93B] bg-[#FFFBEA]"
                    : "border-gray-300 bg-white hover:border-gray-400"
                }`}
              >
                <span className="text-[#4A90E2] font-medium">
                  {option}
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
                disabled={!selected}
                className={`w-32 py-3 rounded transition ${
                  selected 
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