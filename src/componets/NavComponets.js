import React from "react";

const NavComponets = () => {
  return (
    <div
      className="lg:text-white
    flex flex-col lg:w-[33%] lg:justify-between lg:items-center"
    >
      <a href="#" className=" font-semibold cursor-pointer lg:text-lg ">
        About
      </a>
      <a href="#" className=" font-semibold cursor-pointer lg:text-lg">
        Service
      </a>
      <a href="#" className=" font-semibold cursor-pointer lg:text-lg">
        Projects
      </a>
      <a
        href="#"
        className="px-6 py-4 text-black text-base font-sanserif font-extrabold rounded-full bg-[#fad400] lg:bg-[white] cursor-pointer "
      >
        CONTACT
      </a>
    </div>
  );
};

export default NavComponets;
