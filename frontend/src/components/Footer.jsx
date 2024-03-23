import React from "react";
import logo from "./logo.png";
import HeroCard from "./HeroCard";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
const Footer = () => {
  return (
    <footer>
      <div className="bg-[#1a1a1a] md:px-10 pb-20 lg:px-20 px-5">
        <div className=" py-14 text-left flex w-full justify-between   items-center gap-8 flex-col lg:flex-row">
          <img src={logo} alt="" className=" hidden lg:flex lg:w-32 lg:h-32" />
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
        <div className="flex justify-between flex-col md:flex-row w-full bg-[#141414] p-4 rounded-xl">
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
      <div className="flex justify-between flex-wrap gap-10 px-5 md:px-10 py-10 lg:px-20">
        <div className="flex flex-col items-left gap-4 text-left text-[#666]">
          <h3 className="text-white pb-5">Home</h3>
          <a href="/">Features</a>
          <a href="/">Blogs</a>
          <a href="/">Resources</a>
          <a href="/">Testimonial</a>
          <a href="/">Contact Us</a>
          <a href="/">Newsletter</a>
        </div>
        <div className="flex flex-col items-left gap-4 text-left text-[#666]">
          <h3 className="text-white pb-5">News</h3>
          <a href="/">Trending Stories</a>
          <a href="/">Featured Vidoes</a>
          <a href="/">Technology</a>
          <a href="/">Health</a>
          <a href="/">Politics</a>
          <a href="/">Environment</a>
        </div>
        <div className="flex flex-col items-left gap-4 text-left text-[#666]">
          <h3 className="text-white pb-5">Blogs</h3>
          <a href="/">Quantum Computing</a>
          <a href="/">Ai Ethics</a>
          <a href="/">Space Exploration</a>
          <a href="/">Biotechnology</a>
          <a href="/">Renewable Energy</a>
          <a href="/">Biohacking</a>
        </div>
        <div className="flex flex-col items-left gap-4 text-left text-[#666]">
          <h3 className="text-white pb-5">Podcast</h3>
          <a href="/">Ai Revolution</a>
          <a href="/">Ai Revolution</a>
          <a href="/">Techtalk Ai</a>
          <a href="/">Ai Conversions</a>
        </div>
        <div className="flex flex-row  flex-wrap md:flex-col items-left gap-4  text-left text-[#666]">
          <h3 className="text-white pb-5">Resources</h3>
          <a
            href="/"
            className="bg-[#141414] border text-[#98989a] rounded-lg border-[#262626] px-4 py-2  lg:min-w-fit h-fit flex items-center  "
          >
            Whitepapers{"   "}
            <ArrowUpRightIcon className="w-5 h-5 text-[#ffd11a] " />
          </a>

          <a
            href="/"
            className="bg-[#141414] border text-[#98989a] rounded-lg border-[#262626] px-4 py-2  lg:min-w-fit h-fit flex items-center  "
          >
            Ebooks{"   "}
            <ArrowUpRightIcon className="w-5 h-5 text-[#ffd11a] " />
          </a>

          <a
            href="/"
            className="bg-[#141414] border text-[#98989a] rounded-lg border-[#262626] px-4 py-2  lg:min-w-fit h-fit flex items-center  "
          >
            Reports{"   "}
            <ArrowUpRightIcon className="w-5 h-5 text-[#ffd11a] " />
          </a>

          <a
            href="/"
            className="bg-[#141414] border text-[#98989a] rounded-lg border-[#262626] px-4 py-2  lg:min-w-fit h-fit flex items-center  "
          >
            Research Papers{"   "}
            <ArrowUpRightIcon className="w-5 h-5 text-[#ffd11a] " />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
