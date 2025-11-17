import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logowhite.png";
import GearsImage from "../../assets/Gear.png";

export default function Sessions() {
  const navigate = useNavigate();
  const [numberOfSessions, setNumberOfSessions] = useState("1");

  const handleNext = () => {
    const sessionData = {
      numberOfSessions: numberOfSessions
    };
    console.log("Selected session configuration:", sessionData);
    navigate("/qualities");
  };

  const handleBack = () => {
    navigate("/timeline");
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
            src={GearsImage}
            alt="Gears Illustration"
            className="w-[90%] max-w-3xl h-auto"
            style={{ minHeight: "500px" }}
          />
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center px-8 py-12 lg:px-16">
        <div className="max-w-2xl w-full flex flex-col items-center justify-center">
          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A90E2] mb-4 text-center">
              About Sessions
            </h2>
            <p className="text-lg text-[#4A90E2] text-center font-medium">
              How many sessions would you like to book with your coach?
            </p>
          </div>

          {/* Session Configuration */}
          <div className="w-full max-w-md space-y-6">
            {/* Number of Sessions */}
            <div>
              <label className="block text-[#4A90E2] font-medium mb-2">
                Number of sessions
              </label>
              <div className="relative">
                <select
                  value={numberOfSessions}
                  onChange={(e) => setNumberOfSessions(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white text-[#4A90E2] font-medium focus:border-[#4A90E2] focus:outline-none appearance-none pr-8"
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Session Duration Info */}
            <div className="p-4 bg-blue-50 rounded-lg text-center">
              <p className="text-[#4A90E2] font-medium">
                Each session will be 60 minutes long
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center mt-12 w-full">
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