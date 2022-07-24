import React, { useState } from "react";
import Butten from "../UiComponents/Butten";
import { MobileNavbar } from "./Navbar";

function Hero() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        className="LOGO top-0 right-0 left-0 bottom-auto flex pt-8 items-center justify-between md:justify-center px-4 bg-[#f7e5db] relative z-50"
        style={{
          backgroundImage: `url('https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png')`,
        }}
      >
        <img
          className="w-32 max-w-full block"
          src="https://assets.website-files.com/5837424ae11409586f837994/614a5001679615173f8c6620_Group%202262.svg"
          alt=""
          loading="lazy"
        />
        <div
          className="block md:hidden bg-transparent relative float-right px-5 pb-2 cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            viewBox="0 0 30 30"
            width="25px"
            height="25px"
          >
            <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
          </svg>
        </div>
      </div>
      <MobileNavbar show={show} setShow={setShow} />
      <section
        id="hero"
        className="hero overflow-hidden pt-44 pb-10 bg-auto md:h-screen 2xl:h-[600px]"
        style={{
          backgroundImage: `url('https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png')`,
        }}
      >
        <div className="container relative z-[2] max-w-6xl mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-[53px] leading-[54px] md:text-[80px] md:leading-[90px] font-extrabold tracking-tight px-4">
              A design agency with a twist
            </h1>
            <p className="mt-5 text-xl md:text-2xl tracking-tighter">
              Design subscriptions to scale your business;
            </p>
            <Butten title="See plans" />

            <div className="flex mt-8 text-xs justify-center items-center font-normal">
              <div>Designs you&apos;ll</div>
              <img
                src="https://assets.website-files.com/5837424ae11409586f837994/61195da63e9b07d94bbaa046_heart.svg"
                loading="lazy"
                alt=""
                className="mx-1"
              />
              <div>, guaranteed</div>
            </div>
          </div>
        </div>
        <img
          className="absolute hidden md:block right-0 bottom-0 top-[13%] w-[16vw] max-w-[250px]"
          src="https://assets.website-files.com/5837424ae11409586f837994/61195ed506c73c67adaf0a3d_Group%2044.svg"
          alt=""
        />
        <img
          className="absolute left-[-5%] md:left-0 top-[5%] md:top-[15%] right-auto bottom-auto max-w-[20vw] md:w-[16vw] md:max-w-[250px]"
          src="https://assets.website-files.com/5837424ae11409586f837994/61195ef16ada8678daf3f267_Group%2045.svg"
          alt=""
        />
      </section>
    </>
  );
}

export default Hero;
