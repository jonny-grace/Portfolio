import React from 'react'
import Image from 'next/image'
import deved from '../../public/dev-ed-wave.png'
function BodyImge() {
  return (
    <div className='relative mx-auto bg-gradient-to-b from-teal-500 overflow-hidden rounded-full  w-64 h-64 mt-20 md:w-80 md:h-80'>
        <Image src={deved} layout="fill" objectFit='cover '/>
    </div>
  )
}

export default BodyImge