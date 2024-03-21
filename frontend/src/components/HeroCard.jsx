import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import icon1 from "./Icon.png";
import icon2 from "./Icon (1).png";
import icon3 from "./Icon (2).png";

const HeroCard = ({ footer, icon, name, type, desc }) => {
  const imageData = ["", icon1, icon2, icon3];
  return (
    <div
      className={
        footer
          ? "hero-card w-full lg:w-[31%] flex flex-col gap-5 py-5 px-5 md:px-5  bg-[#1a1a1a] rounded-xl"
          : "hero-card w-full lg:w-[31%] border-b flex flex-col gap-5 py-10 px-5 md:px-0 md:pr-5 md:border-r border-[#262626]"
      }
    >
      {/* Icon */}
      {/* Icons Logic to be added here */}
      {icon ? <img src={imageData[icon]} alt="" className="w-8 h-8" /> : ""}
      {/* Icon */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <p>{name}</p>
          <p className="text-[#7e7e81]">{type}</p>
        </div>
        {/*  */}
        <div className="flex justify-center p-2 bg-[#ffd11a] items-center rounded-full">
          <ArrowUpRightIcon className="w-5 h-5 text-[#141414]" />
        </div>
      </div>
      <p className="text-[#98989a]">{desc}</p>
    </div>
  );
};

export default HeroCard;
