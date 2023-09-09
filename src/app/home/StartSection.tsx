import Image from "next/image";
import React from "react";
import picture from "@/assets/images/trafalgar-header illustration 1.svg";

const StartSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0 mt-20 items-center lg:px-16">
      <div className="flex flex-col gap-8 mr-16 lg:mr-56 ml-8">
        <p className="text-3xl lg:text-5xl font-semibold">Virtual healthcare for you</p>
        <p className="text-xl font-extralight">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <button className="bg-blue-500 text-slate-50 rounded-full text-lg w-48 h-12 px-2 py-1">Consult today</button>
      </div>
      <div className="">
      <Image src={picture} alt="picture" className="object-cover" />
      </div>
    </div>
  );
};

export default StartSection;
