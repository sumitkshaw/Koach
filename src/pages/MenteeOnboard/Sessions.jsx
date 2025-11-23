import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logowhite.png";
import GearsImage from "../../assets/Gear.png";

export default function Sessions() {
  const navigate = useNavigate();
  const [numberOfSessions, setNumberOfSessions] = useState("1");
  const [frequency, setFrequency] = useState("weekly");

  const handleNext = () => {
    const sessionData = {
      numberOfSessions: numberOfSessions,
      frequency: frequency
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
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-50 via-white to-indigo-50 lg:bg-white flex flex-col justify-center items-center px-4 sm:px-8 py-8 sm:py-12 lg:px-16 relative overflow-hidden">
        <div className="lg:hidden absolute top-0 right-0 w-32 h-32 bg-[#FFD93B] rounded-full opacity-5 blur-3xl"></div>
        <div className="lg:hidden absolute bottom-0 left-0 w-40 h-40 bg-[#4A90E2] rounded-full opacity-5 blur-3xl"></div>
        <div className="max-w-2xl w-full flex flex-col items-center justify-center relative z-10">
          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#4A90E2] to-[#1E4AB8] bg-clip-text text-transparent mb-3 sm:mb-4 text-center">
              About Sessions
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 lg:text-[#4A90E2] text-center font-medium">
              How many sessions would you like to book with your coach?
            </p>
          </div>

          {/* Session Configuration */}
          <div className="w-full max-w-md space-y-5 sm:space-y-6">
            {/* Number of Sessions */}
            <div>
              <label className="block text-[#4A90E2] font-semibold mb-3 text-sm lg:font-medium">
                Number of sessions
              </label>
              <div className="relative">
                <select
                  value={numberOfSessions}
                  onChange={(e) => setNumberOfSessions(e.target.value)}
                  className="w-full p-4 border-2 border-gray-200 lg:border-gray-300 rounded-xl lg:rounded-lg bg-white text-[#4A90E2] font-semibold focus:border-[#4A90E2] focus:outline-none focus:ring-2 focus:ring-[#FFD93B] appearance-none pr-8 shadow-md lg:shadow-none transition-all duration-200"
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

            {/* Frequency Selection */}
            <div className="mt-2">
              <div className="flex justify-center">
                <div className="inline-flex items-center bg-gray-100 lg:bg-gray-100 rounded-full p-1 shadow-md lg:shadow-none">
                  <button
                    type="button"
                    className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${frequency === 'weekly' ? 'bg-gradient-to-r from-[#4A90E2] to-[#1E4AB8] text-white shadow-lg' : 'text-gray-600 hover:text-[#4A90E2]'}`}
                    onClick={() => setFrequency('weekly')}
                  >
                    Weekly
                  </button>
                  <button
                    type="button"
                    className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${frequency === 'monthly' ? 'bg-gradient-to-r from-[#4A90E2] to-[#1E4AB8] text-white shadow-lg' : 'text-gray-600 hover:text-[#4A90E2]'}`}
                    onClick={() => setFrequency('monthly')}
                  >
                    Monthly
                  </button>
                </div>
              </div>
              <p className="mt-4 text-center text-sm font-medium text-gray-600 bg-blue-50 lg:bg-transparent rounded-lg py-2 lg:py-0">
                {frequency === 'weekly' 
                  ? 'Sessions will be scheduled weekly' 
                  : 'Sessions will be scheduled monthly'}
              </p>
            </div>

            {/* Session Duration Info */}
            <div className="p-4 sm:p-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 lg:from-blue-50 lg:to-blue-100 rounded-2xl lg:rounded-xl text-center border-2 border-blue-200 lg:border-blue-100 shadow-lg lg:shadow-none">
              <p className="text-[#1E4AB8] font-semibold text-sm sm:text-base">
                <span className="block text-lg sm:text-lg font-bold mb-2">Session Details</span>
                <span className="block mb-1">• {numberOfSessions} {numberOfSessions === '1' ? 'session' : 'sessions'}</span>
                <span className="block">• {frequency === 'weekly' ? 'Weekly schedule' : 'Monthly schedule'}</span>
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center mt-10 sm:mt-12 w-full">
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