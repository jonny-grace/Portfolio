import React from "react";

function LanguageList({ languages }) {
  return (
    <>
      <h4 className="text-teal-600 py-4 dark:text-teal-400">
        Skills:
        <div className="p-2 text-gray-800 dark:text-sky-100">
          {languages?.map((language) => (
            <span key={language}>
              <b>{language}</b>,&nbsp;
              {/* {index !== languages.length - 1 && (index + 1) % 5 !== 0 && ", "}
              {(index + 1) % 5 === 0 && <br />} */}
            </span>
          ))}
        </div>
      </h4>
    </>
  );
}

export default LanguageList;
