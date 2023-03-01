import React from 'react'
import Cards from './Cards'

function Services() {
  return (
    <>
     <div>
        <h1 className=' text-3xl pt-5 py-1 dark:text-white'>Services I Offer</h1>
        <p className='text-md leading-8 text-gray-800 dark:text-sky-100'>As a front-end developer I can develop the entire application using <span className=' text-teal-500'>JavaScript</span>  and JavaScript-based technologies. For example, I can program UI using <span className=' text-teal-500'>React,</span>  server-side using Node. js or Express. js, and use MongoDB as the database.</p>
        <p className=' text-md py-2 leading-8 text-gray-800 dark:text-sky-100'>I offer from a wide range of services, including brand design, programming and teaching.</p>
    </div>
    <Cards />
    
    </>
   
  )
}

export default Services