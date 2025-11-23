import { useNavigate } from "react-router-dom";
import Logo from "./../../assets/logowhite.png";
import WelcomeAboardImage from "./../../assets/welcomeAboard.png";

export default function WelcomeAboard() {
  const navigate = useNavigate();

  const handleConfirm = () => {
    console.log("User confirmed welcome aboard");
    navigate("/dashboard_mentor");
  };

  const handleBack = () => {
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
            src={WelcomeAboardImage}
            alt="Welcome Aboard"
            className="w-[90%] max-w-3xl h-auto"
            style={{ minHeight: "500px" }}
          />
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-50 via-white to-indigo-50 lg:bg-white flex flex-col justify-center items-center px-4 sm:px-8 py-8 sm:py-12 lg:px-16 relative overflow-hidden">
        <div className="lg:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FFD93B] rounded-full opacity-10 blur-3xl"></div>
        <div className="lg:hidden absolute top-20 right-10 w-32 h-32 bg-[#1E4AB8] rounded-full opacity-10 blur-2xl"></div>
        <div className="max-w-2xl w-full flex flex-col items-center justify-center h-full relative z-10">
          {/* Header */}
          <div className="flex flex-col items-center justify-center flex-1">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#1E4AB8] via-[#4A90E2] to-[#1E4AB8] bg-clip-text text-transparent mb-4 sm:mb-8 text-center animate-pulse">
              Welcome aboard!
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 lg:text-[#1E4AB8] text-center font-medium mb-8 sm:mb-16">
              You are finally ready to have a look around.
            </p>
            {/* Confirm Button */}
            <button
              onClick={handleConfirm}
              className="lg:w-56 w-full sm:w-48 py-4 sm:py-5 mb-6 sm:mb-8 bg-gradient-to-r from-[#FFD93B] to-[#FFE066] text-[#1E4AB8] rounded-xl lg:rounded font-bold text-lg sm:text-2xl hover:opacity-90 transition-all duration-200 shadow-xl hover:shadow-2xl active:scale-95 transform"
            >
              Confirm
            </button>
            {/* Back Button */}
            <button
              onClick={handleBack}
              className="lg:w-40 w-full sm:w-36 py-3 sm:py-3 border-2 border-[#FFD93B] text-[#1E4AB8] rounded-xl lg:rounded hover:bg-[#FFD93B] transition-all duration-200 text-base sm:text-lg font-semibold shadow-md hover:shadow-lg active:scale-95"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}