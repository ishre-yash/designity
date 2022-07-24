import React, { useState } from "react";

const DropDown = ({ Heading, value, width }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  // For showcasing input

  return (
    <div className="flex flex-col ">
      <div>
        <p className="font-inter font-semibold py-2 text-[14px] leading-5">
          {Heading}
        </p>
        <input
          placeholder={value}
          value={input}
          onChange={handleChange}
          className={`inline-flex items-start tracking-tight text-[14px] focus:border-2 font-inter focus:border-indigo-500 ${
            input !== value ? "text-black" : "text-slate-400"
          }  justify-start w-[270px] rounded-xl border border-gray-400 pl-[12px] h-[50px] py-[12px]`}
        />
      </div>
    </div>
  );
};

export default DropDown;
