import React from "react";

function FooterMenu() {
  return (
    <>
      <section className="mt-[100px] flex flex-col md:flex-row justify-between items-start">
        <div className="max-w-lg flex flex-col md:flex-row items-start md:items-center text-left">
          <img
            className="w-36 mr-8 max-w-full"
            src="https://assets.website-files.com/5837424ae11409586f837994/614a5000615d62efc4f90f5f_Group%202263.svg"
            alt=""
          />
          <div className="flex mt-6 md:mt-0">
            <img
              className="w-10 mr-3"
              src="https://assets.website-files.com/5837424ae11409586f837994/611d718c63e40202e8a17cd3_Frame.svg"
              alt=""
            />
            <div className="max-w-[250px] text-left mt-6 md:mt-0 text-sm">
              Designjoy is headquartered in Phoenix, Arizona.
            </div>
          </div>
        </div>
        <div className="flex  justify-between items-start text-left mt-6 md:mt-0">
          <div className="mr-16 flex flex-col space-y-4">
            <a className="hover:text-[#EA552B]">Latest projects</a>
            <a className="hover:text-[#EA552B]">Pricing</a>
            <a className="hover:text-[#EA552B]">FAQs</a>
            <a className="hover:text-[#EA552B]">Contact</a>
          </div>
          <div className="flex flex-col space-y-4">
            <a className="hover:text-[#EA552B]">Client login</a>
            <a className="hover:text-[#EA552B]">Get started</a>
            <a className="hover:text-[#EA552B]">Terms & conditions</a>
            <a className="hover:text-[#EA552B]">Privacy policy</a>
          </div>
        </div>
      </section>
    </>
  );
}

function FooterHero() {
  return (
    <>
      <section
        className=" overflow-hidden relative pt-24 pb-28 bg-auto bg-black text-white px-6 md:px-16"
        style={{
          backgroundImage: `url('https://assets.website-files.com/5837424ae11409586f837994/611b2d3c1a84f270060c9ec1_Texture.png')`,
        }}
      >
        <div className="container relative z-[2] max-w-6xl mx-auto text-center">
          <h2 className="max-w-4xl mx-auto font-extrabold text-4xl md:text-5xl mt-0 mb-2 tracking-widest">
            See if Designjoy is right for you. (It totally is.)
          </h2>
          <p className="mt-5 text-xl font-normal tracking-tight max-w-3xl mx-auto">
            Get a guided tour through Designjoy, and find out how you and your
            team can change the way you source design, forever.
          </p>
          <div className="butten mt-10 block text-center">
            <a
              className="max-w-3xl mx-auto p-16  bg-black hover:bg-white rounded-3xl flex items-center justify-center font-bold text-[28px]  text-center text-white hover:text-black no-underline tracking-wide transition duration-200 hover:-translate-y-1 border border-white"
              style={{
                boxShadow: `6px 6px 0 0 rgb(255 255 255 / 20%)`,
                transition: "0.2s",
              }}
            >
              <div>Get started</div>
            </a>
          </div>
          <div className="mt-16 pt-10 flex justify-between flex-wrap gap-4 md:gap-0">
            <img
              className="h-6 mr-[2vw]"
              src="https://assets.website-files.com/5837424ae11409586f837994/61424c5418f01be24c52b682_Frame%2051.svg"
              alt=""
            />
            <img
              className="h-6 mr-[2vw]"
              src="https://assets.website-files.com/5837424ae11409586f837994/61424c5418f01be24c52b682_Frame%2051.svg"
              alt=""
            />
            <img
              className="h-6 mr-[2vw]"
              src="https://assets.website-files.com/5837424ae11409586f837994/620c0b65ac9e342dcd34db83_Nectar-sleep-logo-vector%201.svg"
              alt=""
            />
            <img
              className="h-6 mr-[2vw]"
              src="https://assets.website-files.com/5837424ae11409586f837994/6203180d8e14605fb2d2c003_Vector.svg"
              alt=""
            />
            <img
              className="h-6 mr-[2vw]"
              src="https://assets.website-files.com/5837424ae11409586f837994/61424c54ffa9064f6650375b_Group%2015.svg"
              alt=""
            />
            <img
              className="h-6 mr-[2vw]"
              src="https://assets.website-files.com/5837424ae11409586f837994/611b2dc537b655a389aaf3d7_5e1c980f4b6c084724851ee1_cometchat%201%201.svg"
              alt=""
            />
          </div>
          <FooterMenu />
        </div>
        <img
          className="absolute left-0 bottom-0 right-auto w-[100px] md:w-fit  top-auto"
          src="https://assets.website-files.com/5837424ae11409586f837994/611b30cc3e9ae0491a0ac358_25.svg"
          alt=""
        />
      </section>
    </>
  );
}

function Footer() {
  return (
    <>
      <FooterHero />
    </>
  );
}

export default Footer;
