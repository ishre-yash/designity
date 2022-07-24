import React, { useState } from "react";

function Navbar() {
  return (
    <>
      <nav className="fixed z-50 bottom-5 w-full hidden md:block">
        <div className="mx-auto flex items-center justify-between rounded-full bg-[#000] p-2 text-sm shadow-sm md:w-fit md:flex-row md:justify-center">
          <a
            href="#hero"
            className="relative block px-8 py-6 text-left mx-auto bg-transparent bg-[#2c2c2c] hover:bg-[#424242] text-sm font-bold rounded-full transition-all duration-200 ease-in-out bg-center bg-no-repeat bg-auto"
            style={{
              backgroundImage: `url('https://assets.website-files.com/5837424ae11409586f837994/624322b0c806026f5689d841_Group%2012569.svg')`,
            }}
          ></a>
          <a
            href="#benefits"
            className="relative block px-4 py-3 text-left mx-auto bg-transparent text-white text-sm font-bold rounded-full hover:bg-white hover:text-black transition-all duration-200 ease-in-out"
          >
            Benefits
          </a>
          <a
            href="#latest"
            className="relative block px-4 py-3 text-left mx-auto bg-transparent text-white text-sm font-bold rounded-full hover:bg-white hover:text-black transition-all duration-200 ease-in-out"
          >
            Recent work
          </a>
          <a
            href="#sow"
            className="relative block px-4 py-3 text-left mx-auto bg-transparent text-white text-sm font-bold rounded-full hover:bg-white hover:text-black transition-all duration-200 ease-in-out"
          >
            Scope of work
          </a>
          <a
            href="#pricing"
            className="relative block px-4 py-3 text-left mx-auto bg-transparent text-white text-sm font-bold rounded-full hover:bg-white hover:text-black transition-all duration-200 ease-in-out"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="relative block px-4 py-3 text-left mx-auto bg-transparent text-white text-sm font-bold rounded-full hover:bg-white hover:text-black transition-all duration-200 ease-in-out"
          >
            FAQs
          </a>
          <a
            href="#login"
            className="relative block px-4 py-3 text-left mx-auto bg-transparent text-white text-sm font-bold rounded-full bg-[#2c2c2c] hover:bg-[#424242] transition-all duration-200 ease-in-out"
          >
            Login
          </a>
        </div>
      </nav>
    </>
  );
}
function MobileNavbar({ show, setShow }) {
  return (
    <>
      <section
        className={`${show ? "block" : "hidden"} absolute z-[100] md:hidden`}
      >
        <div className="w-screen h-fit bg-white antialiased relative flex items-center overflow-hidden text-center p-4 flex flex-col">
          <a
            href="#latest"
            onClick={() => setShow(!show)}
            className="w-full text-left text-base p-5 font-bold leading-4 text-[#222222]"
          >
            Latest projects
          </a>
          <a
            href="#pricing"
            onClick={() => setShow(!show)}
            className="w-full text-left text-base p-5 font-bold leading-4 text-[#222222]"
          >
            Pricing
          </a>
          <a
            href="#faq"
            onClick={() => setShow(!show)}
            className="w-full text-left text-base p-5 font-bold leading-4 text-[#222222]"
          >
            FAQs
          </a>
          <a
            href="#login"
            onClick={() => setShow(!show)}
            className="w-full text-left text-base p-5 font-bold leading-4 text-[#222222]"
          >
            Login
          </a>
        </div>
      </section>
    </>
  );
}

export { Navbar, MobileNavbar };
