import React from "react";
import FeaturesCard from "./FeaturesCard";
import logo1 from "./Icon (5).png";
import logo2 from "./Icon (6).png";

const FeaturesContainer = ({ data, name, desc, icon }) => {
  const images = [logo1, logo2];
  return (
    <div className="flex justify-between flex-wrap md:justify-center border-b border-[#262626]">
      <div className="lg:w-[40%] w-full px-5 lg:px-20 py-5 lg:py-20 border-r  justify-center flex flex-col gap-4 lg:gap-9 border-[#262626]">
        {/* Logo */}
        <img src={images[icon]} alt="Icons" className="w-16 h-16" />
        {/* Logo */}
        <h1 className=" text-[24px] md:text-[30px] text-semibold ">{name}</h1>
        <p className="text-[#98989a]">{desc}</p>
      </div>
      <div className="w-full md:w-[60%]  flex flex-wrap justify-around gap-10 px-5 lg:pr-20 py-5 lg:py-20 ">
        {data.map((item) => (
          <FeaturesCard data={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesContainer;
