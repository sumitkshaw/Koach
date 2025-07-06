import React, { useState } from 'react'
import C3 from '../../../assets/signup/C3.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import LeftPanel from "../../../components/onBoardingComp/LeftPanel";
import RightPanel from "../../../components/onBoardingComp/RightPanel";
import NavigationButtons from "../../../components/onBoardingComp/NavigationButtons";

export default function Community7() {
    const navigate = useNavigate()
    
    var [session, setSession] = useState('Monthly')
    var [numberOfSessions,setNumberOfSessions]=useState(1);
    var [frequencyOfSessions,setfrequencyOfSessions]=useState(1);
    
    const handleSubmit = async () => {
        try {
          const uid = localStorage.getItem("uid");
            const response = await axios.post('http://localhost:5001/api/onboarding/save', {
                step: 7, // Step 6
                data: {uid,
                    sessions: {
                        numberOfSessions:numberOfSessions,
                        frequency: frequencyOfSessions,
                        session:session
                      },
                }
            });
            console.log("Response:", response.data);
            // If successful, navigate to the next step
            navigate('/mentee/Community8'); //area of expertise
        } catch (error) {
            console.error("Error saving data:", error);
            // Optionally handle error state for user feedback
        }
    }

    return (
        <div className='h-full w-screen flex flex-col md:flex-row  '>
            <LeftPanel imgSrc={C3}/>
            <RightPanel>
            <div className="flex flex-col md:gap-10 gap-5  lg:h-screen lg:justify-between">
        <div className='flex flex-col md:gap-10'>
                
                <div className='lg:text-4xl md:text-3xl px-10 text-xl text-[#262626] font-bold pt-10  text-center ml-[-20px]'>How often would you like sessions to be hosted by your coach?</div>
                <div className="flex flex-wrap mx-auto px-10 gap-20 my-10">
                  <div className="flex flex-col text-left gap-4 ">
                    <div>
                      <label className="block font-semibold mb-1 w-62">Number of sessions</label>
                     <input
                        type="number"
                        min="1"
                        value={numberOfSessions}
                        className="border border-blue-800 px-3 py-2 rounded focus:outline-none w-62"
                        defaultValue={1}
                      />
                    </div>
                    <div>
                     <label className="block font-semibold mb-1">Frequency of sessions</label>
                      <input
                        type="number"
                        min="1"
                        value={frequencyOfSessions}
                        className="border border-blue-800 px-3 py-2 rounded focus:outline-none w-62"
                        defaultValue={1}
                      />
                    </div>
                  </div>

                  {/* Right side: Toggle Buttons */}
                  <div className="flex items-end gap-4 ">
                        <button
                          onClick={() => setSession("Weekly")}
                          className={`px-6 py-2 rounded-full font-semibold text-sm ${
                            session === "Weekly"
                              ? "bg-[#2D488F] text-white"
                              : "text-[#2D488F] border border-[#2D488F]"
                          }`}
                        >
                          Weekly
                        </button>
                        <button
                          onClick={() => setSession("Monthly")}
                          className={`px-6 py-2 rounded-full font-semibold text-sm ${
                            session === "Monthly"
                              ? "bg-[#2D488F] text-white"
                              : "text-[#2D488F] border border-[#2D488F]"
                          }`}
                        >
                          Monthly
                        </button>
                      </div>
                </div>
                </div>
                            
                <NavigationButtons 
                    onNext={handleSubmit}
                />
                </div>
            </RightPanel>
        </div>
    )
}
