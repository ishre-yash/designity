import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import DropDown from "./DropDown";

const DropDown2 = () => {
  const [condition, setCondition] = useState("none");
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // For showcasing input
  const [input, setInput] = useState("Select your years of Experience");

  return (
    <div className="flex flex-col items-center justify-start">
      <div>
        <p className="font-inter ml-16 font-semibold  py-2 text-[14px] leading-5">
          Years of Experience you have?
        </p>
        <button
          onClick={handleClick}
          className={`inline-flex items-center tracking-tight ml-16 focus:border-2 font-inter focus:border-indigo-500 ${
            input !== "Select your years of Experience"
              ? "text-back"
              : "text-slate-400"
          } justify-between w-[350px] rounded-xl border border-gray-400 pl-[14px] h-[50px] py-[14px]`}
        >
          {input}
          <div className="px-3 flex items-center justify-center">
            <FaChevronDown />
          </div>
        </button>
        {/* Menu Button */}
        {isOpen && (
          <div className="origin-center block z-20 bg-white absolute w-[350px] mt-2 ml-16 rounded-md shadow-lg focus:outline-none font-inter ">
            <div
              onClick={() => {
                setInput("Fresher");
                setIsOpen(false);
              }}
              className="cursor-pointer text-[14px] block hover:bg-slate-50 py-2 px-4 "
            >
              Fresher
            </div>
            <div
              onClick={() => {
                setInput("1-2 Years");
                setIsOpen(false);
              }}
              className="cursor-pointer text-[14px] block hover:bg-slate-50 py-2 px-4 "
            >
              1-2 Years
            </div>
            <div
              onClick={() => {
                setInput("2-3 Years");
                setIsOpen(false);
              }}
              className="cursor-pointer text-[14px] hover:bg-slate-50 py-2 px-4 "
            >
              2-3 Years
            </div>
            <div
              onClick={() => {
                setInput("3+ Years");
                setIsOpen(false);
              }}
              className="cursor-pointer text-[14px] hover:bg-slate-50 py-2 px-4 "
            >
              3+ Years
            </div>
          </div>
        )}

        {console.log(input)}
        {console.log(condition)}

        {input === "Fresher" && (
          <div className="ml-16 w-[270px] mt-5">
            <div className="flex flex-col justify-between w-[570px]">
              <div className="col-span-6 sm:col-span-3 space-y-2">
                <p className="text-[14px] leading-5 font-inter font-semibold">
                  Mode of Placement
                </p>
                <div className="flex items-center ">
                  <input
                    onClick={() => setCondition("On Campus")}
                    type="radio"
                    name="Yes"
                    className=" focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 "
                  />
                  <label
                    onSelect={() => setCondition(true)}
                    className=" ml-3 block font-normal text-[15px] leading-5 text-black "
                  >
                    On Campus
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    onClick={() => setCondition("Off Campus")}
                    type="radio"
                    name="Yes"
                    className=" focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 "
                  />
                  <label className=" ml-3 block font-normal text-[15px] leading-5 text-black ">
                    Off Campus
                  </label>
                </div>
              </div>

              {input !== "Fresher" ||
                (condition === "Off Campus" && (
                  <div className="col-span-6  mt-5 sm:col-span-3">
                    <DropDown
                      Heading={"Where did you apply"}
                      value={"LinkedIn/ Referral/ Hackerrank"}
                    />
                  </div>
                ))}

              {input === "Fresher" && condition === "On Campus" && (
                <div className=" w-[270px] mt-5 ">
                  <div className="flex flex-row justify-between w-[570px]">
                    <div className="col-span-6 sm:col-span-3">
                      <DropDown
                        Heading={"Degree"}
                        value={
                          "B.tech/BCA/MCA/M.tech (Latest one will be preferred)"
                        }
                      />
                    </div>
                    <DropDown
                      Heading={"Your College"}
                      value={"DTU/IIT Delhi/NSIT"}
                    />
                  </div>
                  <div className="flex justify-between w-[570px]">
                    <div className="col-span-6 mt-5 sm:col-span-3">
                      <DropDown
                        Heading={"Your Branch"}
                        value={
                          "Computer Engineering/Mechanical Engineering/Civil Engineering"
                        }
                      />
                    </div>
                    <div className="col-span-6 mt-5 sm:col-span-3">
                      <DropDown Heading={"Your CGPA"} value={""} />
                    </div>
                  </div>
                  <div className="col-span-6 mt-5 sm:col-span-3">
                    <DropDown
                      Heading={"Eligibility Criteria"}
                      value={"Mention the eligibility criteria (if any)"}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <div
        className={` ${
          input !== "Fresher" && input !== "Select your years of Experience"
            ? "block"
            : "hidden"
        } col-span-6 -ml-4 mt-5 sm:col-span-3`}
      >
        <DropDown
          Heading={"Where did you apply"}
          value={"LinkedIn/ Referral/ Hackerrank"}
        />
      </div>
    </div>
  );
};

export default DropDown2;
