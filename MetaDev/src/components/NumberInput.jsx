import React from "react";

const NumberInput = ({ type, placeholder, setState = () => {} }) => {
  return (
    <div>
      <div>
        <input
          className="w-[318px] tracking-tight font-inter pl-[20px] border border-gray-400 rounded-lg  focus:outline-none py-[20px] h-[50px] "
          type={type}
          name="email"
          placeholder={placeholder}
          onChange={(e) => {
            setState(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default NumberInput;
