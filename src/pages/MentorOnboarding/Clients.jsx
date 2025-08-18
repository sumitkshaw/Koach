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
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center px-8 py-12 lg:px-16">
        <div className="max-w-2xl w-full flex flex-col items-center justify-center">
          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-10">
            <h2 className="text-4xl font-bold text-[#1E4AB8] mb-3 text-center">
              Number of Clients
            </h2>
            <p className="text-lg text-[#1E4AB8] text-center font-medium">
              How many new clients are you able to comfortably manage at once?
            </p>
          </div>

          {/* Number Selector Header */}
          <div className="w-full flex flex-col items-start mb-2">
            <span className="text-[#1E4AB8] font-semibold text-lg mb-1">
              Number of clients
            </span>
          </div>

          {/* Number Selector */}
          <div className="flex items-center border rounded-lg w-[28rem] justify-between px-4 py-2 mb-12 shadow-sm self-start">
            <span className="text-xl font-semibold text-[#1E4AB8]">
              {clients}
            </span>
            <div className="flex flex-col">
              <button onClick={increase}>
                <ChevronUp className="w-4 h-4 text-[#1E4AB8]" />
              </button>
              <button onClick={decrease}>
                <ChevronDown className="w-4 h-4 text-[#1E4AB8]" />
              </button>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 w-full">
            <div className="flex gap-8 w-full justify-center">
              <button
                onClick={() => navigate("/planning")}
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
