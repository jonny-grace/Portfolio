import React from "react";
import Image from "next/image";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import { useState } from "react";

function Carousel() {
  const slides = [web1, web2, web3, web4, web5];

  const [curr,setCurr] = useState(0);

  const prev=()=>{
    setCurr(curr==0?slides.length-1:curr-1);
  }
const next=()=>{
setCurr(curr==slides.length-1?0:curr+1)
}
  return (
    <div className="overflow-hidden relative ">
      <div className="flex transition-transform ease-out py-10 h-1/4" style={{transform:`translateX(${-curr * 100}%)`}}>
        {slides.map((slide) => (
          <Image src={slide} width={"100%"} height={"50%"} key="slide" />
        ))}
      </div>
      <div className="absolute inset-0 px-5 flex items-center justify-between ">
        <button onClick={prev} className="bg-gray-200 p-1 shadow text-gray-800 hover:bg-white rounded-full" >
            prev
        </button>
        <button onClick={next} className="bg-gray-200 p-1 shadow text-gray-800 hover:bg-white rounded-full">
            next
        </button>
      </div>
    </div>
  );
}

export default Carousel;
