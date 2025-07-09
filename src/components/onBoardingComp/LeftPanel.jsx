import React from 'react'
import Logo from "../../assets/signup/KoachLogo.png";


const LeftPanel = ({imgSrc,imgW}) => {
  return (
    <div className="lg:w-1/2 md:w-5/6 w-full md:h-screen h-1/3 bg-[#2A4FB0] flex justify-center items-center">
      {/* Logo */}
      <div className="absolute md:left-0  top-[-60px] left-0">
        <img src={Logo} alt="K Logo" className="md:w-[211px] w-1/4" />
      </div>

      {/* Illustration */}
      <div className={`${imgW ? imgW : 'max-w-[200px]'} md:max-w-[500px]`}>
        <img
          src={imgSrc}
          alt="Person with phone illustration"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default LeftPanel;
