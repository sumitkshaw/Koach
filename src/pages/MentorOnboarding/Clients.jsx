import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logowhite.png";
import Gear from "../../assets/Gear.png";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function Clients() {
  const navigate = useNavigate();
  const [clients, setClients] = useState(1);

  const increase = () => setClients(clients + 1);
  const decrease = () => {
    if (clients > 1) setClients(clients - 1);
  };

  const handleNext = () => {
    console.log("Number of clients saved:", clients);
    navigate("/goals");
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
            src={Gear}
            alt="Gear Illustration"
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
              Number of Clients
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 lg:text-[#1E4AB8] text-center font-medium">
              How many new clients are you able to comfortably manage at once?
            </p>
          </div>

          {/* Number Selector Header */}
          <div className="w-full flex flex-col items-start mb-3">
            <span className="text-sm sm:text-base lg:text-lg text-[#1E4AB8] font-bold mb-1">
              Number of clients
            </span>
          </div>

          {/* Number Selector */}
          <div className="flex items-center border-2 border-gray-200 lg:border-gray-300 rounded-2xl lg:rounded-lg w-full sm:w-[28rem] justify-between px-4 sm:px-4 py-3 mb-8 sm:mb-12 shadow-lg lg:shadow-sm self-start bg-white">
            <span className="text-2xl sm:text-xl font-bold text-[#1E4AB8]">
              {clients}
            </span>
            <div className="flex flex-col gap-1">
              <button onClick={increase} className="hover:bg-blue-50 rounded p-1 transition-all">
                <ChevronUp className="w-5 h-5 text-[#1E4AB8]" />
              </button>
              <button onClick={decrease} className="hover:bg-blue-50 rounded p-1 transition-all">
                <ChevronDown className="w-5 h-5 text-[#1E4AB8]" />
              </button>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-6 sm:mt-8 w-full">
            <div className="flex gap-3 sm:gap-8 w-full justify-center">
              <button
                onClick={() => navigate("/planning")}
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
