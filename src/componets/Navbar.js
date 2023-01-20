import React from "react";
import NavComponets from "./NavComponets";
const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [dimension, setDimension] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  function handleClick() {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  }
  // window.addEventListener("resize", () => {
  //   setDimension({
  //     height: window.innerHeight,
  //     width: window.innerWidth,
  //   });
  //   console.log(dimension);
  // });
  console.log("hi");
  return (
    <div className="space-y-10">
      <div className="flex justify-between relative items-center">
        <a className="cursor-pointer" href="#">
          <img src="./images/logo.svg" className="lg:h-10" />
        </a>
        <img
          src="./images/icon-hamburger.svg"
          className="h-5 cursor-pointer lg:hidden"
          onClick={handleClick}
        />
        {/* <NavComponets /> */}
      </div>
      {showMenu && (
        <nav
          className="flex flex-col items-center gap-8 p-6 bg-white text-[#818498] w-[90%] text-xl absolute left-0 translate-x-[1rem]
        lg:hidden"
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
          {/* <NavComponets /> */}
        </nav>
      )}
    </div>
  );
};

export default Navbar;
