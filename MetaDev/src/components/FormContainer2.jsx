import React from "react";
import DropDown from "./DropDown";
import DropDown2 from "./DropDown2";

const FormContainer2 = () => {
  return (
    <div className="pl-[16.5rem] ">
      <div className="">
        <div className="bg-[#f8f8f8]  h-[100vh] flex items-center justify-between">
          <div className="px-4 py-4">
            <div className="px-8 mt-72 py-4 w-[644px] h-[100vh] bg-white">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <DropDown2 />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <fieldset className="col-span-6 font-inter">
                    <legend className="block font-inter font-semibold text-[14px] text-gray-900 mb-2">
                      Do you want to tell about your previous experiences?
                      (Maximum 3 experiences)
                    </legend>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="Yes"
                          className=" focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 "
                        />
                        <label className=" ml-3 block font-normal text-[14px] leading-5 text-black ">
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="Yes"
                          className=" focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 "
                        />
                        <label className=" ml-3 block font-normal text-[14px] leading-5 text-black ">
                          No
                        </label>
                      </div>
                      <legend className="block font-inter text-[15px] text-slate-400 mt-2">
                        Internship, Full Time - Anything will be great :) (Tell
                        Them with the latest as first experience)
                      </legend>
                    </div>
                  </fieldset>
                </div>
              </div>

              <div className=" px-4 py-3 bg-white mt-8 text-right sm:px-6 ">
                <button className="inline-flex mr-4 font-inter justify-center items-center w-[80px] h-[35px] font-bold border border-transparent shadow-sm  rounded-full text-white bg-sky-400 hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus-ring-indigo-500 ">
                  Back
                </button>
                <button className="inline-flex font-inter justify-center items-center w-[80px] h-[35px] font-bold border border-transparent shadow-sm  rounded-full text-white bg-sky-400 hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus-ring-indigo-500 ">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer2;
