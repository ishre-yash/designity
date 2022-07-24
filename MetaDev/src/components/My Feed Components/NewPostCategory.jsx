import React from "react";
import { BsChevronRight } from "react-icons/bs";

const NewPostCategory = ({ heading, subHeading, icon, link }) => {
  return (
    <>
      <div className="flex w-full pb-3 hover:border-slate-500 cursor-pointer rounded-md items-start justify-start border-2 ">
        {/* Icon */}
        <div className="px-4 pt-2 ">
          <img className="w-12 mt-4 mb-3" src={icon} alt={icon} />
        </div>
        <div className="flex w-full pt-6  items-center justify-between ">
          <div>
            <p className="leading-6 pr-6  font-semibold text-[15px] font-inter ">
              {heading}
            </p>
            <p className="leading-4 pr-6  text-xs text-slate-400 font-inter text-[15px]">
              {subHeading}
            </p>
          </div>
          <div className="text-xl pr-5 text-slate-400">
            <BsChevronRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPostCategory;
