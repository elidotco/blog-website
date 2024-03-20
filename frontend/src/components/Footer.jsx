import React from "react";
import logo from "./logo.png";
import HeroCard from "./HeroCard";
const Footer = () => {
  return (
    <footer>
      <div className="bg-[#1a1a1a] py-14 text-left flex w-full justify-between px-5 md:px-10 lg:px-20 items-center gap-8 flex-col ">
        <img src={logo} alt="" className="w-32 h-32" />
        <div className="flex flex-col text-left w-full">
          <p className="bg-[#333] px-2 py-1 w-fit">
            Learn, Connect, and Innovate
          </p>
          <h1 className="text-[28px] lg:text-[40px] w-full">
            Be Part of the Future Tech Revolution
          </h1>
          <p className="text-[#7e7e81]">
            Immerse yourself in the world of future technology. Explore our
            comprehensive resources, connect with fellow tech enthusiasts, and
            drive innovation in the industry. Join a dynamic community of
            forward-thinkers.
          </p>
        </div>
        <HeroCard
          icon={0}
          name="Latest News Updates"
          type="Stay Current"
          desc="Over 1,000 articles published monthly"
        />
      </div>
    </footer>
  );
};

export default Footer;
