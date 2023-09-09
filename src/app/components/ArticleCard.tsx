import Image from "next/image";
import React from "react";
import picture from "@/assets/images/image 2.svg";
import {BsArrowRight} from "react-icons/bs";

const ArticleCard = () => {
  return (
    <div className="flex flex-col max-w-xs gap-5 rounded-3xl bg-white shadow-md">
      <Image src={picture} alt="image" className="rounded-t-3xl" />
      <p className="text-lg font-semibold px-8">Herbal medicines that are safe for consumption</p>
      <p className="font-extralight px-8">Herbal medicine is very widely used at this time because of its very good for your health...</p>
      <button className="w-40 relative pb-8 text-blue-600">Read More <span className="absolute top-1 right-1"><BsArrowRight/></span></button>
    </div>
  );
};

export default ArticleCard;
