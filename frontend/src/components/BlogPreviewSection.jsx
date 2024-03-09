import React from "react";
import { BlogCard } from "./";
import { blogData } from "../data/blogdata";

const BlogPreviewSection = () => {
  return (
    <div className="">
      <div className="flex py-10 gap-y-6  md:gap-0 flex-wrap lg:px-20 px-5 md:px-10 justify-between">
        <button className="w-[45%] md:w-[16%] text-sm border border-[#262626] rounded-lg py-4 bg-[#1a1a1a]">
          All
        </button>
        <button className="w-[45%] md:w-[16%] text-sm border border-[#262626] rounded-lg py-4 text-[#98989a] hover:bg-[#1a1a1a] hover:text-white transition-all">
          Quantum Computing
        </button>
        <button className="w-[45%] md:w-[16%] text-sm border border-[#262626] rounded-lg py-4 text-[#98989a] hover:bg-[#1a1a1a] hover:text-white transition-all">
          AI Ethics
        </button>
        <button className="w-[45%] md:w-[16%] text-sm border border-[#262626] rounded-lg py-4 text-[#98989a] hover:bg-[#1a1a1a] hover:text-white transition-all">
          Space Exploration
        </button>
        <button className="w-[45%] md:w-[16%] text-sm border border-[#262626] rounded-lg py-4 text-[#98989a] hover:bg-[#1a1a1a] hover:text-white transition-all">
          Biotechnology
        </button>
        <button className="w-[45%] md:w-[16%] text-sm border border-[#262626] rounded-lg py-4 text-[#98989a] hover:bg-[#1a1a1a] hover:text-white transition-all">
          Renewable Energy
        </button>
      </div>
      {blogData.map((item) => (
        <BlogCard data={item} />
      ))}
    </div>
  );
};

export default BlogPreviewSection;
