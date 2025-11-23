import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logowhite.png";
import Paper from "../../assets/paper.png";

// Certification icons
import ICFIcon from "../../assets/Certifications/ICF.png";
import PCCIcon from "../../assets/Certifications/PCC.png";
import CCEIcon from "../../assets/Certifications/CCE.png";
import NCDAIcon from "../../assets/Certifications/NCDA.png";
import ACAIcon from "../../assets/Certifications/ACA.png";
import GCDFIcon from "../../assets/Certifications/GCDF.png";
import PARWCCIcon from "../../assets/Certifications/PARWCC.png";
import OthersIcon from "../../assets/Certifications/GLOBE.png";

export default function Certifications() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);
  const [otherText, setOtherText] = useState("");

  // Certification options with icons
  const certifications = [
    { label: "ICF", icon: ICFIcon },
    { label: "PCC", icon: PCCIcon },
    { label: "CCE", icon: CCEIcon },
    { label: "NCDA", icon: NCDAIcon },
    { label: "ACA", icon: ACAIcon },
    { label: "GCDF", icon: GCDFIcon },
    { label: "PARWCC", icon: PARWCCIcon },
    { label: "Others", icon: OthersIcon },
  ];

  const handleSelect = (cert) => {
    if (cert.label === "Others") {
      setSelected(prev => 
        prev.includes("Others") 
          ? prev.filter(item => item !== "Others") 
          : [...prev, "Others"]
      );
    } else {
      setSelected(prev => 
        prev.includes(cert.label)
          ? prev.filter(item => item !== cert.label)
          : [...prev, cert.label]
      );
      // Only clear otherText if "Others" is not selected
      if (!selected.includes("Others")) {
        setOtherText("");
      }
    }
  };

  const handleNext = () => {
    let result = [...selected];
    if (selected.includes("Others") && otherText) {
      result = result.filter(item => item !== "Others").concat(otherText);
    }
    console.log("Selected certifications:", result);
    navigate("/planning");
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
            src={Paper}
            alt="Illustration"
            className="w-[90%] max-w-3xl h-auto"
            style={{ minHeight: "500px" }}
          />
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-50 via-white to-indigo-50 lg:bg-white flex flex-col justify-center items-center px-4 sm:px-8 py-8 sm:py-12 lg:px-16 relative overflow-hidden">
        <div className="lg:hidden absolute top-0 right-0 w-32 h-32 bg-[#FFD93B] rounded-full opacity-5 blur-3xl"></div>
        <div className="lg:hidden absolute bottom-0 left-0 w-40 h-40 bg-[#1E4AB8] rounded-full opacity-5 blur-3xl"></div>
        <div className="max-w-2xl w-full flex flex-col items-center justify-center relative z-10">
          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#1E4AB8] to-[#4A90E2] bg-clip-text text-transparent mb-2 sm:mb-3 text-center">
              Active coaching certifications,
              <br /> Credentials, and Education
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 lg:text-[#1E4AB8] text-center font-medium">
              You've worked hard to elevate your career to where it is now.
              Share your credentials and increase interest from new prospective
              clients
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full mb-4 sm:mb-6">
            {certifications.map((cert) => (
              <button
                key={cert.label}
                onClick={() => handleSelect(cert)}
                className={`flex items-center gap-2 sm:gap-3 p-4 sm:p-4 border-2 rounded-2xl lg:rounded-lg text-left transition-all duration-200 transform hover:scale-105 active:scale-95 ${
                  selected.includes(cert.label)
                    ? "border-[#FFD93B] bg-gradient-to-r from-[#FFFBEA] to-[#FFF8DC] shadow-lg lg:shadow-none"
                    : "border-gray-200 lg:border-gray-300 bg-white hover:border-[#1E4AB8] hover:bg-blue-50/50 shadow-md lg:shadow-none"
                }`}
              >
                <div className={`flex-shrink-0 w-8 h-8 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg ${selected.includes(cert.label) ? 'bg-[#FFD93B]/20' : 'bg-gray-100'}`}>
                  <img 
                    src={cert.icon} 
                    alt={cert.label} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="text-xs sm:text-sm lg:text-base font-semibold lg:font-medium text-gray-700 lg:text-[#1E4AB8] flex-1">{cert.label}</span>
              </button>
            ))}
          </div>

          {/* Textbox for "Others" */}
          {selected.includes("Others") && (
            <input
              type="text"
              value={otherText}
              onChange={(e) => setOtherText(e.target.value)}
              placeholder="Please specify"
              className="w-full border-2 border-gray-200 lg:border-gray-300 rounded-xl lg:rounded-lg p-3 sm:p-3 mb-4 sm:mb-6 text-sm sm:text-base focus:border-[#1E4AB8] focus:outline-none focus:ring-2 focus:ring-[#FFD93B] bg-white shadow-md lg:shadow-none"
            />
          )}

          {/* Buttons */}
          <div className="flex justify-center mt-6 sm:mt-8 w-full">
            <div className="flex gap-3 sm:gap-8 w-full justify-center">
              <button
                onClick={() => navigate("/mentor-expert")}
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