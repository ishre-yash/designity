import React from "react";

const ComboBox = ({ name, autoComplete, labelTag, optionsArray, setState }) => {
  return (
    <div className=" mt-1 ">
      <label
        htmlFor={name}
        className="font-inter font-semibold py-2 text-[14px] leading-5"
      >
        {labelTag}
      </label>

      <select
        id={name}
        name={name}
        onChange={(e) => {
          setState(e.target.value);
        }}
        autoComplete={autoComplete}
        className="mt-2 font-inter text-base py-[15px] px-[10px] rounded-[15px] block w-full border border-gray-300 bg-white shadow-sm  sm:text-sm"
      >
        {optionsArray.map((option) => (
          <option>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default ComboBox;
