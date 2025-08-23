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
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center px-8 py-6 lg:px-16">
        <div className="max-w-2xl w-full flex flex-col items-center justify-center">
          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A90E2] mb-3 text-center">
              Understanding You
            </h2>
            <p className="text-lg text-[#4A90E2] text-center font-medium mb-1">
              Are there any specific qualities or areas of expertise you seek
              in Koach?
            </p>
            <p className="text-sm text-gray-500 text-center">
              *chose a maximum of 5
            </p>
          </div>

          {/* Skills Section */}
          <div className="w-full mb-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {skills.map((skill, index) => (
                <button
                  key={index}
                  onClick={() => handleSkillToggle(skill)}
                  disabled={!selectedSkills.includes(skill) && selectedSkills.length >= 5}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    selectedSkills.includes(skill)
                      ? "bg-[#4A90E2] text-white"
                      : selectedSkills.length >= 5
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white border border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white"
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
            <div className="text-center mt-2 text-sm text-gray-500">
              Selected: {selectedSkills.length}/5
            </div>
          </div>

          {/* Traits Section */}
          <div className="w-full mb-8">
            <h3 className="text-xl font-bold text-[#4A90E2] text-center mb-4">
              Your Traits
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {traits.map((trait, index) => (
                <button
                  key={index}
                  onClick={() => handleTraitToggle(trait)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    selectedTraits.includes(trait)
                      ? "bg-[#4A90E2] text-white"
                      : "bg-white border border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white"
                  }`}
                >
                  {trait}
                </button>
              ))}
            </div>
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
                className="w-32 py-3 bg-[#FFD93B] text-[#4A90E2] rounded hover:opacity-90 transition"
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