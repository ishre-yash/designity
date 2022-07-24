import React from "react";
import Navbar from "../components/Navbar";
import ExperienceContainer from "../components/Profile/Experience/ExperienceContainer";
import ProfileHeader from "../components/Profile/ProfileHeader";
import TechStackContainer from "../components/Profile/Tech Stack/TechStackContainer";
import SideBar from "./SideBar";

const UserProfile = () => {
  return (
    <>
      <Navbar />
      <SideBar />
      <div className=" min-h-[100vh] 2xl:flex 2xl:flex-col 2xl:items-center 2xl:justify-center  h-[100%] ml-[16.5rem]  pt-10 bg-[#f8f8f8]">
        <div className="pl-[2rem] h-[100%] overflow-y-auto ">
          <div className="w-[644px] rounded-xl -mb-20 border-2  mt-10 bg-[#f4f5f6] h-[200px]"></div>
          <div className="w-[644px] rounded-lg  border-l-2 border-r-2 border-b-2 h-fit mt-10 bg-white relative ">
            <div className="w-full  bg-primary-gray absolute rounded-b-lg" />
            <div className="bottom-[45px] relative w-full px-4">
              <ProfileHeader />
            </div>
          </div>
          <ExperienceContainer />
          <TechStackContainer />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
