import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { ImLoop2 } from "react-icons/im";
import { DiMagento } from "react-icons/di";

function Hero1() {
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
        className="hero overflow-hidden pt-48 pb-10 bg-auto "
        style={{
          backgroundImage: `url('https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png')`,
        }}
      >
        <div className="container relative z-[2] max-w-6xl mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-7xl font-bold">A design agency with a twist</h1>
            <p className="mt-5 text-2xl">
              Design subscriptions to scale your business.
            </p>
            <div className="butten mt-10 block text-center">
              <a
                className="w-fit mx-auto px-16  bg-black rounded-lg flex items-center justify-center font-bold text-base py-6 text-center text-white no-underline tracking-wide transition duration-200 hover:-translate-y-1"
                style={{
                  boxShadow: `6px 6px 0 0 rgb(0 0 0 / 20%)`,
                  transition: "0.2s",
                }}
              >
                <div>See plans</div>
              </a>
            </div>
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

function Hero2() {
  return (
    <>
      <section
        className="hero2 overflow-hidden pt-24 pb-24 bg-auto bg-white px-16"
        style={{
          backgroundImage: `url('https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png')`,
        }}
      >
        <div className="container relative z-[2] max-w-6xl mx-auto text-center">
          <h2 className="max-w-xl mx-auto font-bold text-5xl mt-0 mb-2 tracking-wide leading-[60px]">
            We didn&apos;t reinvent the wheel, just design
          </h2>
          <p className="mt-5 text-2xl font-normal max-w-xl mx-auto text-[#333]">
            Design as you know it is out the door. Design as you want it just
            arrived.
          </p>
        </div>
        <div className="text-xl leading-6 mx-auto mt-20 max-w-5xl grid grid-cols-3 gap-10 ">
          <div>
            <div className="icon flex w-20 text-[#333] h-20 mx-auto mb-6">
              <AiOutlineMail className="w-full h-full" />
            </div>
            <div className="max-w-xs text-[#333] text-center">
              Subscribe to a plan & request as many designs as you&apos;d like.
            </div>
          </div>
          <div>
            <div className="icon flex w-20 text-[#333] h-20 mx-auto mb-6">
              <DiMagento className="w-full h-full" />
            </div>
            <div className="max-w-xs text-[#333] text-center">
              Receive your design within a few business days on average, Monday
              to Friday.
            </div>
          </div>
          <div>
            <div className="icon flex w-20 text-[#333] h-20 mx-auto mb-6">
              <ImLoop2 className="w-full h-full" />
            </div>
            <div className="max-w-xs text-[#333] text-center">
              We&apos;ll revise the designs until you&apos;re 100% satisfied.
            </div>
          </div>
        </div>
        <div
          className="bg-auto bg-[#fbe8de] font-black text-center text-3xl leading-10 mt-20 p-16 relative tracking-wide z-[1]"
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
            className="absolute left-[-5%] bottom-[10%] top-auto right-auto"
            src="https://assets.website-files.com/5837424ae11409586f837994/6119d9897e15e38d7e0c8bea_52.svg"
            alt=""
          />
          <img
            className="absolute top-[-4%] right-[-4%] left-auto bottom-auto"
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
            className="max-w-none absolute right-0 w-56 top-[-110%] z-[2]"
            src="https://assets.website-files.com/5837424ae11409586f837994/6119d8b53723f635d94596f7_Group%2046.svg"
            alt=""
          />
          <img
            className="max-w-none absolute left-0 w-48 top-[-68%]"
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

function Hero3() {
  return (
    <>
      <section
        className="hero2 overflow-hidden pt-24 pb-24 bg-auto bg-[#e1eaf4] px-16"
        style={{
          backgroundImage: `url('https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png')`,
        }}
      >
        <div className="container relative z-[2] max-w-6xl mx-auto text-center">
          <h2 className="max-w-xl mx-auto font-bold text-5xl mt-0 mb-2 tracking-wide leading-[60px]">
            It&apos;s &ldquo;you&apos;ll{" "}
            <span
              className=""
              style={{
                backgroundImage: `url(
                  "https://assets.website-files.com/5837424ae11409586f837994/61425085fefcfd2c00b1be93_Vector.svg"
                )`,
                backgroundPosition: `50% 100%`,
                backgroundSize: `contain`,
                backgroundRepeat: `no-repeat`,
              }}
            >
              never
            </span>{" "}
            go back&rdquo; better
          </h2>
          <p className="mt-5 text-2xl font-normal max-w-xl mx-auto text-[#333]">
            Designjoy replaces unreliable freelancers and expensive agencies for
            one flat monthly fee, with designs delivered so fast that it will
            blow your mind.
          </p>
        </div>
        <div className="grid mt-24 grid-cols-2 gap-10">
          <div className="flex flex-col py-16 px-10 justify-center items-start bg-white font-bold text-3xl leading-10 text-left tracking-wide">
            <img
              src="https://assets.website-files.com/5837424ae11409586f837994/6119d7a83723f6d0114590ab_quotation.svg"
              loading="lazy"
              alt=""
              className=" mb-7"
            />
            <div>Design is everything, and these guys have nailed it.</div>
            <div className="flex mt-5 items-center">
              <div
                className="bg-black bg-no-repeat bg-cover h-10 mr-3 w-10 bg-current rounded-full"
                style={{
                  backgroundImage: `url('https://assets.website-files.com/5837424ae11409586f837994/6126a045ae4708114a9f6320_5fb3e6aa7b258c2dfe0928dc.jpeg')`,
                }}
              ></div>
              <div className="text-sm font-normal">
                Kevin O&apos;Leary,
                <span className="font-semibold">
                  🦈 <strong>Shark Tank</strong>
                </span>{" "}
              </div>
            </div>
          </div>
          <div className="pr-10 space-y-5">
            <div>
              <div className="mb-2 font-bold text-xl">Totally async</div>
              <p className="max-w-lg text-lg text-[#333]">
                Don&apos;t like meetings? We don&apos;t either; so much so that
                we&apos;ve outlawed them completely.
              </p>
            </div>
            <div>
              <div className="mb-2 font-bold text-xl">Manage with Trello</div>
              <p className="max-w-lg text-lg text-[#333]">
                Manage your design board using Trello. View active, queued and
                completed tasks with ease.
              </p>
            </div>
            <div>
              <div className="mb-2 font-bold text-xl">
                Invite unlimited team members
              </div>
              <p className="max-w-lg text-lg text-[#333]">
                Invite your entire team, so anyone can submit requests and track
                their progress.
              </p>
            </div>
          </div>
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
        <img
          className="max-w-none absolute left-0 w-48 top-[-89%]"
          src="https://assets.website-files.com/5837424ae11409586f837994/6297eb5836e6730ddf0e6962_Group%2047.svg"
          alt=""
        />
      </div>
    </>
  );
}

function Hero() {
  return (
    <>
      <Hero1 />
      {/* slider */}
      {/* slider */}
      <Hero2 />
      <Hero3 />
    </>
  );
}

export default Hero;
