import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationButtons = ({
  showBack = true,
  onBack, // optional override for back button
  onNext,
  disableNext = false,
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1); // default back
    }
  };

  return (
    <div className='pt-0 lg:w-1/2 w-inherit flex justify-center lg:absolute bottom-10 '>
      {showBack && (
        <button
          onClick={handleBack}
          className='bg-[#F5E649] text-black rounded-lg lg:px-17 px-12 py-3 font-bold'
        >
          Back
        </button>
      )}
      <button
        onClick={onNext}
        disabled={disableNext}
        className='bg-[#F5E649] text-black rounded-lg lg:px-17 px-12 py-3 font-bold lg:ml-14 ml-7'
      >
        Next
      </button>
    </div>
  );
};

export default NavigationButtons;
