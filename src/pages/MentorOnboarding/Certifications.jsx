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
  const [selected, setSelected] = useState("");
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
    setSelected(cert.label);
    if (cert.label !== "Others") setOtherText("");
  };

  const handleNext = () => {
    const result = selected === "Others" ? otherText : selected;
    console.log("Selected certification:", result);
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
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center px-8 py-12 lg:px-16">
        <div className="max-w-2xl w-full flex flex-col items-center justify-center">
          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1E4AB8] mb-3 text-center">
              Active coaching certifications,
              <br /> Credentials, and Education
            </h2>
            <p className="text-lg text-[#1E4AB8] text-center font-medium">
              You've worked hard to elevate your career to where it is now.
              Share your credentials and increase interest from new prospective
              clients
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-2 gap-4 w-full mb-6">
            {certifications.map((cert) => (
              <button
                key={cert.label}
                onClick={() => handleSelect(cert)}
                className={`flex items-center gap-3 p-4 border rounded-lg text-left transition ${
                  selected === cert.label
                    ? "border-[#FFD93B] bg-[#FFFBEA]"
                    : "border-gray-300 bg-white"
                }`}
              >
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                  <img 
                    src={cert.icon} 
                    alt={cert.label} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="text-[#1E4AB8] font-medium flex-1">{cert.label}</span>
              </button>
            ))}
          </div>

          {/* Textbox for "Others" */}
          {selected === "Others" && (
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
                onClick={() => navigate("/mentor-expert")}
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