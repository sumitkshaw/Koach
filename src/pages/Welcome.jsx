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
    <div className="flex min-h-screen flex-col lg:flex-row">
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
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center px-4 py-8 sm:px-8 sm:py-12 lg:px-16">
        <div className="max-w-2xl w-full flex flex-col items-center justify-center">
          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A90E2] mb-3 text-center">
              Welcome to Koach
            </h2>
            <p className="text-lg text-[#4A90E2] text-center font-medium">
              Your accelerated professional growth starts here and now. Answer a few quick questions
              (it'll take 3 mins to complete) and get to finding your ideal coach!
            </p>
          </div>

          {/* Options - Centered and Larger */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12 justify-center mb-8 w-full">
            {/* Mentee Option */}
            <div
              onClick={() => setSelected("mentee")}
              className={`cursor-pointer border rounded-xl p-6 sm:p-8 w-full sm:w-64 lg:w-72 h-64 sm:h-72 lg:h-80 flex flex-col items-center justify-center transition ${
                selected === "mentee" ? "border-[#FFD93B] shadow-lg" : "border-gray-300"
              }`}
            >
              <img src={MenteeImage} alt="Mentee" className="h-32 sm:h-36 lg:h-40 mb-4 sm:mb-6" />
              <p className="text-[#4A90E2] font-semibold text-xl">Mentee</p>
            </div>

            {/* Mentor Option */}
            <div
              onClick={() => setSelected("mentor")}
              className={`cursor-pointer border rounded-xl p-6 sm:p-8 w-full sm:w-64 lg:w-72 h-64 sm:h-72 lg:h-80 flex flex-col items-center justify-center transition ${
                selected === "mentor" ? "border-[#FFD93B] shadow-lg" : "border-gray-300"
              }`}
            >
              <img src={MentorImage} alt="Mentor" className="h-32 sm:h-36 lg:h-40 mb-4 sm:mb-6" />
              <p className="text-[#4A90E2] font-semibold text-xl">Mentor</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center mt-4 w-full">
            <div className="flex gap-4 w-full justify-center">
              {/* <button
                onClick={() => navigate("/about-me")}
                className="w-32 py-3 border border-[#FFD93B] text-[#4A90E2] rounded hover:bg-[#FFD93B] transition"
              >
                Back
              </button> */}
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