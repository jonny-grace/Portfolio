import React from "react";


// service_658e9lr
// template_133vb18


function ContactForm() {
  return (
    <div className='mt-5 flex flex-col gap-3'>
      <h1 className=' mx-auto'>Contact us</h1>
      <input className=' border border-gray-300 px-5 w-64 rounded-md py-2' placeholder='full name'></input>
      <input className=' border border-gray-300 px-5 w-64 rounded-md py-2' placeholder='email'></input>
      <button className=' flex w-24 justify-center py-1 mx-auto bg-teal-500'>send</button>
    </div>
  );
}

export default ContactForm;
