import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ExperienceInput from "../Profile/Experience/ExperienceInput";

const SettingsPassword = () => {
  const toastMessage = (
    <div className="font-inter text-base flex items-center justify-between">
      <BsCheckCircleFill />
      <p className="pl-3">Check your Email for link</p>
    </div>
  );

  const message = () =>
    toast(toastMessage, {
      duration: 2000,
      position: "bottom-center",
      style: {
        backgroundColor: "black",
        color: "white",
        fontFamily: "Inter",
        borderRadius: "9999px",
      },
    });

  const [heading, setHeading] = useState("Password");
  const [buttonText, setButtonText] = useState("Check your Email");
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="mt-10">
      <div className="border-2 border-gray-200 w-[644px] h-fit flex rounded-xl flex-col items-start justify-center">
        <div className="p-4 border-b-[1px] border-slate-300 bg-white w-full font-inter leading-5 font-semibold">
          {heading}
        </div>
        {heading === "Password" && (
          <div className="p-4 bg-white w-full">
            <p className=" font-inter leading-[1.3rem] text-[14px] tracking-[-0.015em]">
              You have not set up a password for your account.
            </p>
          </div>
        )}

        {heading === "Change Password" && (
          <div className="p-4 bg-white w-full">
            <div className="flex items-center justify-start space-x-5">
              <div>
                <p className="font-inter font-semibold text-black text-[13px] mb-1">
                  Current Password
                </p>
                <ExperienceInput
                  placeholderText={"Enter your Current Password..."}
                />
              </div>
              <div>
                <p className="font-inter font-semibold text-black text-[13px] mb-1">
                  New Password
                </p>
                <ExperienceInput
                  placeholderText={"Enter your New Password..."}
                />
              </div>
            </div>
            <div className="mt-5">
              <p className="font-inter font-semibold text-black text-[13px] mb-1">
                Confirm New Password
              </p>
              <ExperienceInput
                placeholderText={"Enter the password you set..."}
              />
            </div>
          </div>
        )}

        <div className="w-full bg-white py-3">
          <button
            disabled={disabled ? true : false}
            onClick={() => {
              message();
              setInterval(setHeading("Change Password"), 50000);
              setButtonText("Save");
              setDisabled(true);
            }}
            className="bg-sky-500 hover:opacity-80 rounded-full text-white font-inter text-[14px] py-2 px-4 md:ml-4 hover:bg-sky-700 duration-500"
          >
            {buttonText}
          </button>

          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default SettingsPassword;
