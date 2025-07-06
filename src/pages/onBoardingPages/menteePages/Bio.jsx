import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Bio from '../../../assets/signup/Bio.png';

import LeftPanel from "../../../components/onBoardingComp/LeftPanel";
import RightPanel from "../../../components/onBoardingComp/RightPanel";
import NavigationButtons from "../../../components/onBoardingComp/NavigationButtons";


const BioForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        location: '',
        institutionName: '',
        professionalStatus: '',
        domain: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            const uid = localStorage.getItem("uid");
            const response = await axios.post('http://localhost:5001/api/onboarding/save', {
                step: 3,
                data: { uid,...formData }
            });
            alert(response.data.message);
            navigate('/mentee/community'); //bud range
        } catch (error) {
            alert(error.response?.data?.message || 'Error submitting data');
        }
    };

    return (
        <div className="flex md:flex-row relative flex-col w-screen bg-white ">
            <LeftPanel imgSrc={Bio} />
            <RightPanel>
                <h1 className="lg:text-[49px] md:text-[40px]  text-2xl font-bold text-[#262626] mt-5 mb-5 mr-0 text-center">
                    Your Bio
                </h1>

                <div className="md:mt-12 ml-15 mr-15 mb-8 space-y-4 md:text-md text-sm">
                    {['firstName', 'lastName', 'email', 'location', 'institutionName'].map((field) => (
                        <div className="flex items-center" key={field}>
                            <span className="lg:w-49 md:min-w-30 font-bold text-left">
                                {field.charAt(0).toUpperCase() + field.slice(1)}
                            </span>
                            <span className="w-12 text-center font-bold">:</span>
                            <input
                                type="text"
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                className="w-auto px-4 py-2 border border-gray-300 rounded-lg bg-white"
                            />
                        </div>
                    ))}

                    <div className="flex items-center">
                        <span className="lg:w-49 md:min-w-30 font-bold text-left">Role</span>
                        <span className="w-12 text-center font-bold">:</span>
                        <select
                            name="professionalStatus"
                            value={formData.professionalStatus}
                            onChange={handleChange}
                            className="px-4 py-2 border border-gray-300 rounded-lg bg-white"
                        >
                            <option value="">Select</option>
                            <option>Postgraduate</option>
                            <option>Undergraduate</option>
                        </select>
                    </div>

                    <div className="flex items-center">
                        <span className="lg:w-49 md:min-w-30 font-bold text-left">Domain</span>
                        <span className="w-12 text-center font-bold">:</span>
                        <select
                            name="domain"
                            value={formData.domain}
                            onChange={handleChange}
                            className="px-4 py-2 border border-gray-300 rounded-lg bg-white"
                        >
                            <option value="">Select</option>
                            <option>Architecture</option>
                        </select>
                    </div>
                </div>

                <NavigationButtons
          onNext={handleSubmit}
        />  
                
                
            </RightPanel>
        </div>
    );
};

export default BioForm;
