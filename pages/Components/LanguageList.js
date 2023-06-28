import React from "react";
const backendLanguages = [
  "Node Js",
  "Nest Js",
  "Express Js",
  "MongoDB",
  "PostgreSQL",
  "Prizma",
  "Docker",
];
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
function LanguageList({ languages }) {
  console.log(languages);
  console.log(frontendLanguages);
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

export default LanguageList;
