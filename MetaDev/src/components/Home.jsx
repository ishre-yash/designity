import React from "react";
import { Link } from "react-router-dom";

import SideBar from "../containers/SideBar";

import HomeCards from "./HomeCards";
import Navbar from "./Navbar";

import calendar from "../assets/agenda.png";
import events from "../assets/conference.png";
import jobsforyou from "../assets/job-offer.png";
import myinvites from "../assets/teamwork.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <SideBar />
      <div className=" min-h-[100vh] h-[100%] ml-[16.5rem] mt-48  pt-10 bg-[#f8f8f8]">
        <div className="pl-[2rem]  h-[100%] overflow-y-auto -mt-24 ">
          <div className=" ">
            <div className="flex items-center space-x-5 2xl:space-x-10 2xl:justify-center justify-start">
              <div className="  ">
                <Link to={"/referrals"}>
                  <HomeCards image={myinvites} description={"My Invites"} />
                </Link>
              </div>
              <Link to={"/calendar"}>
                <div className="">
                  <HomeCards image={calendar} description={"My Calendar"} />
                </div>
              </Link>
              <div className="">
                <Link to={"/jobsforyou"}>
                  <HomeCards image={jobsforyou} description={"Jobs For You"} />
                </Link>
              </div>
              <div className="">
                <HomeCards image={events} description={"Events"} />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex items-start justify-start">
              <div className="w-[500px] object-contain rounded-md h-fit bg-white bg-no-repeat bg-left-top bg-[url('/src/assets/docs@tinypng.61f4d3334a6d245fc2297517c87ae044.png')] flex items-center justify-start pl-5 ">
                <p className="py-4 font-inter leading-8 text-black font-semibold">
                  You have 5 learning invite(s) to gift
                </p>
              </div>
            </div>

            <div className="w-[950px] object-contain bg-no-repeat bg-left bg-[url('/src/assets/docs@tinypng.61f4d3334a6d245fc2297517c87ae044.png')] mt-10 rounded-md h-fit p-6 bg-white flex flex-col items-start justify-center ">
              <p className="mt-5 leading-6 font-inter font-semibold text-2xl">
                Rewards have changed
              </p>

              <p className="font-inter mt-3 mb-2 text-base">
                Say goodbye to crypto investing because it's time to earn crypto
              </p>
              <p className="font-inter pr-56 mt-1 mb-5 text-base">
                MetaDev ensures that every Developer gets rewarded for spending
                their time productively and adding value to the community as
                well as pursuing their interests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
