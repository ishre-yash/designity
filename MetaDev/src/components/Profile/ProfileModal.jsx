import Input from "../Input";
import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { IconContext } from "react-icons/lib/esm/iconContext";
import ProfilePic from "./ProfilePic";
import Socials from "./Socials";
import { FiCheckCircle } from "react-icons/fi";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ProfileModal = ({
  visible,
  onClose,
  name,
  setName,
  bio,
  setBio,
  value,
  setValue,
}) => {
  if (!visible) {
    return null;
  }

  const handleOnClose = (e) => {
    if (e.target.id === "container") {
      onClose();
    }
  };

  console.log(value);
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="z-50 fixed bg-black  bg-opacity-30 backdrop-blur-sm flex items-center justify-center inset-0"
    >
      <div className="bg-white overflow-y-auto overflow-x-hidden w-[500px] rounded-lg  h-[560px] flex flex-col items-start justify-start">
        {/* Header */}
        <div className="flex px-4 py-3 w-full items-start border border-b-2 justify-between">
          <p className="font-semibold font-inter text-sm">Edit Profile</p>
          <IconContext.Provider value={{ color: "#737577", size: "1.3rem" }}>
            <div onClick={onClose} className="cursor-pointer">
              <IoIosCloseCircle />
            </div>
          </IconContext.Provider>
        </div>

        {/* Main Content */}
        <div className="max-h-[498px]  p-[1rem]">
          <div className="flex">
            <div>
              <ProfilePic size="120" type="upload" />
            </div>
            <div className="w-full ml-4">
              <p className="font-inter font-semibold text-black text-[13px] mb-1">
                Name
              </p>
              <input
                className="w-[318px] tracking-tight font-inter pl-[14px] text-sm border border-gray-400 rounded-lg  focus:outline-none py-[14px] h-[46px] "
                type="text"
                name="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={"Enter your name..."}
              />
              <div>
                <p className="font-inter mt-4  font-semibold text-black text-[13px] mb-1">
                  Phone Number
                </p>
                <div className="">
                  <PhoneInput
                    country="in"
                    value={value}
                    onChange={(e) => setValue(e)}
                    countryCodeEditable={false}
                    placeholder="99999 99999"
                    inputStyle={{
                      width: "318px",
                      height: "42px",
                      fontFamily: "Inter",
                      fontSize: "14px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-5 ml-1 mr-2">
            <p className="font-inter font-semibold text-black text-[13px] mb-1">
              Bio
            </p>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="bg-white border border-gray-400 focus:outline-none rounded-md p-2 text-sm font-inter resize-none"
              cols="56"
              rows="5"
              placeholder="Write something about yourselves..."
            ></textarea>
          </div>
          <div className="mt-4 overflow-y-auto">
            <Socials />
            <div
              onClick={onClose}
              className="py-[10px] mt-4 mb-5 px-[14px] bg-[#333537] w-fit text-white flex items-center rounded-lg hover:bg-[#535557] hover:text-white transition-all cursor-pointer ml-3"
            >
              <IconContext.Provider
                value={{ className: "button-icon mr-1.5", size: "14px" }}
              >
                <FiCheckCircle />
              </IconContext.Provider>
              <span className="font-sm font-inter leading-none">
                Save Changes
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
