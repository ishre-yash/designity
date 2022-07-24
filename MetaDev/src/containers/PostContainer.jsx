import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "./SideBar";

import VMware from "../assets/vmware-8949.png";
import { BsPatchCheckFill, BsCodeSlash } from "react-icons/bs";
import { RiShareForwardFill } from "react-icons/ri";
import { BiUpArrowAlt } from "react-icons/bi";
import { HiLightBulb } from "react-icons/hi";
import PostDescriptionButton from "./PostDescriptionButton";
import { useState } from "react";
import InterviewRoundsCard from "../components/My Feed Components/InterviewRoundsCard";
import ApplicationProcessCard from "../components/My Feed Components/ApplicationProcessCard";
import { useTransition } from "react-transition-state";

const Post = () => {
  const [state, toggle] = useTransition({ timeout: 750, preEnter: true });
  const [active, setActive] = useState(true);
  const handleActive = () => {
    setActive(!active);
  };

  const [roundType, setRoundType] = useState("Interview Rounds");
  console.log(roundType);

  const [roundNumber, setRoundNumber] = useState(1);

  const roundData = [
    {
      roundNum: 1,
      duration: "60 minutes",
      problems: "2",
      date: "25 Jan 2019",
      title: "Online Coding Test",
      problemHeading: "Tiling Problem",
      problemDescription:
        "Given a `2 X n` board and tiles of size `2 X 1`, count the number of ways to tile the given board using the 2 X 1 tiles. A tile can either be placed horizontally i.e., as a 1 X 2 tile or vertically i.e., as 2 X 1 tile.",
    },
    {
      roundNum: 2,
      duration: "50 minutes",
      problems: "2",
      date: "25 Jan 2019",
      title: "Face to Face",
      problemHeading: "Count Positive-Negative Pairs",
      problemDescription:
        "Given an array of positive and negative integers, print x if +x and -x are present in the array.",
    },
  ];

  return (
    <>
      <Navbar />
      <SideBar />
      <div className="flex items-center font-inter justify-start overflow-x-hidden w-full ">
        <div className="min-h-[100vh] h-[100%] flex flex-col items-start 2xl:items-center justify-center  w-full ml-[16.5rem]  bg-[#f8f8f8]">
          <div className="bg-white w-[680px] rounded-lg border-2 ml-8 mt-8 p-6 ">
            <div className="flex items-center justify-start">
              <img src={VMware} alt="Company Logo" />
              <p className="font-inter text-lg font-semibold text-center ">
                SDE-1 Interview Experience for Fresher at VMware Inc. , November
                2022
              </p>
            </div>
            <div className=" pt-6 px-5 text-sm flex items-end justify-between">
              <p>Posted: 22nd September 2018</p>
              <div className="flex text-sm items-center font-semibold justify-center space-x-2 text-green-500">
                <div className="text-lg">
                  <BsPatchCheckFill />
                </div>
                <p>SELECTED</p>
              </div>
            </div>
            <div className="flex items-center justify-end mr-5 mt-3 space-x-5">
              <div className="flex items-center justify-center space-x-1">
                <div className="cursor-pointer text-sm">
                  <BiUpArrowAlt />
                </div>
                <p className="font-inter text-sm font-semibold">20</p>
              </div>
              <div className="cursor-pointer text-sm">
                <RiShareForwardFill />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start ml-8 space-x-4 mt-5">
            <div
              className={`${
                active
                  ? "text-orange-500 shadow-md border-l-4 border-orange-500"
                  : "text-black"
              }`}
              onClick={() => {
                setRoundType("Interview Rounds");
                handleActive();
              }}
            >
              <PostDescriptionButton
                icon={<BsCodeSlash />}
                description={"Interview Rounds"}
              />
            </div>
            <div
              className={`${
                active === false
                  ? "text-orange-500 shadow-md border-l-4 border-orange-500"
                  : "text-black"
              }`}
              onClick={() => {
                setRoundType("Application Process");
                handleActive();
              }}
            >
              <PostDescriptionButton
                icon={<HiLightBulb />}
                description={"Application Process"}
              />
            </div>
          </div>

          <div className="mt-5 mb-5 flex ml-8 cursor-pointer  items-center space-x-2 justify-start">
            <button
              onClick={() => setRoundNumber(1)}
              className=" font-inter border-2 rounded-lg bg-white px-2 py-2 text-sm font-semibold"
            >
              Round 1
            </button>

            <button
              onClick={() => {
                setRoundNumber(2);
                toggle();
              }}
              className={`font-inter border-2 rounded-lg bg-white px-2 py-2 text-sm font-semibold`}
            >
              <p className="">Round 2</p>
            </button>
            <div className="font-inter border-2 rounded-lg bg-white px-2 py-2 text-sm font-semibold">
              <p className="">Round 3</p>
            </div>
            <div className="font-inter border-2 rounded-lg bg-white px-2 py-2 text-sm font-semibold">
              <p className="">Round 4</p>
            </div>
            <div className="font-inter border-2 rounded-lg bg-white px-2 py-2 text-sm font-semibold">
              <p className="">Round 5</p>
            </div>
            <div className="font-inter border-2 rounded-lg bg-white px-2 py-2 text-sm font-semibold">
              <p className="">Round 6</p>
            </div>
            <div className="font-inter border-2 rounded-lg bg-white px-2 py-2 text-sm font-semibold">
              <p className="">Round 7</p>
            </div>
            <div className="font-inter border-2 rounded-lg bg-white px-2 py-2 text-sm font-semibold">
              <p className="">Round 8</p>
            </div>
          </div>

          {/* Navigation and Interview Experience */}
          <div className={`${state} transition-all ease-in-out duration-500`}>
            {roundType === "Interview Rounds" && (
              <InterviewRoundsCard
                roundData={
                  roundData.filter((round) => round.roundNum === roundNumber)[0]
                }
              />
            )}
            {roundType === "Application Process" && <ApplicationProcessCard />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;

// {problemDescription}
