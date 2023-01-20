import React from "react";

const Hero = () => {
  return (
    <div className=" text-white mt-[8rem] mb-[6rem] flex flex-col justify-center items-center gap-5 lg:gap-24">
      <h1 className="text-5xl text-center tracking-widest font-extrabold font-sansSerif lg:text-7xl">
        WE ARE CREATIVES
      </h1>
      <img
        src="./images/icon-arrow-down.svg"
        className="h-[10rem] lg:-[1rem]"
        alt=""
      />
    </div>
  );
};

export default Hero;
