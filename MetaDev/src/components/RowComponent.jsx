import React, { useState } from "react";

import Stepper from "./Stepper Component/Stepper";

const RowComponent = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setTimeout(setOpen(!open), 2000);
  };

  let imgUrl = localStorage.getItem("profileImgUrl");

  return (
    <>
      <tr
        onClick={() => handleOpen()}
        className=" cursor-pointer text-[0.875rem] hover:bg-[#f4f5f6] "
      >
        <td className="w-[290px] py-2 px-4 font-inter   text-left">
          {imgUrl ? (
            <div
              className=" flex items-center justify-between w-[35px] h-[35px] rounded-full cursor-pointer bg-no-repeat bg-center bg-cover"
              style={{ backgroundImage: `url(${imgUrl})` }}
            >
              <div className="flex flex-col items-start justify-center">
                <p className="ml-12 w-[100px] text-base font-semibold ">
                  Devraj Jhala
                </p>
                <p className="ml-12 text-xs ">example@example.com</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-start">
              <div className="bg-[#c0f2ef] text-[#25b2aa] h-[35px] w-[35px] text-base font-bold cursor-pointer flex overflow-hidden relative items-center flex-shrink-[1] rounded-full justify-center">
                S
              </div>
              <div className="flex flex-col items-start justify-center">
                <p className="ml-5 w-[100px] text-base font-semibold ">
                  Devraj Jhala
                </p>
                <p className="ml-5 text-xs ">example@example.com</p>
              </div>
            </div>
          )}
        </td>
        <div className="flex pt-2 font-inter px-4 items-center justify-end">
          <td width={"144px"} className=" mt-2 font-semibold mr-1 text-right">
            Jul 4
          </td>
        </div>
        <td width={"174px"} className="py-2 px-4 text-right  font-semibold">
          0
        </td>
      </tr>
      <tr
        className={`${
          open === true ? (
            <></>
          ) : (
            "hidden transition-all duration-1000 ease-in-out"
          )
        }`}
      >
        <td colSpan={"5"}>
          <div className="pb-12  md:pb-0 absolute md:static bg-[#f4f5f6] md:z-auto left-0  z-[-1] md:pl-0  md:items-center transition-all duration-500 ease-in-out top-20 ">
            <div className="flex items-start justify-start">
              <div className="relative bg-white h-[220px]">
                <Stepper />
              </div>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default RowComponent;
