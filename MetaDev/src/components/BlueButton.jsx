import React from "react";

const BlueButton = (props) => {
  return (
    <button className="bg-sky-500 hover:opacity-80 rounded-full text-white font-inter text-[14px] py-2 px-4 md:ml-4 hover:bg-sky-700 duration-500">
      {props.children}
    </button>
  );
};

export default BlueButton;
