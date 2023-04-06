import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll'

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-4">
      <div>
        <h1 className="text-5xl font-signature">Anilesh</h1>
      </div>
      <ul className="hidden sm:flex">
        {links.map((link, index) => (
          <li
            key={index}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 hover:text-white duration-200"
          >
            <Link to={link.link} smooth duration={500}>{link.link}</Link>
          </li>
        ))}
      </ul>
      <div
        className="cursor-pointer pr-4 z-10 text-gray-400 sm:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {
        nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
       
        {links.map((link, index) => (
          <li
            key={index}
            className="px-4 cursor-pointer capitalize py-6 text-3xl hover:scale-105 hover:text-white transition ease-in-out"
          >
            <Link onClick={()=>setNav(!nav)} to={link.link} smooth duration={500}>{link.link}</Link>
          </li>
        ))}
      </ul>
        )
      }
    </div>
  );
};

export default NavBar;
