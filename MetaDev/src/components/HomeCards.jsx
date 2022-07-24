import React from "react";

const HomeCards = ({ image, description }) => {
  return (
    <div className="w-[220px] border-2 bg-white drop-shadow-md mb-10  hover:scale-105 duration-300 ease-in-out rounded-lg h-[120px] p-6 flex flex-col items-center justify-center ">
      <img className="w-12 mb-4" src={image} alt="Banner Images" />
      <div className=" font-inter text-sm font-semibold">{description}</div>
    </div>
  );
};

export default HomeCards;
