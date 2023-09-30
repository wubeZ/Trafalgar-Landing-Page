import React from "react";

const Footer = () => {
  return (
    <div className="md:h-80 lg:h-96 grid grid-cols-1 md:grid-cols-[4fr_2fr_2fr_2fr] lg:grid-cols-[5fr_2fr_2fr_2fr] text-white gap-10 p-8 lg:p-28 text-lg bg-gradient-to-bl from-[#67C3F3] to-[#5A98F2]">
      <div className="space-y-10 lg:space-y-4 font-extralight">
        <div className="flex items-center gap-2">
          <p className="text-blue-500 bg-slate-50 rounded-full h-10 w-10 text-center pt-1 font-semibold text-2xl">
            T
          </p>
          <p className="text-2xl font-medium">Traflagar</p>
        </div>
        <p className="mr-8 text-sm lg:text-base">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <p className="text-sm">&copy;Trafalgar PTY LTD 2020. All rights reserved</p>
      </div>
      <ul className="hidden md:block text-sm list-none font-extralight space-y-2">
        <li className="font-semibold text-xl pb-2">Company</li>
        <li>About</li>
        <li>Testimonials</li>
        <li>Find a doctor</li>
        <li>Apps</li>
      </ul>
      <ul className="hidden md:block text-sm list-none font-extralight space-y-2">
        <li className="font-semibold text-xl pb-2">Region</li>
        <li>Indoensia</li>
        <li>Singapore</li>
        <li>Hongkong</li>
        <li>Canada</li>
      </ul>
      <ul className="hidden md:block text-sm list-none font-extralight space-y-2">
        <li className="font-semibold text-xl pb-2">Help</li>
        <li>Help center</li>
        <li>Contact support</li>
        <li>Instructions</li>
        <li>How it works</li>
      </ul>
    </div>
  );
};

export default Footer;
