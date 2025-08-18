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
      navigate("/past-experience");
    } else if (selected === "mentor") {
      navigate("/mentor-experience");
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
            src={WelcomeImage}
            alt="Welcome"
            className="max-w-2xl w-full h-auto"
            style={{ minHeight: "400px" }}
          />
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center px-8 py-12 lg:px-16">
        <div className="max-w-2xl w-full h-full flex flex-col justify-center items-center">
          {/* Header */}
          <h2 className="text-4xl font-bold text-[#1E4AB8] mb-5 text-center leading-none">Welcome to Koach</h2>
          <p className="text-lg text-[#1E4AB8] mb-16 text-center font-medium leading-tight">
            Your accelerated professional growth starts here and now. Answer a few quick questions
            (it'll take 3 mins to complete) and get to finding your ideal coach!
          </p>

          {/* Options - Centered and Larger */}
          <div className="flex gap-12 justify-center mb-20">
            {/* Mentee Option */}
            <div
              onClick={() => setSelected("mentee")}
              className={`cursor-pointer border rounded-xl p-8 w-72 h-80 flex flex-col items-center justify-center transition ${
                selected === "mentee" ? "border-[#FFD93B] shadow-lg" : "border-gray-300"
              }`}
            >
              <img src={MenteeImage} alt="Mentee" className="h-40 mb-6" />
              <p className="text-[#1E4AB8] font-semibold text-xl">Mentee</p>
            </div>

            {/* Mentor Option */}
            <div
              onClick={() => setSelected("mentor")}
              className={`cursor-pointer border rounded-xl p-8 w-72 h-80 flex flex-col items-center justify-center transition ${
                selected === "mentor" ? "border-[#FFD93B] shadow-lg" : "border-gray-300"
              }`}
            >
              <img src={MentorImage} alt="Mentor" className="h-40 mb-6" />
              <p className="text-[#1E4AB8] font-semibold text-xl">Mentor</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center w-full">
            <div className="flex gap-8 w-full justify-center">
              <button
                onClick={() => navigate("/about-me")}
                className="w-44 py-3 border border-[#FFD93B] text-[#1E4AB8] rounded hover:bg-[#FFD93B] transition"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!selected}
                className={`w-44 py-3 rounded transition ${
                  selected
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