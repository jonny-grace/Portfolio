import React from "react";
import Image from "next/image";
import web1 from "../../public/web1.png";
import chatgpt from "../../public/chatgpt.png";
import country from "../../public/country.png";
import calculator from "../../public/calculator.png";


import Carousel from "./Carousel";

function Portfolio() {
  return (
    <>
      <div className="dark:text-white">
        <h1 className=" text-3xl pt-5 py-1">Portfolio</h1>
        <p className="text-md leading-8 text-gray-800 dark:text-sky-100">
        Here you will find a collection of my work, showcasing my skills and <span className=" text-teal-500">experience in web development.</span> I have created a variety of websites, from simple static sites to <span className=" text-teal-500">complex dynamic applications</span>.
          
          </p>
        <p className=" text-md py-2 leading-8 text-gray-800 dark:text-sky-100">
        I have  included some of my personal projects, such as Car accessory store, <span className=" text-teal-500">chatGpt Clone</span>, Country Based web app and simple calculator.
        </p>
      </div>
      <div className="  flex flex-col gap-10 py-10 md:flex-row md:flex-wrap ">
        <div className="basis-1/3 flex-1 border border-cyan-50 ">
          <Image
            src={web1}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={chatgpt}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={country}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={calculator}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
      </div>

      <div>
        
      </div>

      <div></div>
    </>
  );
}

export default Portfolio;
