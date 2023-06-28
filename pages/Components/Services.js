import React from "react";
import Cards from "./Cards";

function Services() {
  return (
    <>
      <div>
        <h1 className=" text-3xl pt-5 py-1 dark:text-white">
          Services I Offer
        </h1>
        <p className="text-xl leading-8 text-gray-800 dark:text-sky-100">
          Hey there! As a{" "}
          <span className="text-teal-600 font-bold uppercase">
            fullstack developer{"  "}{" "}
          </span>
          I'm here to help businesses and individuals achieve their goals in the
          digital space. Whether you need a website, web application, or custom
          software solution, I've got you covered! With my expertise in both
          frontend and backend development, I offer a diverse range of services
          that can help you build a strong online presence and reach your target
          audience. I can create visually appealing and user-friendly interfaces
          using the latest frontend technologies like JavaScript, React Js,Next
          Js and TypeScript, and build robust and scalable server-side
          components using programming languages like Node.js, Nest js, or
          Express.
        </p>
        <p className=" text-xl py-2 leading-8 text-gray-800 dark:text-sky-100">
          I offer a diverse range of services to help businesses and individuals
          achieve their goals. Here are some of the services I provide:
        </p>
      </div>
      <Cards />
    </>
  );
}

export default Services;
