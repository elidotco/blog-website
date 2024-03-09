import React, { useState } from "react";
import {
  HeartIcon,
  BookmarkIcon as Bookmark,
  ArrowUpRightIcon,
} from "@heroicons/react/24/solid";
import {
  HeartIcon as Hero,
  ChatBubbleOvalLeftIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";

const BlogCard = ({ data }) => {
  let [like, setLike] = useState(data.likes);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  let [save, setSave] = useState(data.saves);

  function likedbtn() {
    setLiked(!liked);
    if (liked) {
      setLike((like -= 1));
    } else {
      setLike((like += 1));
    }
  }
  function savedbtn() {
    setSaved(!saved);
    if (saved) {
      setSave((save -= 1));
    } else {
      setSave((save += 1));
    }
  }
  return (
    <div className=" border-t border-[#262626] md:px-10 px-5 lg:px-20 py-10 flex justify-between flex-wrap items-center">
      {/* author */}
      <div className="flex gap-3 items-center">
        {/* Author */}
        <div className="w-10 h-10 rounded-full bg-green-400"></div>
        <div className="flex flex-col ">
          <p className="text-lg">{data.author}</p>
          <p className="text-[#98989a] text-base">{data.blogtype}</p>
        </div>
        {/* Author */}
      </div>
      <div className="lg:flex flex-col lg:w-1/2 hidden gap-2 text-left">
        <p className="text-[#98989a]">{data.date}</p>
        <h2 className="font-semibold">{data.title}</h2>
        <p className="text-[#98989a] text-sm">{data.exerpt}</p>
        <div className="flex gap-5">
          <div
            onClick={likedbtn}
            className="flex items-center bg-[#1a1a1a] border border-[#262626] p-2 rounded-3xl"
          >
            {liked ? (
              <HeartIcon className="w-5 h-5 text-[#FF5500]" />
            ) : (
              <Hero className="w-5 h-5 text-[#262626]" />
            )}
            {like}
          </div>
          <div className="flex items-center bg-[#1a1a1a] border border-[#262626] p-2 rounded-3xl">
            <ChatBubbleOvalLeftIcon className="w-5 h-5 text-[#262626]" />
            {data.comments}
          </div>
          <div
            className="flex items-center bg-[#1a1a1a] border border-[#262626] p-2 rounded-3xl"
            onClick={savedbtn}
          >
            {saved ? (
              <Bookmark className="w-5 h-5 text-[#262626]" />
            ) : (
              <BookmarkIcon className="w-5 h-5 text-[#262626]" />
            )}
            {save}
          </div>
        </div>
      </div>
      <p className="bg-[#141414] border text-[#98989a] rounded-lg border-[#262626] px-4 py-3  lg:min-w-fit h-fit flex items-center ">
        View Blog <ArrowUpRightIcon className="w-5 h-5 text-[#ffd11a]" />
      </p>
      <div className="flex flex-col w-full py-10 lg:hidden gap-2 text-left">
        <p className="text-[#98989a]">{data.date}</p>
        <h2 className="font-semibold">{data.title}</h2>
        <p className="text-[#98989a] text-sm">{data.exerpt}</p>
        <div className="flex gap-5">
          <div
            onClick={likedbtn}
            className="flex items-center bg-[#1a1a1a] border border-[#262626] p-2 rounded-3xl"
          >
            {liked ? (
              <HeartIcon className="w-5 h-5 text-[#FF5500]" />
            ) : (
              <Hero className="w-5 h-5 text-[#262626]" />
            )}
            {like}
          </div>
          <div className="flex items-center bg-[#1a1a1a] border border-[#262626] p-2 rounded-3xl">
            <ChatBubbleOvalLeftIcon className="w-5 h-5 text-[#262626]" />
            {data.comments}
          </div>
          <div
            className="flex items-center bg-[#1a1a1a] border border-[#262626] p-2 rounded-3xl"
            onClick={savedbtn}
          >
            {saved ? (
              <Bookmark className="w-5 h-5 text-[#262626]" />
            ) : (
              <BookmarkIcon className="w-5 h-5 text-[#262626]" />
            )}
            {save}
          </div>
        </div>
      </div>

      {/* author */}
    </div>
  );
};

export default BlogCard;
