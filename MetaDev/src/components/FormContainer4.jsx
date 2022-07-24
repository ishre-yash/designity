import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../containers/SideBar";
import Navbar from "./Navbar";
import NumberInput from "./NumberInput";

const FormContainer4 = () => {
  return (
    <>
      <Navbar />
      <SideBar />
      <div className="pl-[16.5rem] ">
        <div className="h-[100vh] bg-[#f8f8f8]">
          <div className="bg-[#f8f8f8]  h-[50vh] flex 2xl:justify-center items-center">
            <div className="px-4 py-4 mt-40">
              <div className="px-8 w-[644px] h-[100px] flex flex-col items-center justify-center py-4 bg-white">
                <h1 className="font-inter font-bold leading-5 rounded-md">
                  Number of Rounds
                </h1>
              </div>
              <div className="px-8 py-4 mt-5 w-[644px] h-[50vh] bg-white">
                <p className="font-inter mt-5 text-[13px] mb-2">
                  How many rounds were there?
                </p>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <NumberInput
                      type={"number"}
                      placeholder={"Maximum 8 are allowed"}
                    />
                  </div>
                </div>

                <div className=" px-4 py-3  bg-white mt-16 text-right sm:px-6 ">
                  <Link to={"/preparation"}>
                    <button className="inline-flex mr-4 font-inter justify-center items-center w-[80px] h-[35px] font-bold border border-transparent shadow-sm  rounded-full text-white bg-sky-400 hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus-ring-indigo-500 ">
                      Back
                    </button>
                  </Link>

                  <Link to={"/round"}>
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

export default FormContainer4;
