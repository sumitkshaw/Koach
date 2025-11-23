import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logowhite.png";
import BrazucaPlanning from "../../assets/brazuca_planning.png";

export default function BioStep() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    institution: "",
    role: "",
    domain: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => {
    //store formData in context or backend here
    navigate("/mentor-experience");
  };

  return (
    <div className="min-h-screen flex font-proxima">
      {/* Left Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#1E4AB8] text-white flex-col items-center justify-center p-8 relative">
        <img src={Logo} alt="Koach Logo" className="h-10 mb-8 absolute top-8 left-8" />
        <div className="w-full flex flex-col justify-center items-center h-full">
          <img
            src={BrazucaPlanning}
            alt="Illustration"
            className="w-[90%] max-w-3xl h-auto"
            style={{ minHeight: "500px" }}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 bg-gradient-to-br from-blue-50 via-white to-indigo-50 lg:bg-white px-4 sm:px-6 lg:px-12 py-8 sm:py-12 relative overflow-hidden">
        <div className="lg:hidden absolute top-4 left-4 w-20 h-20 bg-[#FFD93B] rounded-full opacity-10 blur-2xl"></div>
        <div className="lg:hidden absolute top-8 right-8 w-16 h-16 bg-[#1E4AB8] rounded-full opacity-10 blur-xl"></div>
        <div className="w-full max-w-xl relative z-10">
          {/* Heading */}
          <div className="flex flex-col items-center justify-center mb-6 sm:mb-8 lg:mb-8">
            <h1 className="text-3xl sm:text-3xl lg:text-3xl font-bold bg-gradient-to-r from-[#1E4AB8] to-[#4A90E2] bg-clip-text text-transparent mb-2 text-center">
              Your Bio
            </h1>
            <p className="text-sm sm:text-base text-gray-600 lg:text-[#1E4AB8] text-center">
              Help us get to know you better
            </p>
          </div>

          {/* Form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4 lg:gap-4">
            <div className="flex flex-col">
              <label className="text-[#1E4AB8] mb-2 font-semibold text-sm lg:font-medium">First name</label>
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="border-2 border-gray-200 lg:border-[#1E4AB8] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD93B] focus:border-transparent bg-white shadow-sm lg:shadow-none transition-all duration-200"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[#1E4AB8] mb-2 font-semibold text-sm lg:font-medium">Last name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="border-2 border-gray-200 lg:border-[#1E4AB8] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD93B] focus:border-transparent bg-white shadow-sm lg:shadow-none transition-all duration-200"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[#1E4AB8] mb-2 font-semibold text-sm lg:font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border-2 border-gray-200 lg:border-[#1E4AB8] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD93B] focus:border-transparent bg-white shadow-sm lg:shadow-none transition-all duration-200"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[#1E4AB8] mb-2 font-semibold text-sm lg:font-medium">Location</label>
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                className="border-2 border-gray-200 lg:border-[#1E4AB8] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD93B] focus:border-transparent bg-white shadow-sm lg:shadow-none transition-all duration-200"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[#1E4AB8] mb-2 font-semibold text-sm lg:font-medium">Institution Name</label>
              <input
                type="text"
                name="institution"
                placeholder="Institution Name"
                value={formData.institution}
                onChange={handleChange}
                className="border-2 border-gray-200 lg:border-[#1E4AB8] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD93B] focus:border-transparent bg-white shadow-sm lg:shadow-none transition-all duration-200"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[#1E4AB8] mb-2 font-semibold text-sm lg:font-medium">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="border-2 border-gray-200 lg:border-[#1E4AB8] rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#FFD93B] focus:border-transparent shadow-sm lg:shadow-none transition-all duration-200"
              >
                <option value="">Professional / Student</option>
                <option value="student">Student</option>
                <option value="postgraduate">Postgraduate</option>
                <option value="professional">Professional</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-[#1E4AB8] mb-2 font-semibold text-sm lg:font-medium">Domain</label>
              <select
                name="domain"
                value={formData.domain}
                onChange={handleChange}
                className="border-2 border-gray-200 lg:border-[#1E4AB8] rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#FFD93B] focus:border-transparent shadow-sm lg:shadow-none transition-all duration-200"
              >
                <option value="">Domain</option>
                <option value="architecture">Architecture</option>
                <option value="engineering">Engineering</option>
                <option value="design">Design</option>
              </select>
            </div>
            </div>
          {/* Buttons */}
          <div className="flex justify-center mt-8 sm:mt-10 w-full relative z-10">
            <div className="flex gap-3 sm:gap-8 w-full justify-center">
              <button
                onClick={() => navigate("/welcome-step#")}
                className="lg:w-40 w-full sm:w-32 py-3 sm:py-3 text-sm sm:text-base border-2 border-[#FFD93B] text-[#1E4AB8] rounded-xl lg:rounded hover:bg-[#FFD93B] transition-all duration-200 font-semibold shadow-md lg:shadow-none hover:shadow-lg active:scale-95"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="lg:w-40 w-full sm:w-32 py-3 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-[#FFD93B] to-[#FFE066] text-[#1E4AB8] rounded-xl lg:rounded hover:opacity-90 transition-all duration-200 font-semibold shadow-md lg:shadow-none hover:shadow-lg active:scale-95"
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
