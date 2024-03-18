import React from "react";

const ReviewCard = () => {
  return (
    <div className="w-[32%] py-10">
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
    </div>
  );
};

export default ReviewCard;
