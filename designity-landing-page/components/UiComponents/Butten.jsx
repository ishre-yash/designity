import React from "react";

function Butten({ title }) {
  return (
    <div className="butten mt-10 block text-center">
      <a
        className="w-fit mx-auto px-16  bg-black rounded-lg flex items-center justify-center font-bold text-[17px] py-6 text-center text-white no-underline tracking-wide transition duration-200 hover:-translate-y-1"
        style={{
          boxShadow: `6px 6px 0 0 rgb(0 0 0 / 20%)`,
          transition: "0.2s",
        }}
      >
        <div>{title}</div>
      </a>
    </div>
  );
}

export default Butten;
