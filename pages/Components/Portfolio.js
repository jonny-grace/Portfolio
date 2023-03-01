import React from "react";
import Image from "next/image";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import Carousel from "./Carousel";

function Portfolio() {
 
  return (
    <>
      <div className="dark:text-white">
        <h1 className=" text-3xl pt-5 py-1">Portfolio</h1>
        <p className="text-md leading-8 text-gray-800 dark:text-sky-100">
          As a front-end developer I can develop the entire application using{" "}
          <span className=" text-teal-500">JavaScript</span> and
          JavaScript-based technologies. For example, I can program UI using{" "}
          <span className=" text-teal-500">React,</span> server-side using Node.
          js or Express. js, and use MongoDB as the database.
        </p>
        <p className=" text-md py-2 leading-8 text-gray-800 dark:text-sky-100">
          I offer from a wide range of services, including brand design,
          programming and teaching.
        </p>
      </div>
      <div className=" hidden flex flex-col gap-10 py-10 md:flex-row md:flex-wrap ">
        <div className="basis-1/3 flex-1">
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
            src={web2}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={web3}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={web4}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={web5}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={web1}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
      </div>

      <div>
        <Carousel/>
          
        
      </div>

      <div></div>
    </>
  );
}

export default Portfolio;
