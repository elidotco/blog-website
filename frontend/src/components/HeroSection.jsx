import React from "react";
import design from "./Abstract Design.png";

const HeroSection = () => {
  return (
    <section className="">
      {/* Hero Section */}
      <div className="flex justify-between w-full flex-wrap ">
        <div className="flex flex-col w-full  lg:w-3/5">
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
          <div className="flex justify-between lg:pl-20 pl-5 border-t-[1px] border-[#262626]">
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
        <div className="lg:w-2/5 w-full">
          <img src={design} alt="" className="relative -z-20" />
        </div>
      </div>
      {/* Hero Section */}
    </section>
  );
};

export default HeroSection;
