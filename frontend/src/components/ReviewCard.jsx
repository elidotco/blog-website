import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const ReviewCard = () => {
  return (
    <div className="w-[32%] py-10 border-r">
      {/* Author Data */}
      <div className="flex items-center justify-center">
        {/* image */}
        <div className="w-14 h-14 rounded-full bg-green-400"></div>
        {/* image */}
        <div className="flex flex-col text-left">
          <p>Name</p>
          <p>Titile</p>
        </div>
      </div>
      {/* Author Data */}
      <div className="text-center py-3 px-3 relative mt-10 mx-auto bg-[#1a1a1a]">
        <div className="p-2 bg-[#141414] text-lg absolute -top-4">
          <StarIcon color="#ffce22" size={22} />
          <StarIcon color="#ffce22" size={22} />
          <StarIcon color="#ffce22" size={22} />
          <StarIcon color="#ffce22" size={22} />
          <StarIcon color="#ffce22" size={22} />
        </div>
        The whitepapers on renewable energy strategies have greatly influenced
        my work. They offer detailed data and analysis, helping me make informed
        decisions.
      </div>
    </div>
  );
};

export default ReviewCard;
