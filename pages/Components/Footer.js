import React from 'react'
import Logo from './Logo'
import NavBar from './NavBar'

function Footer() {
  return (
    <footer className=' bg-slate-100 p-10 font-burtons flex justify-between'>
        <div>
            <h3>Email:johnlemma9@gmail.com</h3>
            <h3>phone-Number:+251973374428</h3>
        </div>
        <Logo />
    </footer>
  )
}

export default Footer