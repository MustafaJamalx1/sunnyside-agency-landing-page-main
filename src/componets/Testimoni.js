import React from "react";

const Testimoni = (props) => {
  return (
    <blockquote className="flex flex-col justify-center items-center gap-10">
      <img
        src={props.image}
        alt=""
        className="rounded-full
      h-[5rem]"
      />
      <p className="font-bold text-[#818498]">{props.p}</p>
      <div className="flex flex-col gap-1">
        <p className="text-xl font-serif font-bold ">{props.author}</p>
        <p className="text-[#a7abae]">{props.authorJob}</p>
      </div>
    </blockquote>
  );
};

export default Testimoni;
