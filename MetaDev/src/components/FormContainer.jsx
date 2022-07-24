import React from "react";
import DropDown from "./DropDown";
import DropDown2 from "./DropDown2";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import SideBar from "../containers/SideBar";

const FormContainer = () => {
  return (
    <>
      <Navbar />
      <SideBar />
      <div className="pl-[16.5rem] bg-[#f8f8f8] ">
        <div className=" bg-[#f8f8f8]">
          <div className="bg-[#f8f8f8] flex flex-col 2xl:items-center justify-center">
            <div className=" mt-4 px-4">
              <div className="px-8 w-[644px] h-[100px] flex flex-col items-center justify-center py-4 bg-white">
                <h1 className="font-inter font-bold leading-5 rounded-md">
                  How did you apply?
                </h1>
              </div>
            </div>
            <div className="px-4 py-4  bg-[#f8f8f8]">
              <div className="px-8  py-4 w-[644px]  bg-white">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <DropDown
                      Heading={"Role for which you applied?"}
                      value={"Ex- SDE-1, SDE-2 or SDE-Intern"}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <DropDown
                      Heading={"Company you applied to?"}
                      value={"Ex - Google, Amazon, Microsoft"}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <DropDown
                      Heading={"Team/Division"}
                      value={"Eg: Platform, Scale, Growth etc."}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <DropDown
                      Heading={"Location of company"}
                      value={"Ex - Hyderabad, Seattle, Delhi"}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <DropDown2 />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <fieldset className="col-span-6 font-inter">
                      <legend className="block font-inter font-semibold text-[14px] text-gray-900 mb-2">
                        Final Verdict
                      </legend>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="Yes"
                            className=" focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 "
                          />
                          <label className=" ml-3 block font-normal text-[15px] leading-5 text-black ">
                            I got selected and accepted the offer
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="Yes"
                            className=" focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 "
                          />
                          <label className=" ml-3 block font-normal text-[15px] leading-5 text-black ">
                            I got selected but declined the offer
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="Yes"
                            className=" focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 "
                          />
                          <label className=" ml-3 block font-normal text-[15px] leading-5 text-black ">
                            I was not selected
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>

                <div className=" px-4 py-3 bg-white mt-8 text-right sm:px-6 ">
                  <Link to={"/preparation"}>
                    <button className="inline-flex font-inter justify-center items-center w-[80px] h-[35px] font-bold border border-transparent shadow-sm  rounded-full text-white bg-sky-400 hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus-ring-indigo-500 ">
                      Next
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormContainer;
