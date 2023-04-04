import React from 'react'
import {FaBars,FaTimes} from "react-icons/fa";

const NavBar = () => {
    const links=[
        {
            id:1,
            link:'home'
        },
        {
            id:2,
            link:'about'
        },
        {
            id:3,
            link:'Portfolio'
        },
        {
            id:4,
            link:'experience'
        },
        {
            id:5,
            link:'contact'
        }
    ]

  return (
    <div className='flex justify-between items-center w-full h-20 text-white bg-black fixed px-4'>
        <div>
            <h1 className='text-5xl font-signature'>Anilesh</h1>
        </div>
        <ul className='hidden md:flex'> 
        {
            links.map((link,index)=>(
                <li key={index} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 hover:text-white duration-200'>{link.link}</li>
                ))
        }

        </ul>
        <div className='cursor-pointer pr-4 z-10 text-gray-400'>
            <FaBars size={30}/>
        </div>
    </div>
  )
}

export default NavBar