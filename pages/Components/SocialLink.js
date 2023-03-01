import React from 'react'
import {AiFillTwitterCircle,AiFillLinkedin,AiFillYoutube} from 'react-icons/ai'
function SocialLink() {
  return (
    <div className=' text-5xl flex justify-center text-gray-600 gap-16 dark:text-white'>
      <a href='https://www.w3schools.com/tags/tag_a.asp'>  <AiFillTwitterCircle className=' cursor-pointer'/>
</a>
<a href='https://www.linkedin.com/in/jonygrace/'>  <AiFillLinkedin className=' cursor-pointer'/>
</a>
<a href='https://www.w3schools.com/tags/tag_a.asp'>  <AiFillYoutube className=' cursor-pointer'/>
</a>
  

  
    </div>
  )
}

export default SocialLink