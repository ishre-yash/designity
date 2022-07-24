import React from "react";
import BlueButton from "../BlueButton";

const SettingsAccount = () => {
  return (
    <div className="mt-10 mb-10">
      <div className="border-2 border-gray-200 w-[644px] h-fit flex rounded-xl flex-col items-start justify-center">
        <div className="p-4 border-b-[1px] border-slate-300 bg-white w-full font-inter leading-5 font-semibold">
          Delete your account
        </div>
        <div className="p-4 bg-white w-full">
          <p className=" font-inter leading-[1.3rem] text-[14px] tracking-[-0.015em]">
            Delete your account and account data. This can’t be undone!
          </p>
        </div>

        <div className="w-full bg-white py-3">
          <BlueButton>Delete my Account</BlueButton>
        </div>
      </div>
    </div>
  );
};

export default SettingsAccount;
