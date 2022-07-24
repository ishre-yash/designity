import React from "react";

const GeneralButton = ({ textOfButton }) => {
  return (
    <button className="w-[206px] ml-2 text-white rounded-xl h-[48px] bg-[#456add] hover:bg-blue-700 font-inter font-semibold text-center ">
      {textOfButton}
    </button>
  );
};

export default GeneralButton;
