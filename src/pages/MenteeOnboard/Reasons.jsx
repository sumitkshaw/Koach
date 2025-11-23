import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logowhite.png";
import Goal from "../../assets/Goal.png";

import Option1Icon from "../../assets/GoalMentee/option1.png";
import Option2Icon from "../../assets/GoalMentee/option2.png";
import Option3Icon from "../../assets/GoalMentee/option3.png";
import Option4Icon from "../../assets/GoalMentee/option4.png";
import Option5Icon from "../../assets/GoalMentee/option5.png";
import Option6Icon from "../../assets/GoalMentee/option6.png";
import Option7Icon from "../../assets/GoalMentee/option7.png";

export default function GoalsMentee() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);
  const [otherText, setOtherText] = useState("");

  const goals = [
    { 
      label: "Develop Skills", 
      icon: Option1Icon 
    },
    { 
      label: "Achieve Career Goals", 
      icon: Option2Icon 
    },
    { 
      label: "Gain clarity on career direction and explore transitions", 
      icon: Option3Icon 
    },
    { 
      label: "Enhance personal branding and marketability", 
      icon: Option4Icon 
    },
    { 
      label: "Prepare for job interviews and salary negotiations", 
      icon: Option5Icon 
    },
    { 
      label: "Overcome career related obstacles and set backs", 
      icon: Option6Icon 
    },
    { 
      label: "Other", 
      icon: Option7Icon 
    },
  ];

  const handleSelect = (goal) => {
    if (goal.label === "Other") {
      setSelected(prev => 
        prev.includes("Other")
          ? prev.filter(item => item !== "Other")
          : [...prev, "Other"]
      );
    } else {
      setSelected(prev => 
        prev.includes(goal.label)
          ? prev.filter(item => item !== goal.label)
          : [...prev, goal.label]
      );
      if (!selected.includes("Other")) {
        setOtherText("");
      }
    }
  };

  const handleNext = () => {
    let result = [...selected];
    if (selected.includes("Other") && otherText) {
      result = result.filter(item => item !== "Other").concat(otherText);
    }
    console.log("Selected goals:", result);
    navigate("/welcome-user");
  };

  const handleBack = () => {
    navigate("/qualities");
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
            src={Goal}
            alt="Goal Illustration"
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
          <div className="flex flex-col items-center justify-center mb-6 sm:mb-10">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#4A90E2] to-[#1E4AB8] bg-clip-text text-transparent mb-2 sm:mb-3 text-center">
              Your Goal
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 lg:text-[#4A90E2] text-center font-medium">
              What are your main reasons for joining Koach?
            </p>
          </div>

          {/* Goals List */}
          <div className="flex flex-col gap-3 sm:gap-3 w-full mb-6 sm:mb-8">
            {goals.map((goal, index) => (
              <button
                key={index}
                onClick={() => handleSelect(goal)}
                className={`flex items-center gap-3 sm:gap-3 p-4 sm:p-4 border-2 rounded-2xl lg:rounded-full text-left transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] ${
                  selected.includes(goal.label)
                    ? "border-[#FFD93B] bg-gradient-to-r from-[#FFFBEA] to-[#FFF8DC] shadow-lg lg:shadow-none lg:bg-[#FFFBEA]"
                    : "border-gray-200 lg:border-gray-300 bg-white hover:border-[#4A90E2] hover:bg-blue-50/50 shadow-md lg:shadow-none"
                }`}
              >
                <div className={`flex-shrink-0 w-8 h-8 sm:w-6 sm:h-6 flex items-center justify-center rounded-lg ${selected.includes(goal.label) ? 'bg-[#FFD93B]/20' : 'bg-gray-100'}`}>
                  <img 
                    src={goal.icon} 
                    alt={goal.label} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className={`font-semibold lg:font-medium flex-1 text-sm sm:text-sm ${selected.includes(goal.label) ? 'text-[#1E4AB8]' : 'text-gray-700 lg:text-[#4A90E2]'}`}>
                  {goal.label === "Other" ? "Other ________" : goal.label}
                </span>
              </button>
            ))}
          </div>

          {/* Textbox for "Other" */}
          {selected.includes("Other") && (
            <input
              type="text"
              value={otherText}
              onChange={(e) => setOtherText(e.target.value)}
              placeholder="Please specify"
              className="w-full border-2 border-gray-200 lg:border-gray-300 rounded-xl lg:rounded-lg p-3 sm:p-3 mb-4 sm:mb-6 text-sm sm:text-base focus:border-[#4A90E2] focus:outline-none focus:ring-2 focus:ring-[#FFD93B] bg-white shadow-md lg:shadow-none"
            />
          )}

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
                disabled={selected.length === 0}
                className={`lg:w-32 w-full sm:w-28 py-3 sm:py-3 text-sm sm:text-base rounded-xl lg:rounded transition-all duration-200 font-semibold shadow-md lg:shadow-none hover:shadow-lg active:scale-95 ${
                  selected.length > 0
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