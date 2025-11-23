import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logowhite.png";
import Planning from "../../assets/brazuca_planning.png";

export default function AboutMe() {
  const [skill_bio, setSkillBio] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    console.log("Skills submitted:", skill_bio);
    // Save bio to backend / firestore here
    navigate("/mentor-expert"); //next onboarding step
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
            <div className="hidden lg:flex lg:w-1/2 bg-[#1E4AB8] text-white flex-col items-center justify-center p-8 relative">
              <img src={Logo} alt="Koach Logo" className="h-10 mb-8 absolute top-8 left-8" />
              <div className="w-full flex flex-col justify-center items-center h-full">
                <img
                  src={Planning}
                  alt="Illustration"
                  className="w-[90%] max-w-3xl h-auto"
                  style={{ minHeight: "500px" }}
                />
              </div>
            </div>
      {/* Right Panel */}
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-50 via-white to-indigo-50 lg:bg-white flex flex-col justify-center items-center px-4 sm:px-8 py-8 sm:py-12 lg:px-16 relative overflow-hidden">
        <div className="lg:hidden absolute top-0 right-0 w-32 h-32 bg-[#FFD93B] rounded-full opacity-5 blur-3xl"></div>
        <div className="lg:hidden absolute bottom-0 left-0 w-40 h-40 bg-[#1E4AB8] rounded-full opacity-5 blur-3xl"></div>
        <div className="max-w-2xl w-full flex flex-col items-center justify-center relative z-10">
          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-6 sm:mb-10">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#1E4AB8] to-[#4A90E2] bg-clip-text text-transparent mb-2 sm:mb-3 text-center">Skills and Expertise</h2>
            <p className="text-sm sm:text-lg text-gray-600 lg:text-[#1E4AB8] text-center font-medium">
              Briefly list your key skills and areas of expertise
            </p>
          </div>

          {/* Textarea with label and word count inside */}
                    <div className="mb-6 sm:mb-8 relative w-full flex justify-center">
            <div className="w-full relative">
              <textarea
                value={skill_bio}
                onChange={(e) => setSkillBio(e.target.value)}
                className="w-full h-64 sm:h-80 lg:h-96 px-4 sm:px-4 pt-4 sm:pt-4 pb-8 border-2 border-gray-200 lg:border-gray-300 rounded-2xl lg:rounded-lg resize-none focus:border-[#1E4AB8] focus:outline-none focus:ring-2 focus:ring-[#FFD93B] text-sm sm:text-base bg-white shadow-lg lg:shadow-none transition-all duration-200"
                maxLength={750}
              />
              {/* Custom colored placeholder */}
              {!skill_bio && (
                <div className="absolute top-4 right-4 pointer-events-none select-none text-left w-[calc(100%-2rem)]">
                  <span className="text-[#1E4AB8] font-medium text-base block">
                    Tell us about you
                  </span>
                  <span className="text-[#90B6F9] text-sm font-normal block">
                    (You can talk about your experience and skills)
                  </span>
                </div>
              )}
              {/* Word count inside textarea box */}
              <div className="absolute bottom-4 right-4 text-sm text-gray-500 pointer-events-none select-none">
                {skill_bio.length}/750 words
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center mt-6 sm:mt-10 w-full">
            <div className="flex gap-3 sm:gap-8 w-full justify-center">
              <button
                onClick={() => navigate("/mentor-experience")}
                className="lg:w-44 w-full sm:w-32 py-3 sm:py-3 text-sm sm:text-base border-2 border-[#FFD93B] text-[#1E4AB8] rounded-xl lg:rounded hover:bg-[#FFD93B] transition-all duration-200 font-semibold shadow-md lg:shadow-none hover:shadow-lg active:scale-95"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="lg:w-44 w-full sm:w-32 py-3 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-[#FFD93B] to-[#FFE066] text-[#1E4AB8] rounded-xl lg:rounded hover:opacity-90 transition-all duration-200 font-semibold shadow-md lg:shadow-none hover:shadow-lg active:scale-95"
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
