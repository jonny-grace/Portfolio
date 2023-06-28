import React from "react";
import Image from "next/image";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";

import Carousel from "./Carousel";
import PortfolioImage from "./PortfolioImage";

function Portfolio() {
  return (
    <>
      <div className="dark:text-white">
        <h1 className=" text-3xl pt-5 py-1">Portfolio</h1>
        <p className="text-xl leading-8 text-gray-800 dark:text-sky-100">
          Here you will find a collection of my work where you can check out my
          skills and{" "}
          <span className=" text-teal-500">experience in web development.</span>{" "}
          I've created a variety of websites, from basic static sites to complex
          dynamic applications, and I'm excited to show you what I've been
          working on. In this portfolio, you'll find some of my personal
          projects, including an e-commerce website, a chat app called chatGpt
          Clone, a country-based web app, and a car accessory store. These
          projects demonstrate my ability to use various technologies and
          frameworks to create engaging and functional web applications.
        </p>
        <p className=" text-md py-2 leading-8 text-gray-800 dark:text-sky-100">
          I have included some of my personal projects,
        </p>
      </div>
      <div className="  flex flex-col gap-10 py-10 md:flex-row md:flex-wrap ">
        <PortfolioImage src={web1} />

        <PortfolioImage src={web4} />
        <PortfolioImage src={web2} />
        <PortfolioImage src={web3} />
      </div>

      <div></div>

      <div></div>
    </>
  );
}

export default Portfolio;
