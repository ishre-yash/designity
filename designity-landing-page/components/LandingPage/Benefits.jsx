import React from "react";
import { BsFillLightningFill } from "react-icons/bs";
import { MdOutlineDesignServices, MdOutlineAttachMoney } from "react-icons/md";
import { BiPaint } from "react-icons/bi";
import { CgDisplayFlex } from "react-icons/cg";
import { FaFingerprint } from "react-icons/fa";
import Butten from "../UiComponents/Butten";

function Benefits() {
  return (
    <>
      <section
        className="benefits overflow-hidden pt-24 pb-24 bg-auto bg-white px-4 md:px-16"
        style={{
          backgroundImage: `url('https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png')`,
        }}
      >
        <div className="container relative z-[2] max-w-6xl mx-auto text-center">
          <div className="static top-[30vh]">
            <div className="mx-auto max-w-3xl">
              <img
                className="mb-7 mx-auto"
                src="https://assets.website-files.com/5837424ae11409586f837994/611a9e387d080fa68df0f888_Group%2048.svg"
                loading="lazy"
                alt=""
              />
              <h2 className="max-w-xl mx-auto font-bold text-4xl md:text-5xl mt-0 mb-2 tracking-tight">
                Membership benefits
              </h2>
              <p className="mt-5 text-xl md:text-2xl font-normal max-w-xl mx-auto text-[#333] tracking-tight">
                Perks so good you&apos;ll never need to go anywhere else for
                your design. Seriously.
              </p>
              <Butten title="See plans" />
            </div>
          </div>
          <section>
            <div className="text-xl leading-6 mx-auto mt-20 max-w-5xl grid grid-row-3 md:grid-cols-3 gap-10 ">
              <div>
                <div className="icon flex w-20 text-[#333] h-20 mx-auto mb-6">
                  <MdOutlineDesignServices className="w-full h-full" />
                </div>
                <div className="text-black font-bold mb-2 ">Design board</div>
                <div className="max-w-xs text-[#333] text-center mx-auto">
                  Add as many design requests to your board as you&apos;d like.
                </div>
              </div>
              <div>
                <div className="icon flex w-20 text-[#333] h-20 mx-auto mb-6">
                  <BsFillLightningFill className="w-full h-full" />
                </div>
                <div className="text-black font-bold mb-2 ">
                  Lightning fast delivery
                </div>
                <div className="max-w-xs text-[#333] text-center mx-auto">
                  Add as many design requests to your board as you&apos;d like.
                </div>
              </div>
              <div>
                <div className="icon flex w-20 text-[#333] h-20 mx-auto mb-6">
                  <MdOutlineAttachMoney className="w-full h-full" />
                </div>
                <div className="text-black font-bold mb-2 ">
                  Fixed monthly rate
                </div>
                <div className="max-w-xs text-[#333] text-center mx-auto">
                  No surprises here! Pay the same fixed price each month.
                </div>
              </div>
            </div>
            <div className="text-xl leading-6 mx-auto mt-20 max-w-5xl grid grid-row-3 md:grid-cols-3 gap-10 ">
              <div>
                <div className="icon flex w-20 text-[#333] h-20 mx-auto mb-6">
                  <BiPaint className="w-full h-full" />
                </div>
                <div className="text-black font-bold mb-2 ">
                  Top-notch quality
                </div>
                <div className="max-w-xs text-[#333] text-center mx-auto">
                  Insane design quality at your fingertips whenever you need it.
                </div>
              </div>
              <div>
                <div className="icon flex w-20 text-[#333] h-20 mx-auto mb-6">
                  <CgDisplayFlex className="w-full h-full" />
                </div>
                <div className="text-black font-bold mb-2 ">
                  Flexible and scalable
                </div>
                <div className="max-w-xs text-[#333] text-center mx-auto">
                  Scale up or down as needed, and pause or cancel at anytime.
                </div>
              </div>
              <div>
                <div className="icon flex w-20 text-[#333] h-20 mx-auto mb-6">
                  <FaFingerprint className="w-full h-full" />
                </div>
                <div className="text-black font-bold mb-2 ">
                  Unique and all yours
                </div>
                <div className="max-w-xs text-[#333] text-center mx-auto">
                  Each of your designs is made especially for you and is 100%
                  yours.
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <div className="flex flex-col items-center justify-center h-32 relative z-[1]">
        <div
          className="w-full h-[50%] bg-white"
          style={{
            backgroundImage: `url('https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png')`,
          }}
        ></div>
        <div
          className="w-full h-[50%] bg-[#e1eaf4]"
          style={{
            backgroundImage: `url('https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png')`,
          }}
        ></div>
        <img
          className="absolute"
          src="https://assets.website-files.com/5837424ae11409586f837994/6119d83a539ea14de7db7bac_Group%2022.svg"
          alt=""
        />
        <img
          className="max-w-none absolute right-0 w-24 md:w-36 top-[-10%] md:top-[-20%] z-[2]"
          src="https://assets.website-files.com/5837424ae11409586f837994/6297eb6a4aa99cf45a3a1068_26.svg"
          alt=""
        />
      </div>
    </>
  );
}

export default Benefits;
