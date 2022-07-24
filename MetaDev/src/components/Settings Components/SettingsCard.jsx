import React from "react";
import BlueButton from "../BlueButton";
import ExperienceInput from "../Profile/Experience/ExperienceInput";
import SettingsAccount from "./SettingsAccount";
import SettingsPassword from "./SettingsPassword";

const SettingsCard = () => {
  return (
    <div className="mt-10 2xl:flex 2xl:flex-col 2xl:items-center 2xl:justify-center ">
      <div className="border-2 border-gray-200 w-[644px] h-fit flex rounded-xl flex-col items-start justify-center">
        <div className="p-4 border-b-[1px] border-slate-300 bg-white w-full font-inter leading-5 font-semibold">
          Location and Time Zone
        </div>
        <div className="p-4 bg-white w-full">
          <p className="font-inter text-[15px] leading-6 tracking-[-0.015em]">
            MetaDev personalizes networking, opportunities and collaborations
            according to your location. Make sure to update your location and
            time zone regularly. You can still access global opportunities
            regardless of your current location.
          </p>
          <div className=" mt-5 flex items-center justify-start space-x-5">
            <div>
              <p className="font-inter font-semibold text-black text-[13px] mb-1">
                Location
              </p>
              <ExperienceInput placeholderText={"Enter your Location..."} />
            </div>
            <div>
              <p className="font-inter font-semibold text-black text-[13px] mb-1">
                Time Zone
              </p>
              <ExperienceInput placeholderText={"Enter your Time Zone..."} />
            </div>
          </div>
        </div>

        <div className="w-full bg-white py-3">
          <BlueButton>Save</BlueButton>
        </div>
      </div>

      <SettingsPassword />
      <SettingsAccount />
    </div>
  );
};

export default SettingsCard;
