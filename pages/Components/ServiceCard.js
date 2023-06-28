import React from "react";
import Image from "next/image";

function ServiceCard({ image, title, description, children }) {
  return (
    <div className="text-center bg-gray-200 dark:bg-gray-800 shadow p-10 rounded-xl my-10">
      <Image src={image} width={100} height={100} className="mx-auto" />
      <h3 className=" text-lg font-medium pt-8 pb-2 text-teal-600 dark:text-white">
        {title}
      </h3>
      <p className="py-2 dark:text-white">{description}</p>
      {children}
    </div>
  );
}

export default ServiceCard;
