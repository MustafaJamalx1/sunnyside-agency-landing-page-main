import React from "react";

const LearnMore = (props) => {
  const red = "red";
  return (
    <div>
      <img src={`./images/mobile/${props.image}`} alt="" />
      <div className="text-center py-[4rem] px-8 flex flex-col gap-4 items-center">
        <h2 className="text-4xl font-serif font-[1000]">{props.title}</h2>
        <p className="text-[#5a636c]">{props.p}</p>
        <button className=" w-fit text-[#23303e] font-LibreBaskerville font-[600] relative flex justify-center">
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
