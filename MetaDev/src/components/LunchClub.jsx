import React from "react";
import GeneralButton from "./GeneralButton";
import { BsPencilSquare } from "react-icons/bs";
import { useState } from "react";
import Navbar from "./Navbar";
import SideBar from "../containers/SideBar";
import TableComponent from "./TableComponent";
import { Link } from "react-router-dom";
import Input from "./Input";

const LunchClub = () => {
  const [value, setValue] = useState(
    "Hey, I've been using MetaDev for a while and thought you would like it as well. I look to forward to see you working on some amazing ideas, transforming your experiences and achieving your goals being a part of this wonderful community"
  );

  return (
    <>
      <Navbar />
      <SideBar />
      <div className=" min-h-[100vh] h-fit ml-[16.5rem] pt-10 bg-[#f8f8f8]">
        <div className="pl-[2rem] 2xl:pl-0 flex flex-col items-start 2xl:items-center justify-center">
          <div className="flex items-center justify-start">
            <Link to={"/"}>
              <p className="text-xs mt-5 cursor-pointer font-semibold font-inter">
                Dashboard
              </p>
            </Link>
            <p className="text-xs mt-5 ml-2  font-semibold font-inter">&gt;</p>

            <p className="text-xs mt-5 ml-2 font-semibold font-inter">
              My Referrals
            </p>
          </div>
          <div className="w-[644px] border-2 h-fit flex flex-col my-2 px-[20px]  items-center bg-white justify-center ">
            <p className="text-[23px] mt-10 font-bold font-inter leading-[1.3rem] mb-4  ">
              Build the MetaDev community!
            </p>
            <p className=" text-center px-10 leading-[1.3rem] mb-4 text-[15px] tracking-[-0.015em] font-inter">
              Know someone who can add value to the community of MetaDev? Invite
              them, earn crypto when they sign up, when they achieve their goals
              or when they succeed.
            </p>
            <p className=" text-center px-10 leading-[1.3rem] mb-10 text-[15px] tracking-[-0.015em] font-inter">
              Be a part of your community success
            </p>
            <div className="flex items-center justify-between">
              <Input placeholderText={"Search by name or email"} />
              <GeneralButton textOfButton={"Send invite"} />
            </div>
            <div className="flex items-center mt-2 justify-between">
              <Input placeholderText={"Code"} />
              <GeneralButton textOfButton={"Copy invite link"} />
            </div>

            {/* TextArea Box */}
            <div className="w-[520px] 2xl:w-[550px] h-fit mb-10 hover:bg-[#eeeaea] mt-4 border border-gray-300 rounded-md ">
              <div className="flex items-center justify-start py-4">
                <div className="mx-4">
                  <BsPencilSquare />
                </div>
                <div className="font-bold text-base font-inter leading-[1.3rem]">
                  Write a message for your invites
                </div>
              </div>
              <div className="flex px-4 flex-col items-start justify-center">
                <p className="text-sm text-[#a8abb4] leading-[1.45rem] font-inter ">
                  The note below will be sent to your invites
                </p>
                <textarea
                  className="mb-4 mt-2 resize-none overflow-y-auto leading-[1.3rem] text-[14px] tracking-[-0.015em] p-4 font-inter bg-[#f4f4f3]"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  name=""
                  id=""
                  cols="58"
                  rows="5"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="pb-10">
            <TableComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default LunchClub;
