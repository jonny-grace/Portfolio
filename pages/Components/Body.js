import React from 'react'
import BodyImge from './BodyImge'

import SocialLink from './SocialLink'

function Body() {
  return (
    <>
    <div className=' text-center p-10'>
        <h2 className=' text-5xl py-2 text-teal-600 font-medium md:text-6xl' >Yohannes L.</h2>
        <h3 className=' text-2xl py-2 md:text-3xl dark:text-white'>Full Stack Developer.</h3>
        <p className=' text-md py-5 leading-8 text-gray-800  md:text-xl max-w-xl mx-auto dark:text-white'>
        I am a full stack developer with a passion for building web applications. Join me down below and let get started
        </p>
    </div>
    <SocialLink/>
    <BodyImge/>
    
    
    </>
  )
}

export default Body