import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'
// import cv from '../../public/Yohannes_Lemma_CV.pdf'

import Logo from './Logo'
export default function NavBar({DarkMode,setDarkMode}) {
  return (
    <nav className=' mb-12 flex justify-between  dark:text-white'>
     <Logo />
      <ul className='flex md:items-center'>
        <li><BsFillMoonStarsFill onClick={()=>{setDarkMode(!DarkMode)}} className=' cursor-pointer text-2xl'/></li>
        <li>
          <a className=' bg-gradient-to-r from-cyan-500 p-2 to-teal-500 py-1 border-none rounded ml-3   md:block '     href="/Yohannes_Lemma_CV.pdf"
    alt="alt text"
    target="_blank"
    rel="noopener noreferrer"
 download>My-Resume</a>
        </li>
      </ul>
    </nav>
  )
}
