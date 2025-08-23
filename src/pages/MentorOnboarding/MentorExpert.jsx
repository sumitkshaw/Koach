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
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center px-8 py-12 lg:px-16">
        <div className="max-w-2xl w-full">
          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-10">
            <h2 className="text-4xl font-bold text-[#1E4AB8] mb-3 text-center">Are you an Expert</h2>
            <p className="text-lg text-[#1E4AB8] text-center font-medium">
              Give fast answers like a perfect pro
            </p>
          </div>

          {/* Description */}
          <div className="mb-8 flex flex-col gap-6">
            <p className="text-[#1E4AB8] text-base">
              When a mentee is stuck on a problem or has a nagging question that demands an expert’s touch, ExpertFinder connects the mentee to you, in <span className="font-semibold">real-time</span>.
            </p>
            <p className="text-[#1E4AB8] text-base">
              ExpertFinder instantly identifies qualified experts like yourself to answer a mentee’s time sensitive questions.
            </p>
          </div>

          {/* Checkbox */}
          <div className="flex items-center mb-10">
            <input
              type="checkbox"
              id="expertOptIn"
              checked={isExpert}
              onChange={() => setIsExpert(!isExpert)}
              className="w-5 h-5 text-[#1E4AB8] border-gray-300 rounded focus:ring-[#1E4AB8]"
            />
            <label htmlFor="expertOptIn" className="ml-3 text-[#1E4AB8] font-bold">
              Opt in as an expert (Optional)
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-center mt-6 w-full">
            <div className="flex gap-8 w-full justify-center">
              <button
                onClick={() => navigate("/skills")}
                className="w-40 py-3 border border-[#FFD93B] text-[#1E4AB8] rounded hover:bg-[#FFD93B] transition"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="w-40 py-3 bg-[#FFD93B] text-[#1E4AB8] rounded hover:opacity-90 transition"
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
