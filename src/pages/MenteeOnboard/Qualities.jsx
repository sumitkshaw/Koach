import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logowhite.png";
import SpeakingImage from "../../assets/Speaking.png";

export default function Qualities() {
  const navigate = useNavigate();
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedTraits, setSelectedTraits] = useState([]);

  // Skills and expertise areas
  const skills = [
    "Interview skills", "Networking", "Marketing", "Stress Management",
    "Sales", "Time management", "Communication", "Goal Setting",
    "Negotiation", "Customer Success", "Productivity and Performance", "Career Change",
    "Start ups", "Confidence Building", "Leadership",
    "Resume Writing", "Finding a job",  
  ];

  // Personal traits
  const traits = [
    "Directive", "Encouraging", "Patient", "Challenging",
    "Collaborative", "Enthusiastic", "Creative"
  ];

  const handleSkillToggle = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else if (selectedSkills.length < 5) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleTraitToggle = (trait) => {
    setSelectedTraits(prev => 
      prev.includes(trait) 
        ? prev.filter(t => t !== trait)
        : [...prev, trait]
    );
  };

  const handleNext = () => {
    const userData = {
      selectedSkills: selectedSkills,
      selectedTraits: selectedTraits
    };
    console.log("Selected user preferences:", userData);
    navigate("/reasons");
  };

  const handleBack = () => {
    navigate("/sessions");
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
            src={SpeakingImage}
            alt="Speaking Illustration"
            className="w-[90%] max-w-3xl h-auto"
            style={{ minHeight: "500px" }}
          />
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-50 via-white to-indigo-50 lg:bg-white flex flex-col justify-center items-center px-4 sm:px-8 py-6 sm:py-8 lg:px-16 relative overflow-hidden">
        <div className="lg:hidden absolute top-4 left-4 w-24 h-24 bg-[#FFD93B] rounded-full opacity-5 blur-2xl"></div>
        <div className="lg:hidden absolute bottom-4 right-4 w-32 h-32 bg-[#4A90E2] rounded-full opacity-5 blur-3xl"></div>
        <div className="max-w-2xl w-full flex flex-col items-center justify-center relative z-10">
          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-5 sm:mb-6">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#4A90E2] to-[#1E4AB8] bg-clip-text text-transparent mb-2 sm:mb-3 text-center">
              Understanding You
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 lg:text-[#4A90E2] text-center font-medium mb-1">
              Are there any specific qualities or areas of expertise you seek
              in Koach?
            </p>
            <p className="text-xs sm:text-sm text-gray-500 text-center font-semibold">
              *choose a maximum of 5
            </p>
          </div>

          {/* Skills Section */}
          <div className="w-full mb-5 sm:mb-6">
            <div className="flex flex-wrap gap-2 sm:gap-2 justify-center">
              {skills.map((skill, index) => (
                <button
                  key={index}
                  onClick={() => handleSkillToggle(skill)}
                  disabled={!selectedSkills.includes(skill) && selectedSkills.length >= 5}
                  className={`px-4 sm:px-4 py-2 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 ${
                    selectedSkills.includes(skill)
                      ? "bg-gradient-to-r from-[#4A90E2] to-[#1E4AB8] text-white shadow-lg"
                      : selectedSkills.length >= 5
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white border-2 border-gray-200 lg:border-[#4A90E2] text-gray-700 lg:text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white hover:border-[#4A90E2] shadow-md hover:shadow-lg"
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
            <div className="text-center mt-3 text-sm font-semibold text-[#4A90E2] bg-blue-50 lg:bg-transparent rounded-lg py-2 lg:py-0">
              Selected: <span className="text-[#1E4AB8]">{selectedSkills.length}</span>/5
            </div>
          </div>

          {/* Traits Section */}
          <div className="w-full mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-xl font-bold bg-gradient-to-r from-[#4A90E2] to-[#1E4AB8] bg-clip-text text-transparent text-center mb-4 sm:mb-4">
              Your Traits
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-2 justify-center">
              {traits.map((trait, index) => (
                <button
                  key={index}
                  onClick={() => handleTraitToggle(trait)}
                  className={`px-4 sm:px-4 py-2 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 ${
                    selectedTraits.includes(trait)
                      ? "bg-gradient-to-r from-[#4A90E2] to-[#1E4AB8] text-white shadow-lg"
                      : "bg-white border-2 border-gray-200 lg:border-[#4A90E2] text-gray-700 lg:text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white hover:border-[#4A90E2] shadow-md hover:shadow-lg"
                  }`}
                >
                  {trait}
                </button>
              ))}
            </div>
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
                className="lg:w-32 w-full sm:w-28 py-3 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-[#FFD93B] to-[#FFE066] text-[#1E4AB8] rounded-xl lg:rounded hover:opacity-90 transition-all duration-200 font-semibold shadow-md lg:shadow-none hover:shadow-lg active:scale-95"
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