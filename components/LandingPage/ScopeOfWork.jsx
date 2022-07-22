import React, { useState } from "react";

function ScopeOfWork() {
  const [work, setWork] = useState([
    {
      title: "Websites",
    },
    {
      title: "Slide decks",
    },
    {
      title: "Trade show banners",
    },
    {
      title: "Mobile apps",
    },
    {
      title: "Direct mail",
    },
    {
      title: "Email graphics",
    },
    {
      title: "Logos & branding",
    },
    {
      title: "Infographics",
    },
    {
      title: "Resumes",
    },
    {
      title: "Design systems",
    },
    {
      title: "Brochures",
    },
    {
      title: "Business cards",
    },
    {
      title: "SAAS",
    },
    {
      title: "Signage",
    },
    {
      title: "Packaging",
    },
    {
      title: "Wireframes",
    },
    {
      title: "Brand guides",
    },
    {
      title: "Blog graphics",
    },
    {
      title: "Stationery",
    },
    {
      title: "Social media graphics",
    },
    {
      title: "Digital ads",
    },
    {
      title: "Pitch decks",
    },
    {
      title: "Billboards",
    },
    {
      title: "Icons",
    },
  ]);
  return (
    <>
      <section
        className="benefits overflow-hidden py-16 bg-auto bg-white px-4 md:px-16"
        style={{
          backgroundImage: `url('https://assets.website-files.com/5837424ae11409586f837994/61195e21f792d7065d2f56ad_noise.png')`,
        }}
      >
        <div className="container relative z-[2] max-w-6xl mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Apps, websites, logos & more.
            </h1>
          </div>
          <div className="border-solid border-[6px] font-bold text-base mt-24 p-4 md:p-12 relative text-left border-[#fbe8de]">
            <div className="grid md:grid-cols-3 gap-8">
              {work.map((w, index) => {
                return (
                  <div
                    key={index}
                    className=" pb-4 border-b-[6px] border-[#fbe8de]"
                  >
                    <div>{w.title}</div>
                  </div>
                );
              })}
            </div>
            <img
              className="absolute left-auto md:left-[-5%] top-[-4%] right-[-5%] md:top-[-7%] md:right-auto bottom-auto w-[100px]"
              src="https://assets.website-files.com/5837424ae11409586f837994/6297eb5855799436cb408920_23.svg"
              alt=""
            />
          </div>
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
          className="w-full h-[50%] bg-[#fbe8de]"
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
          className="max-w-none absolute right-0 w-24 md:w-36 top-[-10%] md:top-[-20%] z-[2]"
          src="https://assets.website-files.com/5837424ae11409586f837994/6297eb2700a23638c2e486ec_19.svg"
          alt=""
        />
        <img
          className="absolute bottom-[-84%] left-0 top-auto right-auto"
          src="https://assets.website-files.com/5837424ae11409586f837994/6297eb2738300c1fd0d4b4ff_43.svg"
          alt=""
        />
      </div>
    </>
  );
}

export default ScopeOfWork;
