import React from "react";
import Image from "next/image";
import pictureSection from "@/assets/images/trafalgar-illustration sec03 1.svg";
import ButtonCard from "../components/ButtonCard";
import { BsArrowDown } from "react-icons/bs";

const DownloadSection = () => {
  return (
      <div
        id="app"
        className="flex flex-col pt-24 lg:flex-row-reverse justify-between gap-10 lg:gap-32 mt-24 lg:mt-40 px-4 lg:px-16"
      >
        <div className="">
          <Image
            src={pictureSection}
            alt="picture Section"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-4 px-9">
          <p className="font-semibold text-3xl">Download our mobile apps</p>
          <p className="border-b-2 border-slate-800 w-10"></p>
          <p className="font-extralight">
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </p>
          <ButtonCard text={"Download"} icon={<BsArrowDown />} />
        </div>
      </div>
  );
};

export default DownloadSection;
