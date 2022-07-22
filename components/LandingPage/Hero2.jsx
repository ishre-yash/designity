import React from "react";

function Hero2() {
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
        <div className="grid mt-24 grid-row-2 md:grid-cols-2 gap-10">
          <div className="flex flex-col py-10 md:py-16 px-10 justify-center items-start bg-white font-bold text-3xl leading-8 md:leading-10 text-center md:text-left tracking-wide">
            <img
              src="https://assets.website-files.com/5837424ae11409586f837994/6119d7a83723f6d0114590ab_quotation.svg"
              loading="lazy"
              alt=""
              className=" mb-7 mx-auto md:mx-0"
            />
            <div>Design is everything, and these guys have nailed it.</div>
            <div className="flex flex-col md:flex-row mt-5 items-center mx-auto md:mx-0 md:mt-6">
              <div
                className="bg-black bg-no-repeat bg-cover h-10 md:mr-3 w-10 bg-current rounded-full"
                style={{
                  backgroundImage: `url('https://assets.website-files.com/5837424ae11409586f837994/6126a045ae4708114a9f6320_5fb3e6aa7b258c2dfe0928dc.jpeg')`,
                }}
              ></div>
              <div className="text-sm font-normal flex flex-col md:flex-col ">
                Kevin O&apos;Leary,
                <span className="font-semibold mt-2">
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
          className="max-w-none absolute left-0 w-[100px] md:w-48 top-[-20%] md:top-[-89%]"
          src="https://assets.website-files.com/5837424ae11409586f837994/6297eb5836e6730ddf0e6962_Group%2047.svg"
          alt=""
        />
      </div>
    </>
  );
}

export default Hero2;
