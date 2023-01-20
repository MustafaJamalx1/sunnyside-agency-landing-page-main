import React from "react";

const photography = (props) => {
  const image =
    "bg-[url('./../public/images/mobile/image-graphic-design.jpg')]";
  return (
    <div
      className={`${props.bgImage} bg-no-repeat bg-cover bg-top px-6 py-8 max-h-[80vh]`}
    >
      <div
        className={`${props.textColor} mt-[24rem] text-center flex flex-col gap-7`}
      >
        <h2 className="text-3xl  font-LibreBaskerville">{props.title}</h2>
        <p className="text-base font-bold">{props.p}</p>
      </div>
    </div>
  );
};

export default photography;
