import React from "react";
import myimg from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 sm:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm-text-7xl font-bold">
            I'am a front end devloper
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            i have good knowledge about the web devlopment currently, i have
            made many projects using technology like React,Tailwind,Next Js and
            Javascript.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-blue-800">
              Portfolio
              <span className="group-hover:rotate-90 transition ease-in-out">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={myimg}
            alt="my image"
            className="rounded-2xl mx-auto w-2/3 sm:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
