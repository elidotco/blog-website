import React from "react";
import {
  Header,
  HeroSection,
  Newsletter,
  BlogPreviewSection,
  HomeFilesSection,
  Footer,
} from "../components";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
const Home = () => {
  return (
    <div>
      <Newsletter />
      <Header />
      <HeroSection />
      <BlogPreviewSection />
      <div className="bg-[#1a1a1a] py-14 text-left flex w-full justify-between px-5 md:px-10 lg:px-20 items-center gap-8 flex-col lg:flex-row">
        <div className="flex flex-col text-left w-full">
          <p className="bg-[#333] px-2 py-1 w-fit">
            Your Gateway to In-Depth Information
          </p>
          <h1 className="text-[28px] lg:text-[40px] w-full md:w-[80%]">
            Unlock Valuable Knowledge with FutureTech's Resources
          </h1>
        </div>
        <p className="bg-[#141414] border text-[#98989a] rounded-lg border-[#262626] px-4 py-3  lg:min-w-fit h-fit flex items-center  ">
          View All Resources{"   "}
          <ArrowUpRightIcon className="w-5 h-5 text-[#ffd11a] " />
        </p>
      </div>
      <HomeFilesSection
        name="Ebooks"
        iconn={0}
        desc="Explore our collection of ebooks covering a wide spectrum of future technology topics."
      />
      <HomeFilesSection
        name="Whitepapers"
        iconn={1}
        desc="Dive into comprehensive reports and analyses with our collection of whitepapers. "
      />
      <Footer />
    </div>
  );
};

export default Home;
