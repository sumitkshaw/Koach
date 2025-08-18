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
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center px-8 py-12 lg:px-16">
        <div className="max-w-2xl w-full flex flex-col items-center justify-center">
          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-10">
            <h2 className="text-4xl font-bold text-[#1E4AB8] mb-3 text-center">
              Plans
            </h2>
            <p className="text-lg text-[#1E4AB8] text-center font-medium">
              View the types of plans we offer and select the one that suits you
            </p>
          </div>

          {/* Plans Form */}
          {plans.map((plan, index) => (
            <div key={index} className="w-full mb-6 border rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-[#1E4AB8]">
                  {plan.name}
                </h3>
                {index > 0 && (
                  <button
                    onClick={() => removePlan(index)}
                    className="text-red-500 hover:underline text-sm"
                  >
                    Remove
                  </button>
                )}
              </div>

              {/* Pricing and Sessions */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[#1E4AB8] font-medium mb-2">
                    Pricing
                  </label>
                  <input
                    type="text"
                    value={plan.price}
                    onChange={(e) => handleChange(index, "price", e.target.value)}
                    placeholder="$500"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:border-[#1E4AB8] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[#1E4AB8] font-medium mb-2">
                    Number of sessions
                  </label>
                  <input
                    type="number"
                    value={plan.sessions}
                    onChange={(e) => handleChange(index, "sessions", e.target.value)}
                    placeholder="2"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:border-[#1E4AB8] focus:outline-none"
                  />
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <label className="block text-[#1E4AB8] font-medium mb-2">
                  Deliverables
                </label>
                <textarea
                  value={plan.deliverables}
                  onChange={(e) => handleChange(index, "deliverables", e.target.value)}
                  placeholder="List deliverables here..."
                  className="w-full border border-gray-300 rounded-lg p-3 focus:border-[#1E4AB8] focus:outline-none"
                  rows={3}
                />
              </div>
            </div>
          ))}

          {/* Add Plan Button */}
          <button
            onClick={addPlan}
            className="text-[#1E4AB8] font-medium hover:underline mb-6"
          >
            + Add Plan
          </button>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 w-full">
            <div className="flex gap-8 w-full justify-center">
              <button
                onClick={() => navigate("/certifications")}
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
