import React from "react";
import { AiFillHome, AiOutlineAppstore, AiOutlineHeart } from "react-icons/ai";
import { BiTrendingUp, BiCompass } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { FaUserAlt } from "react-icons/fa";
import { BsCalendar3Event } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div className=" flex flex-row">
      <div className="w-1/5 bg-white">
        <div className="fixed w-1/5">
          <h1 className="font-extrabold mt-5 pl-5 text-2xl text-black">
            <span className="text-orange-400">Bee</span> Music
          </h1>{" "}
          <div className="px-5">
            <ul className="flex flex-col mt-[30px] font1 gap-3 text-black">
              <li className="flex  items-center gap-4  font-semibold  cursor-pointer tracking-wide  text-md transition-all duration-300  py-2 rounded-2xl hover:text-white hover:px-3  hover:bg-black focus:bg-black">
                <AiFillHome className="text-2xl" />
                <Link to="/landing_page">Home</Link>
              </li>
              <li className="flex  items-center gap-4  font-semibold  cursor-pointer  tracking-wide py-2 rounded-2xl hover:text-white hover:px-3  hover:bg-black focus:bg-black text-md transition-all duration-300">
                <BiTrendingUp className="text-2xl" />
                Trends
              </li>
              <li className="flex  items-center gap-4  font-semibold  cursor-pointer tracking-wide mb-5 py-2 rounded-2xl hover:text-white hover:px-3  hover:bg-black focus:bg-black text-md transition-all duration-300">
                <BiCompass className="text-2xl" />
                Feeds
              </li>
              <li className="font-extralight text-black/80">Discover</li>
              <li className="flex  items-center gap-4  font-semibold  cursor-pointer tracking-wide py-2 rounded-2xl hover:text-white hover:px-3  hover:bg-black focus:bg-black text-md transition-all duration-300">
                <AiOutlineAppstore className="text-2xl" />
                New and Notable
              </li>
              <li className="flex  items-center gap-4  font-semibold  cursor-pointer tracking-wide py-2 rounded-2xl hover:text-white hover:px-3  hover:bg-black focus:bg-black text-md transition-all duration-300 ">
                <SlCalender className="text-2xl" />
                Released calender{" "}
              </li>
              <li className="flex  items-center gap-4  font-semibold  cursor-pointer tracking-wide py-2 rounded-2xl hover:text-white hover:px-3  hover:bg-black focus:bg-black text-md transition-all duration-300 ">
                <BsCalendar3Event className="text-2xl" />
                Events{" "}
              </li>
              <li className="font-extralight text-black/80">
                Your Collections
              </li>

              <li className="flex  items-center gap-4  font-semibold  cursor-pointer tracking-wide py-2 rounded-2xl hover:text-white hover:px-3  hover:bg-black focus:bg-black text-md transition-all duration-300 ">
                <AiOutlineHeart className="text-2xl" />
                Favorite Songs
              </li>
              <li className="flex  items-center gap-4  font-semibold  cursor-pointer tracking-wide py-2 rounded-2xl hover:text-white hover:px-3  hover:bg-black focus:bg-black text-md transition-all duration-300 ">
                <FaUserAlt className="text-2xl" />
                Artists{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
