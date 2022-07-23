import React from "react";

function Memberships() {
  return (
    <>
      <section
        className="overflow-hidden pt-16 px-4 md:px-16 pb-10 bg-auto bg-[#fbe8de]"
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
          <div className="mt-16 grid md:grid-cols-4 gap-4 md:gap-1">
            <section>
              <div
                className="relative flex flex-col h-fit md:min-h-[450px] justify-between pt-16 px-8 pb-8 bg-white text-black text-start md:gap-8"
                style={{
                  backgroundImage: `url('https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png')`,
                }}
              >
                <div>
                  <div className="text-2xl font-extrabold tracking-tighter">
                    Monthly
                  </div>
                  <div className="mt-3 text-md font-light">
                    No minimum commitment. Pause or cancel anytime.
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold tracking-tighter mt-7">
                    $4,995/m
                  </div>
                  <div className="text-xs opacity-50 ">
                    Pause or cancel anytime
                  </div>
                  <div className="butten mt-10 block text-center">
                    <a
                      className="w-full mx-auto px-7 bg-black rounded-lg flex items-center justify-center font-bold text-base py-4 text-center text-white no-underline tracking-wide transition duration-200 hover:-translate-y-1"
                      style={{
                        boxShadow: `6px 6px 0 0 rgb(0 0 0 / 20%)`,
                        transition: "0.2s",
                      }}
                    >
                      <div className="inline-block">Get started</div>
                    </a>
                  </div>
                  <div className="mt-6 font-semibold text-sm w-fit md:mx-auto border-b-2 border-dotted border-black">
                    Book a call
                  </div>
                </div>
                <div className="absolute left-[9%] top-[-3%] right-auto bottom-auto flex py-[6px] px-[9px] justify-center items-center bg-[#ea552b]  rounded-md text-white text-xs font-semibold rotate-[-9deg]">
                  <div> MOST POPULAR</div>
                </div>
                <img
                  className="absolute left-[22%] top-[-10%] w-[20px] right-auto bottom-auto"
                  src="https://assets.website-files.com/5837424ae11409586f837994/611c2385076821ad95ae18bc_45.svg"
                  alt=""
                />
              </div>
              <div
                className="h-fit md:min-h-[350px] mt-1 p-7 flex flex-col justify-between bg-white text-left"
                style={{
                  backgroundImage: `url('https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png')`,
                }}
              >
                <div className="text-sm ">
                  <div className="font-bold ">What&apos;s included:</div>
                  <ul className="mt-5 pl-4 mb-3 list-disc text-[#333]">
                    <li className="mb-3">Unlimited requests</li>
                    <li className="mb-3">Unlimited brands</li>

                    <li className="mb-3">Unlimited users</li>
                    <li className="mb-3">
                      Unlimited stock photos via Shutterstock
                    </li>
                    <li className="mb-3">Pause or cancel anytime</li>
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <div
                className="relative flex flex-col h-fit md:min-h-[450px] justify-between pt-16 px-8 pb-8 bg-white text-black text-start md:gap-8"
                style={{
                  backgroundImage: `url('https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png')`,
                }}
              >
                <div>
                  <div className="text-2xl font-extrabold tracking-tighter">
                    Quarterly
                  </div>
                  <div className="mt-3 text-md font-light">
                    Save $500 per month.
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold tracking-tighter mt-7">
                    $4,995/m
                  </div>
                  <div className="text-xs opacity-50 ">Paid quarterly</div>
                  <div className="butten mt-10 block text-center">
                    <a
                      className="w-full mx-auto px-7 bg-black rounded-lg flex items-center justify-center font-bold text-base py-4 text-center text-white no-underline tracking-wide transition duration-200 hover:-translate-y-1"
                      style={{
                        boxShadow: `6px 6px 0 0 rgb(0 0 0 / 20%)`,
                        transition: "0.2s",
                      }}
                    >
                      <div className="inline-block">Get started</div>
                    </a>
                  </div>
                  <div className="mt-6 font-semibold text-sm w-fit md:mx-auto border-b-2 border-dotted border-black">
                    Book a call
                  </div>
                </div>
              </div>
              <div
                className="f-fit md:min-h-[350px] mt-1 p-7 flex flex-col justify-between bg-white text-left"
                style={{
                  backgroundImage: `url('https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png')`,
                }}
              >
                <div className="text-sm ">
                  <div className="font-bold ">What&apos;s included:</div>
                  <ul className="mt-5 pl-4 mb-3 list-disc text-[#333]">
                    <li className="mb-3">Unlimited requests</li>
                    <li className="mb-3">Unlimited brands</li>

                    <li className="mb-3">Unlimited users</li>
                    <li className="mb-3">
                      Unlimited stock photos via Shutterstock
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <div
                className="relative flex flex-col h-fit md:min-h-[450px] justify-between pt-16 px-8 pb-8 bg-white text-black text-start md:gap-8"
                style={{
                  backgroundImage: `url('https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png')`,
                }}
              >
                <div>
                  <div className="text-2xl font-extrabold tracking-tighter">
                    Yearly
                  </div>
                  <div className="mt-3 text-md font-light">
                    Save $1,000 per month.
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold tracking-tighter mt-7">
                    $3,995/m
                  </div>
                  <div className="text-xs opacity-50 ">Paid annually</div>
                  <div className="butten mt-10 block text-center">
                    <a
                      className="w-full mx-auto px-7 bg-black rounded-lg flex items-center justify-center font-bold text-base py-4 text-center text-white no-underline tracking-wide transition duration-200 hover:-translate-y-1"
                      style={{
                        boxShadow: `6px 6px 0 0 rgb(0 0 0 / 20%)`,
                        transition: "0.2s",
                      }}
                    >
                      <div className="inline-block">Get started</div>
                    </a>
                  </div>
                  <div className="mt-6 font-semibold text-sm w-fit md:mx-auto border-b-2 border-dotted border-black">
                    Book a call
                  </div>
                </div>
              </div>
              <div
                className="h-fit md:min-h-[350px] mt-1 p-7 flex flex-col justify-between bg-white text-left"
                style={{
                  backgroundImage: `url('https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png')`,
                }}
              >
                <div className="text-sm ">
                  <div className="font-bold ">What&apos;s included:</div>
                  <ul className="mt-5 pl-4 mb-3 list-disc text-[#333]">
                    <li className="mb-3">Unlimited requests</li>
                    <li className="mb-3">Unlimited brands</li>

                    <li className="mb-3">Unlimited users</li>
                    <li className="mb-3">
                      Unlimited stock photos via Shutterstock
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <div
                className="relative flex flex-col p-8 bg-[#fbe8de]  md:bg-white text-center justify-center gap-8 text-sm text-[#333] h-fit md:min-h-[805px]"
                style={{
                  backgroundImage: `url('https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png')`,
                }}
              >
                <div className="pb-8 border-b border-[#000]">
                  <img
                    className="mb-5 mx-auto"
                    src="https://assets.website-files.com/5837424ae11409586f837994/611abc6c32fdaa097c267b19_dFrame.svg"
                    alt=""
                  />
                  <div className="text-2xl font-extrabold tracking-tighter text-black">
                    Book a call
                  </div>
                  <div className="mt-3 text-md font-light">
                    Learn more about how DesignJoy works and how it can help
                    you.
                  </div>
                  <div className="text-sm mt-5 font-extrabold tracking-tighter text-black">
                    Book a call
                  </div>
                </div>
                <div>
                  <img
                    className="mb-5 mx-auto"
                    src="https://assets.website-files.com/5837424ae11409586f837994/611abc6c5e7a2adf4b36ad2c_ddGroup.svg"
                    alt=""
                  />
                  <div className="text-2xl font-extrabold tracking-tighter mt-7 text-black">
                    Refer a friend & earn
                  </div>
                  <div className="text-sm mt-3">
                    Earn 5% monthly recurring commissions for each referral.
                  </div>

                  <div className="text-sm mt-5 font-extrabold tracking-tighter text-black">
                    Join now
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div
            className="flex px-4 py-14 md:p-14 items-center justify-center border border-[#ffffff2e] bg-[#000] text-white text-center"
            style={{
              backgroundImage: `url('https://assets.website-files.com/5837424ae11409586f837994/611b2d3c1a84f270060c9ec1_Texture.png')`,
            }}
          >
            <div>
              <div className="bg-[#fdd900] mx-auto mb-6 rounded-3xl text-xs font-semibold tracking-tighter uppercase py-[6px] px-[14px] text-black w-fit">
                ADD-ON
              </div>
              <h2 className="text-3xl mb-4 font-bold">Webflow development</h2>
              <div className="mt-[6px] text-[15px]">
                Get a better website faster with Webflow development. Requires a
                design subscription.
              </div>
              <h2 className="mt-6 text-3xl tracking-tight font-bold">$999/m</h2>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center justify-center h-32 relative z-[1]">
        <div
          className="w-full h-[50%] bg-[#fbe8de]"
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
          src="https://assets.website-files.com/5837424ae11409586f837994/6119d6836ada862d90f89116_Divider.svg"
          alt=""
        />
        <img
          className="right max-w-none absolute right-0 w-24 md:w-36 top-[-10%] md:top-[-20%] z-[2]"
          src="https://assets.website-files.com/5837424ae11409586f837994/6297ec2ebcb979c203dd1714_60.svg"
          alt=""
        />
        <img
          className="left absolute bottom-0 md:bottom-[-84%] left-0 w-[90px] md:w-[110px] top-auto right-auto"
          src="https://assets.website-files.com/5837424ae11409586f837994/6297ed366f3e626f630528ee_61.svg"
          alt=""
        />
      </div>
    </>
  );
}

export default Memberships;
