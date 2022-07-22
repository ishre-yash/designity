import React from "react";

function RecentWork() {
  return (
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
        <div className="butten mt-10 block text-center">
          <a
            className="w-fit mx-auto px-16  bg-black rounded-lg flex items-center justify-center font-bold text-[17px] py-6 text-center text-white no-underline tracking-wide transition duration-200 hover:-translate-y-1"
            style={{
              boxShadow: `6px 6px 0 0 rgb(0 0 0 / 20%)`,
              transition: "0.2s",
            }}
          >
            <div>View recent work</div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default RecentWork;
