import React from "react";
import DropDown from "./DropDown";
import RichEditorExample from "../components/RichTextEditor/RichEditorExample";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import SideBar from "../containers/SideBar";

const FormContainer3 = () => {
  return (
    <>
      <Navbar />
      <SideBar />
      <div className="pl-[16.5rem] bg-[#f8f8f8] ">
        <div className="  bg-[#f8f8f8]">
          <div className="bg-[#f8f8f8] flex items-center justify-start 2xl:justify-center">
            <div className="px-4 py-4 bg-[#f8f8f8] ">
              <div className="px-8 w-[644px] h-[100px] flex flex-col items-center justify-center py-4 bg-white">
                <h1 className="font-inter font-bold leading-5 rounded-md">
                  Preparation Tips
                </h1>
              </div>
              <div className="px-8 py-4 w-[644px] mt-5  bg-white">
                <div className="">
                  <div className="">
                    <p className="font-inter mt-8 font-semibold text-[15px] leading-5 mb-2">
                      Top topics you prepared? (Mention atleast 5 with comma
                      seperated)
                    </p>

                    <RichEditorExample
                      value={"Ex - Arrays, Linked Lists, Graphs"}
                    />
                  </div>
                  <div className="mt-8 mb-10">
                    <DropDown
                      Heading={"Duration Of Preparation (In months)"}
                      value={"Ex- 2.5 months, 6 months"}
                    />
                  </div>

                  <div className="mt-8">
                    <p className="font-inter font-semibold text-[14px] leading-5 mb-2">
                      Preparation Tips (Mention atleast two tips line seperated)
                    </p>

                    <RichEditorExample
                      value={"Ex- OOPS, Data Structures and Algorithms"}
                    />
                  </div>
                  <div className=" px-4 py-3 bg-white mt-8 text-right sm:px-6 ">
                    <Link to={"/"}>
                      <button className="inline-flex mr-4 font-inter justify-center items-center w-[80px] h-[35px] font-bold border border-transparent shadow-sm  rounded-full text-white bg-sky-400 hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus-ring-indigo-500 ">
                        Back
                      </button>
                    </Link>

                    <Link to={"/numberofrounds"}>
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
      </div>
    </>
  );
};

export default FormContainer3;
