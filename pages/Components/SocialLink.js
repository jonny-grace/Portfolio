import React from 'react'
import {AiFillTwitterCircle,AiFillLinkedin,AiFillYoutube} from 'react-icons/ai'
function SocialLink() {
  return (
    <div className=' text-5xl flex justify-center text-gray-600 gap-16 dark:text-white'>
  <AiFillTwitterCircle/>

  <AiFillLinkedin/>

  <AiFillYoutube/>
    </div>
  )
}

export default SocialLink