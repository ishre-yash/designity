import React from "react";
import { FaChevronDown } from "react-icons/fa";

const BlockElement = () => {
  return (
    <div className="flex flex-col items-center justify-start mt-[290px] mb-[50px]">
      <div>
        <p className="font-inter font-semibold text-slate-400 text-[13px] mb-2 ">
          Block Type
        </p>
        <button
          className={`inline-flex items-center text-[15px] text-black font-inter
           justify-between w-[218px] rounded-md border border-gray-400 pl-[13px] h-[35px] py-[13px]`}
        >
          Heading 1
          <div className="px-2 flex items-center justify-center">
            <FaChevronDown />
          </div>
        </button>
      </div>
    </div>
  );
};

export default BlockElement;
