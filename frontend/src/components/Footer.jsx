import React from "react";
import logo from "./logo.png";
import HeroCard from "./HeroCard";
const Footer = () => {
  return (
    <footer>
      <div className="bg-[#1a1a1a] md:px-10 lg:px-20 px-5">
        <div className=" py-14 text-left flex w-full justify-between   items-center gap-8 flex-col lg:flex-row">
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
        </div>
        <div className="flex justify-between w-full bg-[#141414] p-4 rounded-xl">
          <HeroCard
            name="Resource Access"
            desc="Visitors can access a wide range of resources, including ebooks, whitepapers, reports."
            footer={true}
          />
          <HeroCard
            name="Community Forum"
            desc="Join our active community forum to discuss industry trends, share insights, and collaborate with peers."
            footer={true}
          />
          <HeroCard
            name="Tech Events"
            desc="Stay updated on upcoming tech events, webinars, and conferences to enhance your knowledge."
            footer={true}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
