import React,{useState} from 'react';
import axios from 'axios';
import Bio from '../../../assets/signup/Bio.png';
import LeftPanel from "../../../components/onBoardingComp/LeftPanel";
import RightPanel from "../../../components/onBoardingComp/LeftPanel";
import NavigationButtons from "../../../components/onBoardingComp/NavigationButtons";

import { useNavigate } from 'react-router-dom';


const AboutMe = () => {
  const navigate = useNavigate();
  const [about,setAbout]=useState("");

  const handleChange=(e)=>{
    setAbout(e.target.value);
  }

  const handleSubmit= async()=>{
    try{
      const uid = localStorage.getItem("uid");
      const response=await axios.post("http://localhost:5001/api/onboarding/save",
        {
          step:3,
          
          data:{uid,about}
        }
      )
      alert(response.data.message);
      navigate('/welcome');
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className='flex md:flex-row flex-col h-screen w-screen overflow-hidden bg-white'>

        <LeftPanel imgSrc={Bio}/>
                
        <RightPanel>
            <h1 className="md:text-[49px] text-2xl font-bold text-[#262626] md:mb-20 mt-10  text-center">About Me</h1>
            <div className="">          
            <textarea value={about} onChange={handleChange}
  className="max-w-100 min-w-80 text-[#001F54] placeholder-[#001F54] h-[200px] sm:h-[250px] p-5 lg:w-[473px] md:h-[360px] sm-h-[300px] border-2 mx-10 mb-5 border-[#001F54] rounded-lg  resize-none"
  placeholder="Tell me about yourself"
></textarea>            </div>
          <NavigationButtons onNext={handleSubmit} /> 
        </RightPanel>
    </div>
  )
}

export default AboutMe