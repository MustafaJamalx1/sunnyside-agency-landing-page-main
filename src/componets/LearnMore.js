import React from "react";

const LearnMore = (props) => {
  const red = "red";
  return (
    <div className={`lg:flex ${props.id == 1 ? "lg:flex-row-reverse" : ""}`}>
      <img
        src={`./images/mobile/${props.image}`}
        alt=""
        className="md:hidden"
      />
      <img
        src={`./images/desktop/${props.deskImage}`}
        alt=""
        className="hidden md:block"
      />
      <div className="text-center py-[4rem] px-8 flex flex-col gap-4 items-center lg:justify-center lg:gap-6">
        <h2 className="text-4xl font-serif font-[1000] lg:text-5xl">
          {props.title}
        </h2>
        <p className="text-[#5a636c] lg:text-2xl">{props.p}</p>
        <button className=" w-fit text-[#23303e] font-LibreBaskerville font-[600] relative flex justify-center lg:text-2xl">
          LEARN MORE
          <div
            className={`h-2 ${props.btncolor} absolute w-[120%]  rounded-full -z-10 bottom-0`}
          ></div>
        </button>
      </div>
    </div>
  );
};

export default LearnMore;
