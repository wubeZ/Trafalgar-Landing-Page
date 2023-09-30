import Image from "next/image";
import React from "react";
import pictureSection from "@/assets/images/trafalgar-illustration sec02 1.svg";
import ButtonCard from "../components/ButtonCard";

const ProvideSection = () => {
  return (
      <div className="flex flex-col pt-24 lg:flex-row justify-between gap-8 lg:gap-32 mt-40 px-4 lg:px-16">
        <div className="px-8">
          <Image
            src={pictureSection}
            alt="picture Section"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-4 px-6 lg:px-9">
          <p className="font-semibold text-2xl lg:text-3xl">
            Leading healthcare providers
          </p>
          <p className="border-b-2 border-slate-800 w-10"></p>
          <p className="font-extralight">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it&apos;s not
            just work. We take pride in the solutions we deliver
          </p>
          <ButtonCard text={"Learn more"} />
        </div>
      </div>
  );
};

export default ProvideSection;
