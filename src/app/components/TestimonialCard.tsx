"use client";
import Image from "next/image";
import React from "react";
import picture from "@/assets/images/Group 5.svg";

const TestimonialCard = ({index}: {index: number}) => {

  return (
    <div className="flex flex-col lg:gap-6 items-center bg-gradient-to-r from-sky-500 to-sky-400 text-white py-8 lg:py-10 rounded-2xl lg:px-20">
      <p className="text-2xl lg:text-3xl font-semibold">
        What our customers are saying {index + 1}
      </p>
      <p className="border-b-2 border-slate-100 w-14 mt-4"></p>
      <div className="flex flex-col px-2 lg:flex-row items-center lg:justify-center lg:items-start gap-2 lg:gap-8 mt-4 lg:mt-8 w-full ">
        <div className="w-[700px] flex flex-col lg:flex-row gap-4 items-center">
          <Image src={picture} alt="picture" className="w-fit" />
          <div className="flex flex-col justify-center lg:py-8  text-center lg:text-left w-40">
            <p className="font-medium lg:text-xl">Edward Newgate</p>
            <p className="font-light lg:text-lg">Founder Circle</p>
          </div>
        </div>
        <p className="font-light lg:pl-24 text-sm lg:text-xl text-left mx-8 md:mx-44 lg:mx-0 line-clamp-5">
          “Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely”
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
