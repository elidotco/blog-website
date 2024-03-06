import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const Newsletter = () => {
  return (
    <div className="w-full flex items-center gap-5 py-5 justify-center">
      Subscribe to our Newsletter For New & latest Blogs and Resources{" "}
      <ArrowUpRightIcon className="w-6 h-6 text-[#ffd11a]" />
    </div>
  );
};

export default Newsletter;
