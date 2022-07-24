import React from "react";
import { useState } from "react";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import { BsChat, BsInfoCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const MyFeedCard = () => {
  const [counter, setCounter] = useState(0);
  const handleCountIncrement = () => {
    setCounter(counter + 1);
  };
  const handleCountDecrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="flex space-x-5 items-center justify-start">
      <div className="flex w-[644px] h-fit bg-white rounded-md items-start justtify-start">
        <div className="flex p-3 flex-col items-center justify-center">
          <div onClick={handleCountIncrement} className="cursor-pointer">
            <BiUpArrowAlt />
          </div>
          <p className="font-inter">{counter}</p>
          <div onClick={handleCountDecrement} className="cursor-pointer">
            <BiDownArrowAlt />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <Link to="/post/1">
            <p className=" p-3 font-semibold font-inter">
              SDE-1 Interview Experience for Fresher at VMware Inc. , November
              2022
            </p>
          </Link>
          {/* Tags and Emojis etc. */}
          <div className="flex items-center space-x-3 justify-end">
            {/* Tag */}
            <div className="p-2 ml-3 rounded-full mb-5 bg-sky-200 text-center ">
              <p className="font-inter text-sky-900 cursor-pointer text-[13px]">
                Question
              </p>
            </div>

            <div className="w-[60px] cursor-pointer rounded-md text-sm px-2 py-1 flex items-center justify-between border border-black mb-5 ml-3 ">
              <BsChat />
              <p className="font-inter font-semibold">20</p>
            </div>
            <div className="w-[60px] cursor-pointer rounded-md text-sm px-2 py-1 flex items-center justify-between border border-black mb-5 ml-3 ">
              <BsInfoCircle />
              <p className="font-inter font-semibold">10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFeedCard;
