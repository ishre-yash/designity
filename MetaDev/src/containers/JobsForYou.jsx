import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "./SideBar";
import image from "../assets/4cd83012cbbd2e983cc45f66d783065b.svg";
import { Link } from "react-router-dom";

const JobsForYou = () => {
  return (
    <>
      <Navbar />
      <SideBar />
      <div className=" min-h-[90vh]  h-[100%] ml-[16.5rem] overflow-y-hidden  bg-[#f8f8f8]">
        <div className="pl-[2rem] h-[100%] ">
          <div className="flex items-center justify-start">
            <Link to={"/"}>
              <p className="text-xs mt-5 cursor-pointer font-semibold font-inter">
                Dashboard
              </p>
            </Link>
            <p className="text-xs mt-5 ml-2  font-semibold font-inter">&gt;</p>

            <p className="text-xs mt-5 ml-2 font-semibold font-inter">
              Jobs For You
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img className="mt-10 2xl:mt-44" src={image} alt="Banner" />
            <p className="mt-10 font-inter font-semibold text-lg">
              Well done! 👏
            </p>
            <p className="mt-5 mb-5 text-center font-inter leading-6 text-[15px] w-[320px]">
              MetaDev believes in creating the best developers and we truly want
              you to be the one
            </p>
            <div className="text-sm mb-5 text-white bg-sky-500 font-inter rounded-lg px-4 py-2 cursor-pointer">
              Upgrade to Custom
            </div>

            <div className="p-6 mb-5 mt-5 bg-gray-50 rounded-lg border-2 h-fit w-[850px] ">
              <p className="font-inter mb-5 ">
                Now, you are a part of the trusted community of Developers. In
                case, you are exploring new opportunities, update your status to
                "Actively Looking" in your profile page and explore the new
                ideas and initiatives that can help you find your dream
                opportunity
              </p>
              <p className="font-inter mb-5 ">
                MetaDev believes in creating the best developers and we truly
                want you to be the one
              </p>
              <p className="font-inter text-left mb-5 font-semibold">
                We recommend you to complete the following things:
              </p>
              <ul className="list-disc text-[15px] leading-6 ml-8">
                <li>
                  <p className=" mb-2">
                    In case, you are exploring new opportunities, update your
                    status to "Actively Looking" in your profile page
                  </p>
                </li>
                <li>
                  <p className=" mb-2">
                    Go to settings page and update your current salary details.
                    It helps us in matching you with companies which can offer
                    you better opportunities
                  </p>
                </li>
                <li>
                  <p className=" mb-2">
                    {" "}
                    Have a dream company in mind? Create a company surprise
                  </p>
                </li>
                <li>
                  <p className="mb-2">
                    Rather than building cap stone projects, gain experience by
                    building real applications and gain real experience
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsForYou;
