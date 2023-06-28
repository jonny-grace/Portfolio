import React from "react";

import frontend from "../../public/frontend.png";
import ecommerce from "../../public/ecommerce.png";
import code from "../../public/code.png";

import ServiceCard from "./ServiceCard";
import LanguageList from "./LanguageList";

function Cards() {
  const ecommerceSollution = ["WooCommerce", "Shopify", "Magento"];
  const frontendLanguages = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React Js",
    "Next JS",
    "TailwindCSS",
    "Redux/ReduxToolkit",
  ];
  const backendLanguages = [
    "Node Js",
    "Nest Js",
    "Express Js",
    "MongoDB",
    "PostgreSQL",
    "Prizma",
    "Docker",
  ];

  return (
    <div className="lg:flex gap-10 md:flex dark:text-sky-100">
      <ServiceCard
        image={frontend}
        title="Frontend Developer"
        description="As a frontend developer, I specialize in creating visually stunning and user-friendly interfaces for websites and web applications. I use the latest frontend technologies and frameworks such as React, Angular, and Vue to build responsive and mobile-friendly websites that are optimized for search engines."
      >
        <LanguageList languages={frontendLanguages} />
      </ServiceCard>
      <ServiceCard
        image={code}
        title="Backend Development"
        description="As a backend developer, I specialize in building robust and scalable server-side applications that power websites and web applications. I use the latest backend technologies and frameworks such as Node.js,Nest js and Express js to build APIs, databases, and other backend components."
      >
        <LanguageList languages={backendLanguages} />
      </ServiceCard>

      <ServiceCard
        image={ecommerce}
        title="Ecommerce Solution"
        description="As an ecommerce solution provider, I can help you set up and customize an ecommerce platform that meets your specific business needs. I can integrate payment gateways, shipping providers, and other essential features to ensure a seamless shopping experience for your customers."
      >
        <LanguageList languages={ecommerceSollution} />
      </ServiceCard>
    </div>
  );
}

export default Cards;
