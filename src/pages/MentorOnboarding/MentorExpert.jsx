import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoWhite from "../../assets/logowhite.png";
import LightBulb from "../../assets/light_bulb.png";

export default function MentorExpert() {
  const navigate = useNavigate();
  const [isExpert, setIsExpert] = useState(false);

  const handleNext = () => {
    console.log("Opt-in as expert:", isExpert);
    navigate("/certifications");
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
            src={LightBulb}
            alt="bulb"
            className="absolute bottom-9 w-[90%] max-w-3xl h-auto"
            style={{ minHeight: "500px" }}
          />
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-50 via-white to-indigo-50 lg:bg-white flex flex-col justify-center items-center px-4 sm:px-8 py-8 sm:py-12 lg:px-16 relative overflow-hidden">
        <div className="lg:hidden absolute top-0 right-0 w-32 h-32 bg-[#FFD93B] rounded-full opacity-5 blur-3xl"></div>
        <div className="lg:hidden absolute bottom-0 left-0 w-40 h-40 bg-[#1E4AB8] rounded-full opacity-5 blur-3xl"></div>
        <div className="max-w-2xl w-full relative z-10">
          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-6 sm:mb-10">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#1E4AB8] to-[#4A90E2] bg-clip-text text-transparent mb-2 sm:mb-3 text-center">Are you an Expert</h2>
            <p className="text-sm sm:text-lg text-gray-600 lg:text-[#1E4AB8] text-center font-medium">
              Give fast answers like a perfect pro
            </p>
          </div>

          {/* Description */}
          <div className="mb-6 sm:mb-8 flex flex-col gap-4 sm:gap-6 bg-white lg:bg-transparent p-4 lg:p-0 rounded-2xl lg:rounded-none shadow-md lg:shadow-none">
            <p className="text-sm sm:text-base text-gray-700 lg:text-[#1E4AB8]">
              When a mentee is stuck on a problem or has a nagging question that demands an expert's touch, ExpertFinder connects the mentee to you, in <span className="font-bold text-[#1E4AB8]">real-time</span>.
            </p>
            <p className="text-sm sm:text-base text-gray-700 lg:text-[#1E4AB8]">
              ExpertFinder instantly identifies qualified experts like yourself to answer a mentee's time sensitive questions.
            </p>
          </div>

          {/* Checkbox */}
          <div className="flex items-center mb-6 sm:mb-10 bg-white lg:bg-transparent p-4 lg:p-0 rounded-xl lg:rounded-none shadow-md lg:shadow-none">
            <input
              type="checkbox"
              id="expertOptIn"
              checked={isExpert}
              onChange={() => setIsExpert(!isExpert)}
              className="w-5 h-5 sm:w-5 sm:h-5 text-[#1E4AB8] border-2 border-gray-300 rounded focus:ring-[#1E4AB8] focus:ring-2"
            />
            <label htmlFor="expertOptIn" className="ml-3 sm:ml-3 text-sm sm:text-base text-[#1E4AB8] font-bold cursor-pointer">
              Opt in as an expert (Optional)
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-center mt-4 sm:mt-6 w-full">
            <div className="flex gap-3 sm:gap-8 w-full justify-center">
              <button
                onClick={() => navigate("/skills")}
                className="lg:w-40 w-full sm:w-28 py-3 sm:py-3 text-sm sm:text-base border-2 border-[#FFD93B] text-[#1E4AB8] rounded-xl lg:rounded hover:bg-[#FFD93B] transition-all duration-200 font-semibold shadow-md lg:shadow-none hover:shadow-lg active:scale-95"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="lg:w-40 w-full sm:w-28 py-3 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-[#FFD93B] to-[#FFE066] text-[#1E4AB8] rounded-xl lg:rounded hover:opacity-90 transition-all duration-200 font-semibold shadow-md lg:shadow-none hover:shadow-lg active:scale-95"
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
