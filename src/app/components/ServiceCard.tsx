import React from "react";
import Image from "next/image";
import frame from "@/assets/images/Frame.svg";

const ServiceCard = () => {
  return (
    <div className="flex flex-col mr-16 gap-4 w-fit lg:w-full shadow-md px-6 py-8 bg-white rounded-lg">
      <Image src={frame} alt="frame" />
      <p className="font-semibold text-xl">Search doctor</p>
      <p className="font-extralight text-sm">
        Choose your doctor from thousands of specialist, general, and trusted
        hospitals
      </p>
    </div>
  );
};

export default ServiceCard;
