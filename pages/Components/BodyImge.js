import React from 'react'
import Image from 'next/image'
import grace from '../../public/grace.png'
function BodyImge() {
  return (
    <div className='relative mx-auto bg-gradient-to-b from-teal-500 overflow-hidden rounded-full  w-64 h-64 mt-20 md:w-80 md:h-80'>
        <Image src={grace} layout="fill" objectFit='cover ' className=' flex items-center'/>
    </div>
  )
}

export default BodyImge