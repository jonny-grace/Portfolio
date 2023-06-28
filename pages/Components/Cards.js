import React from "react";
import frontend from "../../public/frontend.png";
import ecommerce from "../../public/ecommerce.png";
import code from "../../public/code.png";
import ServiceCard from "./ServiceCard";

function LanguageList({ languages }) {
  console.log(languages);
  // console.log(frontendLanguages);
  return (
    <>
      <h4 className="text-teal-600 py-4 dark:text-teal-400">
        Skills:
        <div className="p-2 text-gray-800 dark:text-sky-100">
          {languages.map((language, index) => (
            <span key={language}>
              <b>{language}</b>
              {index !== languages.length - 1 && (index + 1) % 5 !== 0 && ", "}
              {(index + 1) % 4 === 0 && <br />}
            </span>
          ))}
        </div>
      </h4>
    </>
  );
}

function Cards() {
  const Solution = ["WooCommerce", "Shopify", "Magento 2"];
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
        <LanguageList languages={Solution} />
      </ServiceCard>
    </div>
  );
}

export default Cards;
