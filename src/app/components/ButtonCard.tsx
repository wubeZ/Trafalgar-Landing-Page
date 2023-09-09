import React, { ReactNode } from "react";

interface Props {
    text: String
    icon?: ReactNode
}

const ButtonCard = ({text, icon}: Props) => {
  return (
    <button className="relative mt-8 border border-blue-500 rounded-full text-base w-40 h-14 text-blue-500 px-4 py-2">
      <p className="absolute text-lg">{icon}</p>{text}
    </button>
  );
};

export default ButtonCard;
