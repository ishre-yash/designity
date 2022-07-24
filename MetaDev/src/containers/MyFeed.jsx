import React from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import MyFeedCard from "../components/My Feed Components/MyFeedCard";
import Navbar from "../components/Navbar";
import SideBar from "./SideBar";

const MyFeed = () => {
  const activeLink = "text-sky-400 border-b-4 border-sky-500";
  const normalLink = "text-slate-700";
  return (
    <>
      <Navbar />
      <SideBar />
      <div className="flex items-center justify-start overflow-x-hidden w-full ">
        <div className="mt-28 min-h-[100vh] h-[100%]   ml-[16.5rem]  pt-10 bg-[#f8f8f8]">
          <div className="-mt-16 ml-8 ">
            <div className="flex pb-1 items-center justify-start space-x-7">
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                to={"/myfeed"}
              >
                <p className="font-inter text-sm  cursor-pointer hover:text-sky-500">
                  Interview Experience
                </p>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                to={"/goals"}
              >
                <p className="font-inter text-sm  cursor-pointer hover:text-sky-500">
                  Interview Questions
                </p>
              </NavLink>
              <p className="font-inter text-sm  cursor-pointer hover:text-sky-500">
                Resources
              </p>
              <p className="font-inter text-sm  cursor-pointer hover:text-sky-500">
                User Research
              </p>
            </div>
            <div className=" bg-slate-300 h-[1px] w-[100vw] -ml-8 -mt-1 " />
          </div>

          <div className="pl-[2rem] xl:pl-[3rem] 2xl:pl-[5rem] flex items-center justify-start mt-5 h-[100%] overflow-y-auto ">
            <div className="flex space-y-5 flex-col items-center justify-center">
              <MyFeedCard />

              <MyFeedCard />
              <MyFeedCard />
            </div>
            <Link to="/newposts">
              <button className="w-[250px] ml-5 absolute 2xl:right-80 right-10 top-60 rounded-lg hover:bg-blue-800 px-14 text-white font-inter leading-7 font-bold -mt-11 h-[50px] bg-blue-700 p-4 flex items-center justify-between ">
                <BsFillPencilFill />
                Create a Post
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyFeed;
