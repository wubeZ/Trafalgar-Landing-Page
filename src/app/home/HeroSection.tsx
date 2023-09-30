import Image from "next/image";
import React from "react";
import picture from "@/assets/images/trafalgar-header illustration 1.svg";

const HeroSection = () => {
  return (
    <div id="home" className="flex flex-col pt-24 mb-0 md:mb-40 lg:flex-row justify-between gap-8 lg:gap-0 items-center lg:px-16">
      <div className="flex flex-col gap-8 mr-16 lg:mr-56 ml-8">
        <p className="text-2xl md:text-3xl lg:text-5xl font-semibold">Virtual healthcare for you</p>
        <p className="md:text-xl font-extralight">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <button className="bg-blue-500 text-slate-50 rounded-full text-lg w-48 h-12 px-2 py-1 hover:bg-blue-700 cursor-pointer">Consult today</button>
      </div>
      <div className="px-8">
      <Image src={picture} alt="picture" className="object-cover" />
      </div>
    </div>
  );
};

export default HeroSection;
