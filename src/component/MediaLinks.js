import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const links = () => {
  const links=[
    {
      id:1,
      child:(
        <>
        LinkedIn
        <FaLinkedin size={25} />
      </>
      ),
      href:'https://www.linkedin.com/in/anilesh-mathur-/',
      style:'rounded-tr-md'
    },
    {
      id:2,
      child:(
        <>
        Github
        <FaGithub size={25} />
      </>
      ),
      href:'https://github.com/MathurJi0309',
    }
    ,{
      id:3,
      child:(
        <>
        Mail
        <HiOutlineMail size={25} />
      </>
      ),
      href:'https://www.linkedin.com/in/anilesh-mathur-/',
    }
    ,{
      id:4,
      child:(
        <>
        Resume
        <BsFillPersonLinesFill size={25} />
      </>
      ),
      href:'../../public/Resume.pdf',
      style:'rounded-br-md',
      download:true
      
    }
  ]
  return (
    <div className="hidden lg:flex  flex-col top-[35%] left-0 fixed">
      <ul>
        {
          links.map((link,index)=>(
            <li key={index} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:rounded-md hover:ml-[-10px] duration-300"+ " " +link.style}>
          <a
            href={link.href}
            className="flex justify-between items-center w-full text-white "
          download={link.download}
          target="_blank"
          rel="noreferrer"
          >
           {link.child}
          </a>
        </li>
          ))
        }
      </ul>
    </div>
  );
};

export default links;
