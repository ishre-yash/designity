import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import NewPostCategory from "../components/My Feed Components/NewPostCategory";

import apps from "../assets/apps.png";
import blogging from "../assets/blogging.png";
import brainstorming from "../assets/brainstorming.png";
import blockchain from "../assets/blockchain.png";

const NewPosts = () => {
  return (
    <>
      <Navbar />
      <SideBar />
      <div className="  min-h-[100vh] h-[100%] flex flex-col items-start 2xl:items-center justify-start ml-[16.5rem]  pt-10 bg-[#f8f8f8]">
        <div className="mt-5 mb-3 flex items-center justify-between ml-10 px-4 w-[648px] ">
          <p className="font-inter tracking-tighter leading-7 font-semibold text-xl">
            Create a Post
          </p>
          <Link to={"/myfeed"}>
            <p className="font-inter text-slate-400 leading-6 font-semibold text-[13px] cursor-pointer ">
              Cancel
            </p>
          </Link>
        </div>
        {/* Main content */}
        <div className="w-[648px] mb-5 ml-10 bg-white rounded-md h-fit flex flex-col items-start justify-start">
          <p className="px-6 py-8 font-inter text-[17px] leading-6 font-semibold">
            What would you like to post
          </p>

          {/* 4 Cards */}
          <div className="flex w-full flex-col space-y-5 justify-center items-start px-6 py-4">
            <Link className="w-full" to="/share-interview-experience">
              <NewPostCategory
                heading={"Interview Experience"}
                subHeading={"Get answers from fellow War Room members"}
                icon={apps}
              />
            </Link>
            <NewPostCategory
              heading={"Interview Questions"}
              subHeading={"Get answers from fellow War Room members"}
              icon={blockchain}
            />
            <NewPostCategory
              heading={"Resources"}
              subHeading={"Share your experience or provide recommendations"}
              icon={blogging}
            />
            <NewPostCategory
              heading={"User Research"}
              subHeading={"Start conversations or share your opinion"}
              icon={brainstorming}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPosts;
