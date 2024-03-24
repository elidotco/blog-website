import React from "react";

const NewsCard = ({ index, imglink, title, desc }) => {
  if (index) {
    return (
      <div className="flex px-5 md:px-10 lg:px-20 border-t border-b flex-col md:flex-row py-20">
        {/* Image */}
        <img src={imglink} alt="" className="rounded-xl w-4/12 h-auto" />
        {/* Image */}
        <div className="flex flex-col gap-8"></div>
      </div>
    );
  }
  return <div>NewsCard</div>;
};

export default NewsCard;
