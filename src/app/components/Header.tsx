"use client";

import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <div className="flex h-36 justify-between items-center px-4 lg:px-20 shadow-sm">
      <div className="flex items-center gap-2">
        <p className="bg-blue-500 text-slate-50 rounded-full h-10 w-10 text-center pt-1 font-semibold text-2xl">
          T
        </p>
        <p className="text-2xl font-medium">Traflagar</p>
      </div>
      <p
        className="lg:hidden text-5xl ml-auto"
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      >
        {openMenu ? <GrClose /> : <BiMenuAltRight />}
      </p>
      {openMenu && (
        <ul className="absolute top-28 right-2  flex flex-col gap-8 w-48 px-8 py-4 bg-sky-200 shadow-lg list-none text-lg font-extralight">
          <li className="hover:font-semibold hover:outline-offset-8 hover:border-b-2 border-slate-700">
            Home
          </li>
          <li className="hover:font-semibold hover:outline-offset-8 hover:border-b-2 border-slate-700">
            Find a doctor
          </li>
          <li className="hover:font-semibold hover:outline-offset-8 hover:border-b-2 border-slate-700">
            Apps
          </li>
          <li className="hover:font-semibold hover:outline-offset-8 hover:border-b-2 border-slate-700">
            Testimonals
          </li>
          <li className="hover:font-semibold hover:outline-offset-8 hover:border-b-2 border-slate-700">
            About us
          </li>
        </ul>
      )}
      <ul className="hidden lg:flex gap-16 list-none text-lg font-extralight">
        <li className="hover:font-semibold hover:outline-offset-8 hover:border-b-2 border-slate-700">
          Home
        </li>
        <li className="hover:font-semibold hover:outline-offset-8 hover:border-b-2 border-slate-700">
          Find a doctor
        </li>
        <li className="hover:font-semibold hover:outline-offset-8 hover:border-b-2 border-slate-700">
          Apps
        </li>
        <li className="hover:font-semibold hover:outline-offset-8 hover:border-b-2 border-slate-700">
          Testimonals
        </li>
        <li className="hover:font-semibold hover:outline-offset-8 hover:border-b-2 border-slate-700">
          About us
        </li>
      </ul>
    </div>
  );
};

export default Header;
