import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MC4 from '../../../assets/signup/MC4.png';
import { useNavigate } from 'react-router-dom';

import LeftPanel from "../../../components/onBoardingComp/LeftPanel";
import RightPanel from "../../../components/onBoardingComp/RightPanel";
import { FaCheck } from 'react-icons/fa'; // ✅ icon import

export default function MentorCommunity4() {
  const navigate = useNavigate();
  const [isExpert, setIsExpert] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/onboarding/data?step=6");
        if (response.data?.roleStatus?.MentorType) {
          setIsExpert(response.data.roleStatus.MentorType !== "");
        }
         //credentials
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleExpertToggle = () => {
    setIsExpert(!isExpert);

  };

  return (
    <div className='h-screen w-screen flex md:flex-row flex-col'>

      {/* Left Panel */}
      <LeftPanel imgSrc={MC4} />

      {/* Right Panel */}
      <RightPanel>
        <div className='lg:text-[36px] text-2xl xl:pt-10 text-[#262626] font-bold px-4'>
          Are you an expert?
        </div>

        <div className='md:pt-10 pt-5 text-left md:text-[20px] text-[#2D488F] text-md'>
          <div>Give fast answers like a <span className='font-bold'>Perfect Pro!</span></div>
          <br />
          <div>
            When a mentee is stuck on a problem or has a nagging question that demands an expert's touch, ExpertFinder connects the mentee to you in <span className='font-bold'>real-time</span>.
            <br /><br />
            ExpertFinder instantly identifies qualified experts like yourself to answer a mentee's time-sensitive questions.
          </div>

          <label
            className="flex items-center gap-5 xl:mt-20 md:mt-15 mt-8 cursor-pointer"
            onClick={handleExpertToggle}
          >
            <div
              className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center ${
                isExpert ? 'bg-[#2A4FB0] border-[#2A4FB0]' : 'border-gray-500'
              }`}
            >
              {isExpert && <FaCheck className="text-white text-xs" />}
            </div>
            <span className="font-proxima md:text-[20px] mb-1 text-md font-semibold">
              Opt in as an expert
            </span>
          </label>
        </div>

        {/* Buttons */}
        <div className='pt-0 min-w-100 lg:absolute bottom-10'>
          <button
            onClick={() => navigate(-1)}
            className='bg-[#F5E649] text-black rounded-lg lg:px-17 px-12 py-3 font-bold transition-colors'
            disabled={loading}
          >
            Back
          </button>
          <button
            onClick={async () => {
              setLoading(true);
              try {
                const uid = localStorage.getItem("uid");
                await axios.post("http://localhost:5001/api/onboarding/save", {
                  step: 6,
                  data: {
                    uid,
                    roleStatus: {
                      MentorType: isExpert ? "Expert" : ""
                    }
                  }
                });
                navigate('/mentor/Community5');
              } catch (err) {
                console.error("Error saving data:", err);
                alert("Failed to save your selection. Please try again.");
              } finally {
                setLoading(false);
              }
            }}
            className='bg-[#F5E649] text-black rounded-lg lg:px-17 px-12 py-3 font-bold lg:ml-14 ml-7 hover:bg-[#E6D83D]'
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Next'}
          </button>
        </div>
      </RightPanel>
    </div>
  );
}
