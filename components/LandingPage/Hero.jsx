import React from "react";
import Butten from "../UiComponents/Butten";

function Hero() {
  return (
    <>
      <div className="LOGO absolute top-0 right-0 left-0 bottom-auto flex pt-8 items-center justify-center">
        <img
          className="w-32 max-w-full block"
          src="https://assets.website-files.com/5837424ae11409586f837994/614a5001679615173f8c6620_Group%202262.svg"
          alt=""
          loading="lazy"
        />
      </div>
      <section
        className="hero overflow-hidden pt-48 pb-10 bg-auto md:h-screen 2xl:h-[600px]"
        style={{
          backgroundImage: `url('https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png')`,
        }}
      >
        <div className="container relative z-[2] max-w-6xl mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              A design agency with a twist
            </h1>
            <p className="mt-5 text-xl md:text-2xl traking-tight">
              Design subscriptions to scale your business.
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
          className="absolute right-0 bottom-0 top-[13%] w-[16vw] max-w-[250px]"
          src="https://assets.website-files.com/5837424ae11409586f837994/61195ed506c73c67adaf0a3d_Group%2044.svg"
          alt=""
        />
        <img
          className="absolute left-0 top-[15%] w-[16vw] max-w-[250px]"
          src="https://assets.website-files.com/5837424ae11409586f837994/61195ef16ada8678daf3f267_Group%2045.svg"
          alt=""
        />
      </section>
    </>
  );
}

export default Hero;
