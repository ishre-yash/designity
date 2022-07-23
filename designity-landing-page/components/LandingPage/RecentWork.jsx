import React from "react";
import Butten from "../UiComponents/Butten";

function RecentWork() {
  return (
    <>
      <section
        className="hero2 overflow-hidden pt-24 pb-24 bg-auto bg-[#e1eaf4] px-6 md:px-16"
        style={{
          backgroundImage: `url('https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png')`,
        }}
      >
        <div className="container relative z-[2] max-w-6xl mx-auto text-center">
          <h2 className="max-w-xl mx-auto font-bold text-[42px] md:text-5xl mt-0 mb-2 tracking-wide leading-[60px]">
            Recent work
          </h2>
          <p className="mt-5 text-2xl font-normal max-w-xl mx-auto text-[#333]">
            Award winning designs, and nothing less.
          </p>
          <Butten title="View recent work" />
        </div>
        <div className="my-16 grid grid-rows-4 md:grid-rows-2 md:grid-cols-2 gap-10">
          <img
            className="max-w-full"
            src="https://assets.website-files.com/5837424ae11409586f837994/61251d9c096822eb44901aeb_Kam.jpg"
            alt=""
          />
          <img
            className="max-w-full"
            src="https://assets.website-files.com/5837424ae11409586f837994/61251d9b71751f8295add479_Kam-6.jpg"
            alt=""
          />
          <img
            className="max-w-full"
            src="https://assets.website-files.com/5837424ae11409586f837994/6297f90ce2dea4686ad55630_Kam.jpg"
            alt=""
          />
          <img
            className="max-w-full"
            src="https://assets.website-files.com/5837424ae11409586f837994/618afe35fde37ec4b6ea5328_Kam-p-800.jpeg"
            alt=""
          />
        </div>
        <div className="mb-3 font-bold text-lg text-center">
          {" "}
          Designs commonly featured by
        </div>
        <div className="flex max-w-xl mx-auto mt-7 items-center justify-between flex-wrap space-y-4">
          <img
            className="h-5 md:h-6 "
            src="https://assets.website-files.com/5837424ae11409586f837994/5e9ba463b27cf60b2c9a7554_dribbble-logo.svg"
            alt=""
          />
          <img
            className="h-5 md:h-6 "
            src="https://assets.website-files.com/5837424ae11409586f837994/5e9ba4634c5ff90b59c1abdf_lapa-logo.svg"
            alt=""
          />
          <img
            className="h-5 md:h-6 "
            src="https://assets.website-files.com/5837424ae11409586f837994/5e9ba46388adf7d226b3bd2e_awwwards-seeklogo.com.svg"
            alt=""
          />
          <img
            className="h-5 md:h-6 mx-auto md:mx-0"
            src="https://assets.website-files.com/5837424ae11409586f837994/5e9ba4639aae7e3a14b5f282_product-hunt-logo-horizontal-black.svg"
            alt=""
          />
        </div>
      </section>
      <div className="flex flex-col items-center justify-center h-32 relative z-[1]">
        <div
          className="w-full h-[50%] bg-[#e1eaf4]"
          style={{
            backgroundImage: `url('https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png')`,
          }}
        ></div>
        <div
          className="w-full h-[50%] bg-white"
          style={{
            backgroundImage: `url('https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png')`,
          }}
        ></div>
        <img
          className="absolute"
          src="https://assets.website-files.com/5837424ae11409586f837994/611a98b21d362bb696f14734_Frame%2020.svg"
          alt=""
        />
      </div>
      <section
        className="benefits overflow-hidden py-16 bg-auto bg-white px-4 md:px-16"
        style={{
          backgroundImage: `url('https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png')`,
        }}
      >
        <div className="container relative z-[2] max-w-6xl mx-auto text-center">
          <div
            className="bg-auto bg-[#fbe8de] font-black text-center text-3xl leading-10 p-10 md:p-16 relative tracking-wide z-[1]"
            style={{
              backgroundImage: `url('https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png')`,
            }}
          >
            <div className="max-w-lg">
              <h2 className="max-w-lg text-start font-bold text-4xl md:text-5xl mt-0 mb-2 tracking-wide leading-[60px]">
                Funky Scribbbles
              </h2>
              <p className="mt-5 text-xl font-normal max-w-xl text-start text-[#333]">
                A collection of funky vectorized scribbbles to spice up your
                design projects.
              </p>
              <div className="flex items-center justify-start">
                <Butten title="Check it out" />
              </div>
            </div>
            <div className="flex w-auto mt-14 justify-between items-center flex-wrap">
              <img
                className="h-6 md:h-8 mt-4"
                src="https://assets.website-files.com/5837424ae11409586f837994/615891285c041081e934ae15_google-2015%201.svg"
                alt=""
              />
              <img
                className="h-6 md:h-8 mt-4"
                src="https://assets.website-files.com/5837424ae11409586f837994/5f66affae8ee516bf496883a_Group%204.svg"
                alt=""
              />
              <img
                className="h-6 md:h-8 mt-4"
                src="https://assets.website-files.com/5837424ae11409586f837994/5f66affae8ee5173e096883b_Group%2019.svg"
                alt=""
              />
              <img
                className="h-6 md:h-8 mt-4"
                src="https://assets.website-files.com/5837424ae11409586f837994/5f66affae8ee51081496883e_verizon_new.svg"
                alt=""
              />
              <img
                className="h-6 md:h-8 mt-4"
                src="https://assets.website-files.com/5837424ae11409586f837994/5f66affae8ee51f97596883c_Asset%202.svg"
                alt=""
              />
              <img
                className="h-6 md:h-8 mt-4"
                src="https://assets.website-files.com/5837424ae11409586f837994/5f66affae8ee51ab6296883d_Group%207.svg"
                alt=""
              />
            </div>
            <img
              className="absolute left-auto max-w-[24vw] top-0 right-0 bottom-auto"
              src="https://assets.website-files.com/5837424ae11409586f837994/6297ec4b82aede5f3dfac579_eGroup%2049.svg"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default RecentWork;
