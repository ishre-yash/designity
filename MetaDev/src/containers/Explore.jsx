import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import man from "../assets/perfect.jpg";

const Explore = () => {
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
              Explore
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="w-[880px] object-contain bg-no-repeat bg-left bg-[url('/src/assets/docs@tinypng.61f4d3334a6d245fc2297517c87ae044.png')] mt-20 rounded-md h-fit p-6 bg-white flex flex-col items-start justify-center ">
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

            <div className="w-[880px] mb-10 h-fit object-contain bg-no-repeat bg-left mt-20 rounded-md bg-white flex pt-6 px-6 items-start justify-between ">
              <div>
                <p className="mt-5 leading-10 tracking-tight font-inter font-semibold text-[30px]">
                  Advance your career with experience, not certificates
                </p>

                <p className="font-inter mt-5 mb-5 text-base leading-6">
                  What is one common question every company asks you in an
                  interview? It's not how many certificates you have, it's how
                  much experience you have. No company wants your certificates,
                  but every company wants your experience
                </p>

                <button className="w-[250px] mt-5 text-center rounded-lg hover:bg-blue-800 text-white font-inter leading-7 font-bold h-[50px] bg-blue-700 ">
                  Create a Post
                </button>
              </div>
              <img className="w-[400px] h-fit" src={man} alt="Banner" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
