import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LeftPanel from "../../../components/onBoardingComp/LeftPanel";
import RightPanel from "../../../components/onBoardingComp/RightPanel";
import NavigationButtons from "../../../components/onBoardingComp/NavigationButtons";
import Bio from '../../../assets/signup/Bio.png';

const BioForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    institutionName: '',
    role: '', // Professional / Student
    domain: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const uid = localStorage.getItem("uid");
      const response = await axios.post('http://localhost:5001/api/onboarding/save', {
        step: 3,
        data: {uid,formData}
      });
      alert(response.data.message);
      navigate('/mentor/community1');
    } catch (error) {
      alert(error.response?.data?.message || 'Error submitting data');
    }
  };

  return (
    <div className="flex md:flex-row flex-col w-screen bg-white">
      <LeftPanel imgSrc={Bio} />
      <RightPanel>
        <h1 className="lg:text-[36px] md:text-[40px] text-2xl font-bold text-[#262626] mt-5 md:mb-20 mb-5 text-center">
          Your Bio
        </h1>

        <div className="grid text-[#001F54] grid-cols-1 md:grid-cols-2 gap-6 mx-10 mb-8">
          {/* First Name */}
          <div>
            <label className="font-semibold text-[#001F54] text-left mb-1 block">First name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-1 border border-[#2D488F] rounded-md"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="font-semibold text-left mb-1 block">Last name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full  px-4 py-1 border border-blue-900 rounded-md"
            />
          </div>

          {/* Email */}
          <div>
            <label className="font-semibold text-left mb-1 block">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-1 border border-blue-900 rounded-md"
            />
          </div>

          {/* Location */}
          <div>
            <label className="font-semibold text-left mb-1 block">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-1 border border-blue-900 rounded-md"
            />
          </div>

          {/* Institution Name */}
          <div>
            <label className="font-semibold text-left mb-1 block">Institution Name</label>
            <input
              type="text"
              name="institutionName"
              value={formData.institutionName}
              onChange={handleChange}
              className="w-full px-4 py-1 border border-blue-900 rounded-md"
            />
          </div>

          {/* Professional / Student */}
          <div>
            <label className="font-semibold text-left mb-1 block">Professional / Student</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-1 border border-blue-900 rounded-md"
            >
              <option value="">Select</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Postgraduate">Postgraduate</option>
              <option value="Professional">Professional</option>
            </select>
          </div>

          {/* Domain */}
          <div>
            <label className="font-semibold text-left mb-1 block">Domain</label>
            <select
              name="domain"
              value={formData.domain}
              onChange={handleChange}
              className="w-full px-4 py-1 border border-blue-900 rounded-md"
            >
              <option value="">Select</option>
              <option value="Architecture">Architecture</option>
              <option value="Engineering">Engineering</option>
              <option value="Science">Science</option>
              <option value="Arts">Arts</option>
              <option value="Business">Business</option>
            </select>
          </div>
        </div>

        <NavigationButtons onNext={handleSubmit} />
      </RightPanel>
    </div>
  );
};

export default BioForm;
