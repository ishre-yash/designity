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

export default Navbar;
