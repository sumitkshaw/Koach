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
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 bg-white px-6 lg:px-12">
        <div className="w-full max-w-xl">
          {/* Heading */}
          <div className="flex flex-col items-center justify-center mb-8">
            <h1 className="text-3xl font-bold text-[#1E4AB8] mb-2 text-center">
              Your Bio
            </h1>
            <p className="text-[#1E4AB8] text-center">
              Help us get to know you better
            </p>
          </div>

          {/* Form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-[#1E4AB8] mb-1 font-medium">First name</label>
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="border border-[#1E4AB8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFD93B]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[#1E4AB8] mb-1 font-medium">Last name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="border border-[#1E4AB8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFD93B]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[#1E4AB8] mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border border-[#1E4AB8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFD93B]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[#1E4AB8] mb-1 font-medium">Location</label>
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                className="border border-[#1E4AB8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFD93B]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[#1E4AB8] mb-1 font-medium">Institution Name</label>
              <input
                type="text"
                name="institution"
                placeholder="Institution Name"
                value={formData.institution}
                onChange={handleChange}
                className="border border-[#1E4AB8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFD93B]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[#1E4AB8] mb-1 font-medium">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="border border-[#1E4AB8] rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#FFD93B]"
              >
                <option value="">Professional / Student</option>
                <option value="student">Student</option>
                <option value="postgraduate">Postgraduate</option>
                <option value="professional">Professional</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-[#1E4AB8] mb-1 font-medium">Domain</label>
              <select
                name="domain"
                value={formData.domain}
                onChange={handleChange}
                className="border border-[#1E4AB8] rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#FFD93B]"
              >
                <option value="">Domain</option>
                <option value="architecture">Architecture</option>
                <option value="engineering">Engineering</option>
                <option value="design">Design</option>
              </select>
            </div>
            </div>
          {/* Buttons */}
          <div className="flex justify-center mt-10 w-full">
            <div className="flex gap-8 w-full justify-center">
              <button
                onClick={() => navigate("/welcome-step#")}
                className="w-40 py-3 border border-[#FFD93B] text-[#1E4AB8] rounded hover:bg-[#FFD93B] transition"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="w-40 py-3 bg-[#FFD93B] text-[#1E4AB8] rounded hover:opacity-90 transition"
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
