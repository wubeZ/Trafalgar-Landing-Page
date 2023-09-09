import Image from "next/image";
import React from "react";
import vector from "@/assets/images/Vector (5).svg";
import ServiceCard from "../components/ServiceCard";
import ButtonCard from "../components/ButtonCard";

const ServiceSection = () => {
  return (
    <div className="mt-40 flex flex-col items-center gap-8 justify-center">
      <p className="text-center text-3xl lg:text-4xl font-semibold">Our services</p>
      <p className="border-b-2 border-slate-800 w-14 mx-auto"></p>
      <p className="font-extralight lg:text-lg px-12 text-left  lg:px-60 lg:text-center">
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </p>

      <div className="w-full relative">
        <Image src={vector} alt="vector" className="absolute left-0 -z-10" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 place-items-center lg:px-32 mt-8 ml-8">
          {new Array(6)
            .fill(0)
            .map((item, index) => [<ServiceCard key={index} />])}
        </div>
      </div>
      <ButtonCard text={"Learn more"} />
    </div>
  );
};

export default ServiceSection;
