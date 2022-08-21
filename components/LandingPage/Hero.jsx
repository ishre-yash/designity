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
          backgroundImage: `url('/backgrounds/noise.png')`,
        }}
      >
        <img
          className="w-32 max-w-full block"
          src="/logos/name.svg"
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
          backgroundImage: `url('/backgrounds/noise.png')`,
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="16"
                className="mx-1"
                viewBox="0 0 18 16"
                fill="none"
              >
                <path
                  d="M16.9454 2.96437C16.6035 2.29836 16.11 1.72186 15.5048 1.28118C14.8995 0.840507 14.1993 0.54794 13.4605 0.426992C12.7216 0.306043 11.9647 0.360085 11.2505 0.584774C10.5364 0.809463 9.88486 1.19854 9.34836 1.72073L8.72727 2.28873L8.12581 1.74109C7.59056 1.20878 6.93598 0.81191 6.21649 0.583464C5.497 0.355018 4.73338 0.301597 3.98909 0.42764C3.24911 0.543013 2.54734 0.833292 1.94209 1.27436C1.33683 1.71543 0.84556 2.29456 0.509086 2.96364C0.0593222 3.84503 -0.0978456 4.84683 0.060396 5.82361C0.218637 6.80039 0.684053 7.70133 1.38909 8.39564L8.20581 15.4182C8.27359 15.4879 8.35466 15.5433 8.44423 15.5812C8.53379 15.619 8.63004 15.6385 8.72727 15.6385C8.8245 15.6385 8.92074 15.619 9.01031 15.5812C9.09988 15.5433 9.18095 15.4879 9.24872 15.4182L16.056 8.40873C16.7639 7.71375 17.2318 6.81118 17.3918 5.83212C17.5517 4.85306 17.3954 3.84851 16.9454 2.96437Z"
                  fill="#EE8DB9"
                />

                <defs>
                  <clipPath id="clip0">
                    <rect width="17.4545" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <div>, guaranteed</div>
            </div>
          </div>
        </div>
        <img
          className="absolute hidden md:block right-0 bottom-0 top-[13%] w-[16vw] max-w-[250px]"
          src="/img/heroLeft.svg"
          alt=""
        />
        <img
          className="absolute left-[-5%] md:left-0 top-[5%] md:top-[15%] right-auto bottom-auto max-w-[20vw] md:w-[16vw] md:max-w-[250px]"
          src="/img/heroRight.svg"
          alt=""
        />
      </section>
    </>
  );
}

export default Hero;
