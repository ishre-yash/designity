import React from "react";

const ExperienceInput = ({ placeholderText }) => {
  return (
    <div>
      <div>
        <input
          className="w-[250px] tracking-tight font-inter pl-[14px] text-sm border border-gray-400 rounded-lg  focus:outline-none py-[14px] h-[46px] "
          type="text"
          name="input"
          placeholder={placeholderText}
        />
      </div>
    </div>
  );
};

export default ExperienceInput;
