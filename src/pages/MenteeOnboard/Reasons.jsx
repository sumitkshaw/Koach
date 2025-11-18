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
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center px-8 py-12 lg:px-16">
        <div className="max-w-2xl w-full flex flex-col items-center justify-center">
          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A90E2] mb-3 text-center">
              Your Goal
            </h2>
            <p className="text-lg text-[#4A90E2] text-center font-medium">
              What are your main reasons for joining Koach?
            </p>
          </div>

          {/* Goals List */}
          <div className="flex flex-col gap-3 w-full mb-8">
            {goals.map((goal, index) => (
              <button
                key={index}
                onClick={() => handleSelect(goal)}
                className={`flex items-center gap-3 p-4 border rounded-full text-left transition ${
                  selected.includes(goal.label)
                    ? "border-[#FFD93B] bg-[#FFFBEA]"
                    : "border-gray-300 bg-white hover:border-gray-400"
                }`}
              >
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  <img 
                    src={goal.icon} 
                    alt={goal.label} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="text-[#4A90E2] font-medium flex-1 text-sm">
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
              className="w-full border border-gray-300 rounded-lg p-3 mb-6 focus:border-[#4A90E2] focus:outline-none"
            />
          )}

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
                disabled={selected.length === 0}
                className={`w-32 py-3 rounded transition ${
                  selected.length > 0
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