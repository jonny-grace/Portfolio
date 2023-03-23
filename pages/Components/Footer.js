import React from 'react'
import ContactForm from './ContactForm'
import Logo from './Logo'

function Footer() {
  return (
    <footer className=' bg-slate-100 p-10 font-burtons md:flex gap-5 justify-between items-center '>
        <div>
            <h3>Email:johnlemma9@gmail.com</h3>
            <h3>phone-Number:+251973374428</h3>
        </div>
        <div className=' mt-5'>
          <div><Logo /></div>
        
        {/* <ContactForm /> */}
        
        </div>
        
    </footer>
  )
}

export default Footer