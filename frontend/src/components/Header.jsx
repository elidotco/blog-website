import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

const Header = () => {
  return (
    <header className="w-full py-7 px-5 md:px-10 lg:px-20 sticky top-0 flex justify-between items-center bg-[#1a1a1a]">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-10 h-auto" />
        <p className="font-bold text-xl"> FutureTech</p>
      </div>
      {/* Logo */}
      <ul className=" gap-10 hidden md:flex">
        <li className="text-[#7E7E81] border hover:border-white hover:rounded-lg border-[#1a1a1a] hover:text-white hover:bg-[#141414] px-3 py-2">
          <Link to="#">Home</Link>
        </li>
        <li className="text-[#7E7e81] border hover:border-white hover:rounded-lg border-[#1a1a1a] hover:text-white hover:bg-[#141414] px-3 py-2">
          <Link to="#">News</Link>
        </li>
        <li className="text-[#7E7e81] border hover:border-white hover:rounded-lg border-[#1a1a1a] hover:text-white hover:bg-[#141414] px-3 py-2">
          <Link to="#">Podcasts</Link>
        </li>
        <li className="text-[#7E7e81]  border hover:border-white hover:rounded-lg border-[#1a1a1a] hover:text-white hover:bg-[#141414] px-3 py-2">
          <Link to="#">Resources</Link>
        </li>
      </ul>
      {/* header Button */}
      <a
        href="#"
        className="px-4 py-2 bg-[#ffd11a] text-[#181818] rounded-md hidden md:flex"
      >
        Contact us
      </a>
      {/* header Button */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 flex md:hidden"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </header>
  );
};

export default Header;
