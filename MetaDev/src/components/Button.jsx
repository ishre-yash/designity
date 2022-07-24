import React from "react";

const Button = ({ textOfButton }) => {
  return (
    <button
      className={`w-[80px] text-sm ml-2 text-black border border-gray-400 rounded-full h-[30px] hover:text-white hover:bg-green-500  bg-white font-inter  text-center`}
    >
      {textOfButton}
    </button>
  );
};

export default Button;
