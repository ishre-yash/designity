import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import SettingsCard from "../components/Settings Components/SettingsCard";
import SideBar from "./SideBar";

const Settings = () => {
  const activeLink = "text-sky-400 border-b-4 border-sky-500";
  const normalLink = "text-slate-700";
  return (
    <>
      <Navbar />
      <SideBar />
      <div className=" mt-28 min-h-[100vh] h-[100%]   ml-[16.5rem]  pt-10 bg-[#f8f8f8]">
        <div className="-mt-16 ml-8 ">
          <div className="flex pb-1 items-center justify-start space-x-7">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to={"/settings"}
            >
              <p className="font-inter text-base  cursor-pointer hover:text-sky-500">
                Accounts
              </p>
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to={"/goals"}
            >
              <p className="font-inter text-base  cursor-pointer hover:text-sky-500">
                Your Goals
              </p>
            </NavLink>
            <p className="font-inter text-base  cursor-pointer hover:text-sky-500">
              Integrations
            </p>
          </div>
          <div className=" bg-slate-300 h-[1px] -ml-8 -mt-2 " />
        </div>
        <div className="pl-[2rem] h-[100%] overflow-y-auto ">
          <SettingsCard />
        </div>
      </div>
    </>
  );
};

export default Settings;
