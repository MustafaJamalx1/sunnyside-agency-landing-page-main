import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-[#90d4c5] min-h-[43vh] flex flex-col items-center py-[4rem]
    px-10 gap-10 text-[#458c7e]"
    >
      <a href="#" className="icon-change bg-[#2a7362] cursor-pointer"></a>

      <ul className="flex justify-between w-full">
        <li>
          <a className="font-bold text-lg" href="#">
            About
          </a>
        </li>
        <li>
          <a className="font-bold text-lg" href="#">
            Services
          </a>
        </li>
        <li>
          <a className="font-bold text-lg" href="#">
            Projects
          </a>
        </li>
      </ul>
      <ul className="flex w-[60%] justify-between mt-[2rem]">
        <li>
          <a>
            <img
              alt=""
              src="./images/icon-facebook.svg"
              className=" cursor-pointer"
            />
          </a>
        </li>
        <li>
          <a>
            <img
              alt=""
              src="./images/icon-instagram.svg"
              className="cursor-pointer"
            />
          </a>
        </li>
        <li>
          <a>
            <img
              alt=""
              src="./images/icon-twitter.svg"
              className="cursor-pointer"
            />
          </a>
        </li>
        <li>
          <a>
            <img
              alt=""
              src="./images/icon-pinterest.svg"
              className="cursor-pointer"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
