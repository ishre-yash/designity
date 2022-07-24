import React from "react";

const GeneralInput = ({ placeholder }) => {
  return (
    <div>
      <div>
        <input
          className="w-[310px] tracking-tight font-inter pl-[20px] border border-gray-400 rounded-lg  focus:outline-none py-[20px] h-[50px] "
          type="email"
          name="email"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default GeneralInput;
