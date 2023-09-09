import Image from "next/image";
import React from "react";
import picture from "@/assets/images/Group 5.svg";

const TestimonialCard = () => {
  return (
    <div className="flex flex-col lg:gap-6 items-center bg-gradient-to-r from-sky-500 to-sky-400 text-white p-4 lg:py-20 rounded-2xl lg:px-28">
      <p className="text-lg lg:text-4xl font-semibold">
        What our customers are saying
      </p>
      <p className="border-b-2 border-slate-100 w-14"></p>
      <div className="flex flex-col px-2 lg:flex-row items-center lg:items-start gap-2 lg:gap-8 mt-4 lg:mt-10 ">
        <Image src={picture} alt="picture" className="" />
        <div className="flex flex-col justify-center lg:w-[650px]  text-center lg:text-left">
          <p className="font-medium lg:text-xl">Edward Newgate</p>
          <p className="font-light lg:text-lg">Founder Circle</p>
        </div>
        <p className="font-light lg:pl-24 text-sm lg:text-xl text-left ">
          “Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely”
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
