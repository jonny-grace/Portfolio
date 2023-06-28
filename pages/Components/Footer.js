// import React, { useState } from "react";
// import { FaPhone, FaEnvelope } from "react-icons/fa";
// import Logo from "./Logo";

// function Footer() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = {
//       name: name,
//       email: email,
//       message: message,
//     };
//     fetch("/api/send-email", {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         alert("Your message has been sent!");
//         setName("");
//         setEmail("");
//         setMessage("");
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         alert(
//           "There was an error sending your message. Please try again later."
//         );
//       });
//   };

//   return (
//     <footer className="bg-gray-800 py-6">
//       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center">
//           <div className=" text-emerald-300 mt-4">
//             <Logo />
//           </div>
//           <div className="flex items-center">
//             <a
//               href="tel:+251973374428"
//               className="text-gray-400 hover:text-white mr-4"
//             >
//               <FaPhone className="inline-block mr-1" />
//               +(251) 973 374 448
//             </a>
//             <a
//               href="mailto:johnlemma9@gmail.com"
//               className="text-gray-400 hover:text-white"
//             >
//               <FaEnvelope className="inline-block mr-1" />
//               johnlemma9@gmail.com
//             </a>
//           </div>
//         </div>
//         <form onSubmit={handleSubmit} className="mt-6">
//           <h3 className="text-white mb-2 font-bold">Contact Us:</h3>
//           <div className="flex flex-col sm:flex-row">
//             <input
//               type="text"
//               placeholder="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="bg-gray-700 text-white py-2 px-4 mb-2 sm:mr-2 rounded-md"
//               required
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="bg-gray-700 text-white py-2 px-4 mb-2 sm:mr-2 rounded-md"
//               required
//             />
//           </div>
//           <div>
//             <textarea
//               placeholder="Message"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               className="bg-gray-700 text-white py-2 px-4 mb-2 rounded-md"
//               rows="4"
//               required
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import Logo from "./Logo";
import ContactForm from "./ContactForm";

function Footer() {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className=" text-emerald-300 mt-4">
            <Logo />
          </div>
          <div className="flex items-center">
            <a
              href="tel:+251973374428"
              className="text-gray-400 hover:text-white mr-4"
            >
              <FaPhone className="inline-block mr-1" />
              +(251) 973 374 448
            </a>
            <a
              href="mailto:johnlemma9@gmail.com"
              className="text-gray-400 hover:text-white"
            >
              <FaEnvelope className="inline-block mr-1" />
              johnlemma9@gmail.com
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </footer>
  );
}

export default Footer;
