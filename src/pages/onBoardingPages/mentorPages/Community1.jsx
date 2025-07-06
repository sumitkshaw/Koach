import React, {useState} from 'react'
import axios from 'axios'
import idea from '../../../assets/signup/idea.png'
import { useNavigate } from 'react-router-dom'
import LeftPanel from "../../../components/onBoardingComp/LeftPanel";
import RightPanel from "../../../components/onBoardingComp/RightPanel";
import NavigationButtons from "../../../components/onBoardingComp/NavigationButtons";

export default function Community1() {
  const navigate=useNavigate()
  const [selectedItems, setSelectedItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const Items=[
    "Traditional","Executive","Leadership","Marketing","Success","Devops/IT","Performance","Sales","Career"
  ]
  const handleSelectItem = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };
  const handleNext = async () => {
    if (selectedItems.length === 0) {
      setError("Please select at least one option before proceeding.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const uid = localStorage.getItem("uid");
      const response = await axios.post("http://localhost:5001/api/onboarding/save", {
        step: 4,
      data: {uid,
        niches: {
          selectedItem: selectedItems 
          }
        },
      });

      console.log("Step 3 data saved:", response.data);
      navigate("/mentor/Community3");//key skills
    } catch (err) {
      console.error("Error saving step 3 data:", err);
      setError("Failed to save data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-screen flex md:flex-row flex-col justify-center items-center '>

            {/* <div className='bg-[#2A4FB0] w-1/2 h-screen'>
              <div className='pl-6 pt-6'>
                  <img src={Logo} className='h-[5vw] w-[4.5vw]'/>
              </div>
              <div className='flex justify-center items-center p-10'>
                  <img src={idea} className='h-[462px] w-[482px]'></img>
              </div>
            </div> */}
            <LeftPanel imgSrc={idea} className=""/>
            <RightPanel>
            {/* <div className='md:w-1/2 w-full md:h-screen h-1/2 p-14'> */}
                <div className='lg:text-[36px] md:text-3xl text-[1.5rem] lg:mx-10 text-[#262626] font-bold pt-5 px-4 mt-8 md:mt-5'>Select your primary coaching niches </div>
                <div className=' p-[6vw] min-w-100 lg:pt-15 md:pt-15 pt-5 space-x-3 text-center'>
                  {Items.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handleSelectItem(item)}
                        className={`border-2 cursor-pointer rounded-lg md:p-4 p-2 m-3 text-[#001F54] text-sm lg:text-lg md:text:md font-medium  
                          ${selectedItems.includes(item) ? "bg-[#2D488F] border-[#2D488F] text-white" : "bg-white text-[#001F54] border-[#001f54]"} 
                          hover:bg-[#2D488F] hover:text-[#FFFFFF] hover:border-[#2D488F]`}
                      >
                        {item}
                     </button>
                  ))}
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {/* <div className='pt-0 min-w-100 lg:absolute bottom-10'>
                <button onClick={()=>navigate(-1)} className='bg-[#F5E649] text-black rounded-lg md:px-17 px-15 py-3 font-bold'>Back</button>
                <button onClick={handleNext} disabled={loading} className='bg-[#F5E649] text-black rounded-lg md:px-17 px-15 py-3 font-bold lg:ml-14 ml-7 '>Next</button>
            </div> */}
            <NavigationButtons 
              showBack={true}
              onBack={()=>navigate(-1)}
              onNext={handleNext}
              disableNext={loading}  
             />       
            </RightPanel>
    </div>
  )
}
