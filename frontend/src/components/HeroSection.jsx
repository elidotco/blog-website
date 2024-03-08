import React from "react";
import design from "./Abstract Design.png";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import images from "./Sub Container.png";
import HeroCard from "./HeroCard";
import FeaturesContainer from "./FeaturesContainer";
import { featureData, featureData1 } from "../data/featuredata";

const HeroSection = () => {
  return (
    <section className="">
      {/* Hero Section */}
      <div className="flex justify-between w-full h-fit flex-wrap ">
        <div className="flex flex-col w-full h-fit  lg:w-3/5">
          <div className="flex-col  md:text-left px-4 gap-10 flex  pt-20   md:pl-20 md:pr-5  border border-t-0 border-l-0 border-[#262626]">
            <p className="text-[#666666] text-[18px] lg:text-3xl">
              Your Journey to Tomorrow Begins Here
            </p>
            <h1 className="md:text-[60px] text-[30px]">
              Explore the Frontiers of Artificial Intelligence
            </h1>
            <p className="text-[#666666] text-[14px] md:text-[18px] pb-10">
              Welcome to the epicenter of AI innovation. FutureTech AI News is
              your passport to a world where machines think, learn, and reshape
              the future. Join us on this visionary expedition into the heart of
              AI.
            </p>
          </div>
          <div className="flex justify-between  lg:pl-20 pl-5 border-t-[1px] border-[#262626]">
            <div className="flex flex-col py-5 md:pr-10 justify-center border-r-[1px] border-[#262626] ">
              <p className="font-bold text-2xl">
                300 <span className="text-[#ffd11a]"> +</span>
              </p>
              <p className="text-[#98989a]">resources Available</p>
            </div>
            <div className="flex flex-col py-5 px-5 md:px-10 justify-center border-r-[1px] border-[#262626]">
              <p className="font-bold text-2xl">
                12K <span className="text-[#ffd11a]"> +</span>
              </p>
              <p className="text-[#98989a]">total Downloads</p>
            </div>
            <div className="flex flex-col py-5 px-10 justify-center border-r-[1px] border-[#262626]">
              <p className="font-bold text-2xl">
                10K <span className="text-[#ffd11a]"> +</span>
              </p>
              <p className="text-[#98989a]">Active Users</p>
            </div>
          </div>
        </div>
        <div className="lg:w-2/5 w-full -z-10 relative flex flex-col justify-start pt-auto pb-10">
          <img
            src={design}
            alt=""
            className=" lg:absolute h- -z-20 opacity-35"
          />
          <div className="flex-col flex mt-auto  gap-8 px-5  lg:pl-14 ">
            <img src={images} alt="" className="w-56 h-20" />
            <p>Explore 1000+ resources</p>
            <p className=" text-[#98989a]  ">
              Over 1,000 articles on emerging tech trends and breakthroughs.
            </p>
            <a
              href="#"
              className=" border text-[#98989a]  flex w-52 justify-center items-center  border-[#262626] px-2 py-3 rounded-xl"
            >
              Explore Resources{" "}
              <ArrowUpRightIcon className="w-5 h-5 text-[#ffd11a]" />
            </a>
          </div>
        </div>
      </div>
      {/* Hero Section */}
      {/* hero cards contianers */}
      <div className="flex px-5 lg:px-20 flex-wrap border-t justify-between border-[#262626]">
        <HeroCard
          icon={0}
          name="Latest News Updates"
          type="Stay Current"
          desc="Over 1,000 articles published monthly"
        />
        <HeroCard
          icon={1}
          name="Expert Contributors"
          type="Trusted Insights"
          desc="50+ renowned AI experts on our team"
        />
        <HeroCard
          icon={2}
          name="Global Readership"
          type="Worldwide Impact"
          desc="2 million monthly readers"
        />
      </div>
      {/* hero cards contianers */}
      <div className="bg-[#1a1a1a] py-14 text-left flex flex-col justify-center px-5 md:px-10 lg:px-20">
        <p className="bg-[#333] px-2 py-1 w-fit">Unlock the Power of</p>
        <h1 className="text-[28px] lg:text-[58px]">FutureTech Features</h1>
      </div>
      <FeaturesContainer
        name="Future Technology Blog"
        desc="Stay informed with our blog section dedicated to future technology."
        icon={0}
        data={featureData}
      />
      <FeaturesContainer
        name="Research Insights Blogs"
        desc="Dive deep into future technology concepts with our research section."
        icon={1}
        data={featureData1}
      />

      <div className="bg-[#1a1a1a] py-14 text-left flex w-full justify-between px-5 md:px-10 lg:px-20 items-center gap-8 flex-col lg:flex-row">
        <div className="flex flex-col text-left w-full">
          <p className="bg-[#333] px-2 py-1 w-fit">Unlock the Power of</p>
          <h1 className="text-[28px] lg:text-[58px]">FutureTech Features</h1>
        </div>
        <p className="bg-[#141414] border text-[#98989a] rounded-lg border-[#262626] px-4 py-3  lg:min-w-fit h-fit flex items-center ">
          View All Blogs <ArrowUpRightIcon className="w-5 h-5 text-[#ffd11a]" />
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
