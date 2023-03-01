import React from 'react'
import Image from 'next/image'
import design from '../../public/design.png'
import code from '../../public/code.png'
import consulting from '../../public/consulting.png'


function Cards() {
  return (
    <div className=' lg:flex gap-10 md:flex dark:text-sky-100'> 
    <div className="text-center shadow p-10 rounded-xl my-10">
        <Image src={design} width={100} height={100} className='mx-auto'/>
        <h3 className=' text-lg font-medium pt-8 pb-2 dark:font-bold'>Beautiful Designs</h3>
        <p className='py-2'>Creating elegant designs suited for your needs following core design theory.</p>
        <h4 className=' text-teal-600 py-4 dark:text-teal-400'>Design tools I use</h4>
        <p className=' p-2 text-gray-800 dark:text-sky-100'>Photoshop</p>
        <p className=' p-2 text-gray-800 dark:text-sky-100'>Ilustrator</p>
        <p className=' p-2 text-gray-800 dark:text-sky-100'>Figma</p>
    </div>

    <div className="text-center shadow p-10 rounded-xl my-10">
        <Image src={code} width={100} height={100} className='mx-auto'/>
        <h3 className=' text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
        <p className='py-2'>Creating elegant designs suited for your needs following core design theory.</p>
        <h4 className=' text-teal-600 py-4 dark:text-teal-400'>Design tools I use</h4>
        <p className=' p-2 text-gray-800 dark:text-sky-100 '>Photoshop</p>
        <p className=' p-2 text-gray-800 dark:text-sky-100'>Ilustrator</p>
        <p className=' p-2 text-gray-800 dark:text-sky-100'>Figma</p>
    </div>

    <div className="text-center shadow p-10 rounded-xl my-10">
        <Image src={consulting} width={100} height={100} className='mx-auto'/>
        <h3 className=' text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
        <p className='py-2'>Creating elegant designs suited for your needs following core design theory.</p>
        <h4 className=' text-teal-600 py-4 dark:text-teal-400'>Design tools I use</h4>
        <p className=' p-2 text-gray-800 dark:text-sky-100'>Photoshop</p>
        <p className=' p-2 text-gray-800 dark:text-sky-100'>Ilustrator</p>
        <p className=' p-2 text-gray-800 dark:text-sky-100'>Figma</p>
    </div>
    
    </div>
    
  )
}

export default Cards