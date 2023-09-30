import React, { ReactNode } from "react";

interface Props {
    text: String
    icon?: ReactNode
}

const ButtonCard = ({text, icon}: Props) => {
  return (
    <button className="relative mt-8 border border-blue-500 rounded-full text-base w-40 h-14 text-blue-500 hover:bg-blue-700 hover:text-white px-4 py-2 transition-colors ease-linear cursor-pointer">
      <p className="absolute text-lg">{icon}</p>{text}
    </button>
  );
};

export default ButtonCard;
