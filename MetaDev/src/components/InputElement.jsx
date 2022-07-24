import React from "react";

const InputElement = () => {
  return (
    <div>
      <div>
        <input
          className="w-[318px] tracking-tight font-inter pl-[20px] border border-gray-400 rounded-lg  focus:outline-none py-[20px] h-[50px] "
          type="email"
          name="email"
          placeholder="Email Address"
        />
      </div>
    </div>
  );
};

export default InputElement;
