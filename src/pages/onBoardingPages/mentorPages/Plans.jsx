import React, { useState } from 'react';
import Bio from '../../../assets/signup/Bio.png';
import LeftPanel from "../../../components/onBoardingComp/LeftPanel";
import RightPanel from "../../../components/onBoardingComp/LeftPanel";
import NavigationButtons from "../../../components/onBoardingComp/NavigationButtons";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Plans = () => {
  const [plan, setPlan] = useState({
    pricing: '',
    sessions: '',
    deliverables: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlan((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const parsedPlan = {
        pricing: Number(plan.pricing),
        sessions: Number(plan.sessions),
        deliverables: Number(plan.deliverables)
      };

      const response = await axios.post('http://localhost:5001/api/onboarding/save', {
        step: 7,
        data: parsedPlan
      });

      console.log('Plan saved:', response.data);
      alert('Plan saved successfully!');
      navigate('/mentor/Community4'); // r u expert?
    } catch (error) {
      console.error('Error saving plan:', error);
      alert('Failed to save plan. Check backend and network.');
    }
  };

  return (
    <div className='flex h-screen w-screen overflow-hidden md:flex-row flex-col bg-white'>
      <LeftPanel imgSrc={Bio} />

      <RightPanel>
        <h1 className="md:text-[49px] text-3xl font-bold text-[#262626] lg:mt-[60px] md:mt-50 md:pb-10 my-5 text-center">
          Plans
        </h1>

        <div className='md:w-full w-screen h-full flex flex-col items-center'>
          <div className='w-full text-[#050A30] flex md:flex-row flex-col justify-center gap-5 lg:ml-10 md:ml-0 sm:ml-10'>
            <h2 className='md:w-1/5 w-full text-left text-[18px] font-bold text-[#050A30]'>
              Starter Plans
            </h2>

            <div className='md:w-2/3 w-auto flex flex-col items-start'>
              <div className='text-sm font-medium text-[#050A30] mb-1'>Pricing</div>
              <input
                type='number'
                name='pricing'
                value={plan.pricing}
                onChange={handleChange}
                className='md:w-8/9 w-4/5 border border-[#2D488F] p-2 mb-3 rounded-lg'
              />

              <div className='text-sm font-medium text-[#050A30] mb-1'>Number of sessions</div>
              <input
                type='number'
                name='sessions'
                value={plan.sessions}
                onChange={handleChange}
                className='md:w-8/9 w-4/5 border border-[#2D488F] p-2 mb-3 rounded-lg'
              />

              <div className='text-sm font-medium text-[#050A30] mb-1'>Deliverables</div>
              <input
                type='number'
                name='deliverables'
                value={plan.deliverables}
                onChange={handleChange}
                className='md:w-8/9 w-4/5 border border-[#2D488F] p-2 mb-3 rounded-lg'
              />
            </div>
          </div>

          <div className='w-full pl-4 mt-2'>
            <div className='w-1/3 text-[#2A4FB0] text-sm font-semibold cursor-pointer text-center'>
              + Add a plan
            </div>
          </div>

          <NavigationButtons
            showBack={false}
            onNext={handleSubmit}
          />
        </div>
      </RightPanel>
    </div>
  );
};

export default Plans;
