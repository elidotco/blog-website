import React from "react";
import icon from "./Icon (7).png";
import icon1 from "./Icon (8).png";
import image from "./Sub Container.png";

import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
const HomeFilesSection = ({ name, iconn, desc }) => {
  const icons = [icon, icon1];
  return (
    <div className="flex justify-between flex-wrap md:justify-center border-b border-[#262626]">
      <div className="lg:w-[40%] w-full px-5 lg:px-20 py-5 lg:py-20 border-r  justify-center flex flex-col gap-4 lg:gap-9 border-[#262626]">
        {/* Logo */}
        <img src={icons[iconn]} alt="Icons" className="w-16 h-16" />
        {/* Logo */}
        <h1 className=" text-[24px] md:text-[30px] text-semibold ">{name}</h1>
        <p className="text-[#98989a]"> {desc} </p>
        <a
          href="/"
          className="w-full text-center flex  items-center justify-center bg-[#1a1a1a] border-[#262626] rounded-lg py-3 border gap-1"
        >
          Download Ebooks Now
          <ArrowUpRightIcon className="w-5 h-5 text-[#ffd11a]" />
        </a>
        <div className="w-full text-center flex  items-center justify-between bg-[#1a1a1a] border-[#262626] rounded-lg py-3 px-5 border gap-1 ">
          <div className="flex-col flex text-left flex-1 ">
            <p className="text-[#98989a]"> Downloaded By</p>
            <p className=""> 10k + Users</p>
          </div>
          <img src={image} alt="" className="w-1/2 h-auto" />
        </div>
      </div>

      <div className="w-full md:w-[60%]  flex flex-wrap justify-around gap-10 px-5 lg:pr-20 py-5 lg:py-20 "></div>
    </div>
  );
};

export default HomeFilesSection;
