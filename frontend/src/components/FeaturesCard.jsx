import React from "react";

const FeaturesCard = ({ data }) => {
  return (
    <div className="w-full lg:w-[46%] bg-[#1a1a1a] px-5 py-4 border border-[#262626] rounded-xl">
      <p className=" pb-3">{data[0]}</p>
      <p className=" text-[#98989a]">{data[1]}</p>
    </div>
  );
};

export default FeaturesCard;
