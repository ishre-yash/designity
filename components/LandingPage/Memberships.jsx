import React from "react";

function Memberships() {
  return (
    <>
      <section
        className="hero overflow-hidden pt-16 px-4 md:px-16 pb-10 bg-auto"
        style={{
          backgroundImage: `url('https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png')`,
        }}
      >
        <div className="container relative z-[2] max-w-6xl mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Memberships levels
            </h1>
            <p className="mt-5 text-xl md:text-2xl traking-tight">
              Choose a plan that&apos;s right for you.
            </p>
            <img
              className="mx-auto mt-16"
              src="https://assets.website-files.com/5837424ae11409586f837994/611abc817f5b796fe72d04e4_Group%2028.svg"
              alt=""
            />
          </div>
          <div className="mt-16 grid grid-cols-4 gap-2">
            <div>
              <div
                className="flex flex-col max-h-[450px] justify-between pt-16 px-8 pb-8 bg-white text-black text-start"
                style={{
                  backgroundImage: `url('https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png')`,
                }}
              >
                <div>
                  <div className="text-2xl font-extrabold tracking-tighter">
                    Monthly
                  </div>
                  <div className="mt-3 text-md">
                    No minimum commitment. Pause or cancel anytime.
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold tracking-tighter">
                    $4,995/m
                  </div>
                  <div className="text-xs opacity-50 ">
                    Pause or cancel anytime
                  </div>
                  <div className="butten mt-10 block text-center">
                    <a
                      className="w-fit mx-auto px-7 bg-black rounded-lg flex items-center justify-center font-bold text-base py-2 text-center text-white no-underline tracking-wide transition duration-200 hover:-translate-y-1"
                      style={{
                        boxShadow: `6px 6px 0 0 rgb(0 0 0 / 20%)`,
                        transition: "0.2s",
                      }}
                    >
                      <div className="inline-block">Get started</div>
                    </a>
                  </div>
                  <div className="mt-6 font-semibold text-center border-b-2 border-dotted">
                    Book a call
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Memberships;
