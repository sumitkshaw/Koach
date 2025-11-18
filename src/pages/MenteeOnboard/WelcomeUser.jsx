import { useNavigate } from "react-router-dom";
import Logo from "./../../assets/logowhite.png";
import WelcomeAboardImage from "./../../assets/welcomeAboard.png";

export default function WelcomeUser() {
  const navigate = useNavigate();

  const handleConfirm = () => {
    console.log("User confirmed welcome aboard");
    navigate("/dashboard");
  };

  const handleBack = () => {
    navigate("/reasons");
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
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center px-8 py-12 lg:px-16">
        <div className="max-w-2xl w-full flex flex-col items-center justify-center h-full">
          {/* Header */}
          <div className="flex flex-col items-center justify-center flex-1">
            <h2 className="text-5xl lg:text-6xl font-bold text-[#1E4AB8] mb-8 text-center">
              Welcome aboard!
            </h2>
            <p className="text-3xl text-[#1E4AB8] text-center font-medium mb-16">
              You are finally ready to have a look around.
            </p>
            {/* Confirm Button */}
            <button
              onClick={handleConfirm}
              className="w-56 py-5 mb-8 bg-[#FFD93B] text-[#1E4AB8] rounded font-semibold text-2xl hover:opacity-90 transition"
            >
              Confirm
            </button>
            {/* Back Button */}
            <button
              onClick={handleBack}
              className="w-40 py-3 border border-[#FFD93B] text-[#1E4AB8] rounded hover:bg-[#FFD93B] transition text-lg"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}