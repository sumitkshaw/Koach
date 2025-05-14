import React from 'react';
import { Search } from 'lucide-react';
import heropic1 from '../assets/heropic1.jpg';
import heropic2 from '../assets/heropic2.jpg';
import heropic3 from '../assets/heropic3.jpg';


function Hero() {
  return (
    <div className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mb-8 lg:mb-0">
            <h1 className="text-4xl font-bold text-[#2D488F] text-left mt-16 w-[780px]">
              From Good to <span className='text-black'>Great</span>.<br></br> Accelerate Your Trajectory with Modern-Agile Coaching & Community For The Next Gen.
            </h1>
            <p className="mt-6 text-[24px] text-black-600 text-left">
              Aspiring to lead in your industry? Start with Koach. Harness the power of expert coaching and engaged peer networks to fast-track your journey to where you want to be.
            </p>
            <div className="mt-16 text-left">
              <button className="text-[#2D488F] font-bold bg-[#F5E649] px-3 py-2 hover:bg-[#f3e338] transition-colors text-[20px] rounded-md">
                Search for Koach
              </button>
            </div>
            <p className="mt-4 text-black-600 text-left underline underline-offset-auto text-[18px]">
              Not ready? Join our community and move your goals forward together.
            </p>

           
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2D488F]/30 to-[#F5E649]/30 rounded-3xl filter blur-3xl"></div>
            <div className="relative grid grid-cols-3 gap-1 ml-44">
              <div className="h-[473px] rounded-[80px] overflow-hidden w-[135px]">
                <img 
                  src={heropic1}
                  alt="Professional"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-[473px] mt-32 rounded-[80px] overflow-hidden w-[135px]">
                <img 
                  src={heropic2}
                  alt="Professional"
                  className="h-full w-full  object-cover"
                />
              </div>
              <div className="h-[473px] rounded-[80px] overflow-hidden w-[135px]">
                <img 
                  src={heropic3}
                  alt="Professional"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>  
          </div>
        </div>
        
      </div>
    </div>
    
  )
}

export default Hero