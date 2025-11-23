import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logowhite.png";
import PlanningGirl from "../../assets/PlanningGirl.png";

export default function Plans() {
  const navigate = useNavigate();
  const [plans, setPlans] = useState([
    { name: "Starter Plan", price: "$500", sessions: "2", deliverables: "" },
  ]);

  const handleChange = (index, field, value) => {
    const updatedPlans = [...plans];
    updatedPlans[index][field] = value;
    setPlans(updatedPlans);
  };

  const addPlan = () => {
    setPlans([
      ...plans,
      { name: `Plan ${plans.length + 1}`, price: "", sessions: "", deliverables: "" },
    ]);
  };

  const removePlan = (index) => {
    const updatedPlans = plans.filter((_, i) => i !== index);
    setPlans(updatedPlans);
  };

  const handleNext = () => {
    console.log("Plans saved:", plans);
    navigate("/clients");
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
            src={PlanningGirl}
            alt="Planning Illustration"
            className="w-[90%] max-w-2xl h-auto"
            style={{ minHeight: "500px" }}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-50 via-white to-indigo-50 lg:bg-white flex flex-col justify-center items-center px-4 sm:px-8 py-8 sm:py-12 lg:px-16 relative overflow-hidden">
        <div className="lg:hidden absolute top-0 right-0 w-32 h-32 bg-[#FFD93B] rounded-full opacity-5 blur-3xl"></div>
        <div className="lg:hidden absolute bottom-0 left-0 w-40 h-40 bg-[#1E4AB8] rounded-full opacity-5 blur-3xl"></div>
        <div className="max-w-2xl w-full flex flex-col items-center justify-center relative z-10">
          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-6 sm:mb-10">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#1E4AB8] to-[#4A90E2] bg-clip-text text-transparent mb-2 sm:mb-3 text-center">
              Plans
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 lg:text-[#1E4AB8] text-center font-medium">
              View the types of plans we offer and select the one that suits you
            </p>
          </div>

          {/* Plans Form */}
          {plans.map((plan, index) => (
            <div key={index} className="w-full mb-4 sm:mb-6 border-2 border-gray-200 lg:border-gray-300 rounded-2xl lg:rounded-lg p-4 sm:p-4 shadow-lg lg:shadow-sm bg-white">
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-[#1E4AB8]">
                  {plan.name}
                </h3>
                {index > 0 && (
                  <button
                    onClick={() => removePlan(index)}
                    className="text-red-500 hover:underline text-xs sm:text-sm"
                  >
                    Remove
                  </button>
                )}
              </div>

              {/* Pricing and Sessions */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div>
                  <label className="block text-[#1E4AB8] font-medium mb-2">
                    Pricing
                  </label>
                  <input
                    type="text"
                    value={plan.price}
                    onChange={(e) => handleChange(index, "price", e.target.value)}
                    placeholder="$500"
                    className="w-full border-2 border-gray-200 lg:border-gray-300 rounded-xl lg:rounded-lg p-3 sm:p-3 text-sm sm:text-base focus:border-[#1E4AB8] focus:outline-none focus:ring-2 focus:ring-[#FFD93B] bg-white shadow-sm lg:shadow-none transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm text-[#1E4AB8] font-semibold lg:font-medium mb-2 sm:mb-2">
                    Number of sessions
                  </label>
                  <input
                    type="number"
                    value={plan.sessions}
                    onChange={(e) => handleChange(index, "sessions", e.target.value)}
                    placeholder="2"
                    className="w-full border-2 border-gray-200 lg:border-gray-300 rounded-xl lg:rounded-lg p-3 sm:p-3 text-sm sm:text-base focus:border-[#1E4AB8] focus:outline-none focus:ring-2 focus:ring-[#FFD93B] bg-white shadow-sm lg:shadow-none transition-all duration-200"
                  />
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <label className="block text-xs sm:text-sm text-[#1E4AB8] font-semibold lg:font-medium mb-2 sm:mb-2">
                  Deliverables
                </label>
                <textarea
                  value={plan.deliverables}
                  onChange={(e) => handleChange(index, "deliverables", e.target.value)}
                  placeholder="List deliverables here..."
                  className="w-full border-2 border-gray-200 lg:border-gray-300 rounded-xl lg:rounded-lg p-3 sm:p-3 text-sm sm:text-base focus:border-[#1E4AB8] focus:outline-none focus:ring-2 focus:ring-[#FFD93B] bg-white shadow-sm lg:shadow-none transition-all duration-200"
                  rows={3}
                />
              </div>
            </div>
          ))}

          {/* Add Plan Button */}
          <button
            onClick={addPlan}
            className="text-sm sm:text-base text-[#1E4AB8] font-bold hover:underline mb-4 sm:mb-6 bg-blue-50 lg:bg-transparent px-4 py-2 rounded-xl lg:rounded-none shadow-md lg:shadow-none"
          >
            + Add Plan
          </button>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-6 sm:mt-8 w-full">
            <div className="flex gap-3 sm:gap-8 w-full justify-center">
              <button
                onClick={() => navigate("/certifications")}
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
