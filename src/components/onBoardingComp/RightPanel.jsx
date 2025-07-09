import React from "react";

const RightPanel = ({ children }) => {
  return (
    <div className="lg:w-1/2 md:w-4/7 w-full md:min-h-screen lg:px-12 lg:py-16 px-10 flex flex-col justify-start items-center gap-3 md:gap-0">
      {children}
    </div>
  )
};

export default RightPanel;
