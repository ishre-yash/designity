import React from "react";
import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import RichEditorExample from "../RichTextEditor/RichEditorExample";

const SecondRound = ({
  problemDescription,
  date,
  duration,
  problems,
  title,
}) => {
  const [collapsible, setCollapsible] = useState("true");
  const handleCollapsible = () => {
    setCollapsible(!collapsible);
  };
  return (
    <div className="ml-8 mb-5 mt-5">
      <div className="w-[682px] shadow-md rounded-lg h-fit bg-white border-2 flex-col items-start justify-start ">
        <div className="text-lg font-semibold font-inter p-6 ">
          <p>INTERVIEW PROCESS</p>
        </div>
        <div
          onClick={handleCollapsible}
          className=" flex cursor-pointer items-center justify-between w-full px-6 pb-3 text-2xl font-inter"
        >
          <p>{title}</p>
          <div
            className={` ${
              collapsible === false ? "block" : "hidden"
            } cursor-pointer text-slate-400 text-4xl`}
          >
            <BiChevronDown />
          </div>
          <div
            className={`  ${
              collapsible ? "block" : "hidden"
            } cursor-pointer text-slate-400 text-4xl`}
          >
            <BiChevronUp />
          </div>
        </div>
        {/* Tags: Easy Medium Hard */}
        <div className="bg-slate-100 mx-6 -mt-2 rounded-full w-[45px] text-[10px] font-semibold font-inter text-green-500 px-1 py-[2px] text-center">
          <p>EASY</p>
        </div>
        <div className="mt-3 flex w-[70%] mx-6 items-center justify-between">
          <div className="flex items-center justify-center space-x-1">
            <p className="text-sm font-inter font-semibold">Duration:</p>
            <p className="text-sm font-inter">{duration}</p>
          </div>
          <div className="flex items-center justify-center space-x-1">
            <p className="text-sm font-inter font-semibold">Interview-Date:</p>
            <p className="text-sm font-inter">{date}</p>
          </div>
        </div>
        <div className="flex items-start justify-start mx-6 mb-2 space-x-1">
          <p className="text-sm font-inter font-semibold">Problems:</p>
          <p className="text-sm font-inter">{problems}</p>
        </div>
        {/* Problems */}
        {collapsible && (
          <div className="p-5">
            <div className="w-full border-2 h-fit ">
              <div className="p-4">
                <p className="text-xl font-semibold font-inter">
                  Tiling Problem
                </p>
                <p className="text-slate-600 mt-2 font-inter text-sm">
                  {problemDescription}
                </p>
                <p className="text-slate-600 mt-2 font-inter text-sm">
                  Examples:
                </p>
                <p className="text-slate-600 mt-5 font-inter text-sm">
                  Input n = 3
                </p>
                <p className="text-slate-600 mt-1 font-inter text-sm">
                  Output: 3
                </p>
                <p className="text-slate-600 mt-1 font-inter text-sm">
                  Explanation:
                </p>
                <p className="text-slate-600 mt-1 font-inter text-sm">
                  We need 3 tiles to tile the board of size 2 X 3
                </p>
                <p className="text-slate-600 mt-1 font-inter text-sm">
                  We can tile the board...
                </p>
                <p className="text-orange-500 cursor-pointer mt-1 font-inter text-base">
                  View More
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-[578px] mt-5 mb-5 rounded-sm ">
        <RichEditorExample />
      </div>
    </div>
  );
};

export default SecondRound;
