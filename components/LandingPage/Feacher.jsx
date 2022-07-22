import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { ImLoop2 } from "react-icons/im";
import { DiMagento } from "react-icons/di";

function Feacher() {
  return (
    <>
      <section
        className="hero2 overflow-hidden pt-24 pb-24 bg-auto bg-white px-4 md:px-16"
        style={{
          backgroundImage: `url('https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png')`,
        }}
      >
        <div className="container relative z-[2] max-w-6xl mx-auto text-center">
          <h2 className="max-w-xl mx-auto font-bold text-4xl md:text-5xl mt-0 mb-2 tracking-wide leading-[60px]">
            We didn&apos;t reinvent the wheel, just design
          </h2>
          <p className="mt-5 text-xl md:text-2xl font-normal max-w-xl mx-auto text-[#333]">
            Design as you know it is out the door. Design as you want it just
            arrived.
          </p>
        </div>
        <div className="text-xl leading-6 mx-auto mt-20 max-w-5xl grid grid-row-3 md:grid-cols-3 gap-10 ">
          <div>
            <div className="icon flex w-20 text-[#333] h-20 mx-auto mb-6">
              <AiOutlineMail className="w-full h-full" />
            </div>
            <div className="max-w-xs text-[#333] text-center mx-auto">
              Subscribe to a plan & request as many designs as you&apos;d like.
            </div>
          </div>
          <div>
            <div className="icon flex w-20 text-[#333] h-20 mx-auto mb-6">
              <DiMagento className="w-full h-full" />
            </div>
            <div className="max-w-xs text-[#333] text-center mx-auto">
              Receive your design within a few business days on average, Monday
              to Friday.
            </div>
          </div>
          <div>
            <div className="icon flex w-20 text-[#333] h-20 mx-auto mb-6">
              <ImLoop2 className="w-full h-full" />
            </div>
            <div className="max-w-xs text-[#333] text-center mx-auto">
              We&apos;ll revise the designs until you&apos;re 100% satisfied.
            </div>
          </div>
        </div>
        <div
          className="bg-auto bg-[#fbe8de] font-black text-center text-3xl leading-10 mt-20 p-10 md:p-16 relative tracking-wide z-[1]"
          style={{
            backgroundImage: `url('https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png')`,
          }}
        >
          <div className="max-w-xl mx-auto">
            <img
              src="https://assets.website-files.com/5837424ae11409586f837994/6119d7a83723f6d0114590ab_quotation.svg"
              loading="lazy"
              alt=""
              className="mb-7 mx-auto"
            />
            <div>Designjoy shows that they know the art of subtlety.</div>
            <img
              src="https://assets.website-files.com/5837424ae11409586f837994/6119d7e989cff23b39d11a86_webflow.svg"
              loading="lazy"
              alt=""
              className="mt-7 mx-auto w-[110px]"
            />
          </div>
          <img
            className="absolute left-[-5%] bottom-[10%] top-auto right-auto w-[60px] md:w-fit"
            src="https://assets.website-files.com/5837424ae11409586f837994/6119d9897e15e38d7e0c8bea_52.svg"
            alt=""
          />
          <img
            className="absolute top-[-4%] right-[-4%] left-auto bottom-auto w-[120px] md:w-fit"
            src="https://assets.website-files.com/5837424ae11409586f837994/6297ebf6a202e770d1a0fd48_420.svg"
            alt=""
          />
        </div>
      </section>
      <div className="flex flex-col items-center justify-center h-32 relative z-[1]">
        <div
          className="w-full h-[50%] bg-white"
          style={{
            backgroundImage: `url('https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png')`,
          }}
        >
          <img
            className="max-w-none absolute right-0 w-[100px] md:w-56 top-[-10%] md:top-[-100%] z-[2]"
            src="https://assets.website-files.com/5837424ae11409586f837994/6119d8b53723f635d94596f7_Group%2046.svg"
            alt=""
          />
          <img
            className="max-w-none absolute left-0 w-[80px] md:w-48 top[-50%] md:top-[-68%]"
            src="https://assets.website-files.com/5837424ae11409586f837994/6119d8eeae8fa3209c98f7c4_2.svg"
            alt=""
          />
        </div>
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
      </div>
    </>
  );
}

export default Feacher;
