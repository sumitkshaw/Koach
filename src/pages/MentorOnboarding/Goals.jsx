import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logowhite.png";
import Goal from "../../assets/Goal.png";

import Option1Icon from "../../assets/Goals/option1.png";
import Option2Icon from "../../assets/Goals/option2.png";
import Option3Icon from "../../assets/Goals/option3.png";
import Option4Icon from "../../assets/Goals/option4.png";
import Option5Icon from "../../assets/Goals/option5.png";
import Option6Icon from "../../assets/Goals/option6.png";
import Option7Icon from "../../assets/Goals/option7.png";
import Option8Icon from "../../assets/Goals/option8.png";

export default function Goals() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);
  const [otherText, setOtherText] = useState("");

  const goals = [
    { 
      label: "Empower clients to achieve their goals", 
      icon: Option1Icon 
    },
    { 
      label: "Facilitate meaningful client transformations", 
      icon: Option2Icon 
    },
    { 
      label: "Expand my coaching impact and my overall book of business", 
      icon: Option3Icon 
    },
    { 
      label: "Streamline my coaching management workflow", 
      icon: Option4Icon 
    },
    { 
      label: "Enhance client communication", 
      icon: Option5Icon 
    },
    { 
      label: "Retain or increase client engagement in between sessions", 
      icon: Option6Icon 
    },
    { 
      label: "Access resource and support for my coaching practice", 
      icon: Option7Icon 
    },
    { 
      label: "Other", 
      icon: Option8Icon 
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
      // Only clear otherText if "Other" is not selected
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
    navigate("/welcome-aboard");
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
            alt="Illustration"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1E4AB8] mb-3 text-center">
              Your Goal
            </h2>
            <p className="text-lg text-[#1E4AB8] text-center font-medium">
              What are your main reasons for joining Koach?
            </p>
          </div>

          {/* Goals Grid */}
          <div className="flex flex-col gap-4 w-full mb-6">
            {goals.map((goal) => (
              <button
                key={goal.label}
                onClick={() => handleSelect(goal)}
                className={`flex items-center gap-3 p-4 border rounded-lg text-left transition ${
                  selected.includes(goal.label)
                    ? "border-[#FFD93B] bg-[#FFFBEA]"
                    : "border-gray-300 bg-white hover:bg-gray-50"
                }`}
              >
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                  <img 
                    src={goal.icon} 
                    alt={goal.label} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="text-[#1E4AB8] font-medium flex-1">{goal.label}</span>
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
              className="w-full border border-gray-300 rounded-lg p-3 mb-6 focus:border-[#1E4AB8] focus:outline-none"
            />
          )}

          {/* Buttons */}
          <div className="flex justify-center mt-8 w-full">
            <div className="flex gap-8 w-full justify-center">
              <button
                onClick={() => navigate("/clients")}
                className="w-44 py-3 border border-[#FFD93B] text-[#1E4AB8] rounded hover:bg-[#FFD93B] transition"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="w-44 py-3 bg-[#FFD93B] text-[#1E4AB8] rounded hover:opacity-90 transition"
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