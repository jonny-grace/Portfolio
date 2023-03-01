import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'
export default function NavBar({DarkMode,setDarkMode}) {
  return (
    <nav className=' mb-12 flex justify-between dark:text-white'>
      <h1 className=' text-xl font-burtons'>developedByYohannes</h1>
      <ul className='flex items-center'>
        <li><BsFillMoonStarsFill onClick={()=>{setDarkMode(!DarkMode)}} className=' cursor-pointer text-2xl'/></li>
        <li>
          <a className=' bg-gradient-to-r from-cyan-500 px-3 to-teal-500 py-1 border-none rounded ml-8' href='#'>My-Resume</a>
        </li>
      </ul>
    </nav>
  )
}
