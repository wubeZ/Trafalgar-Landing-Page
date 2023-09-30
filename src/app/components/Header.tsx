"use client";

import React, { useRef, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
import { useClickOutside } from "../hooks/useClickOutside";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const wrapperRef = useRef(null);

  useClickOutside(wrapperRef, () => {
    setOpenMenu(false);
  });

  return (
    <div className="sticky z-30 top-0 flex h-20 bg-white justify-between items-center px-4 lg:px-20 shadow-sm">
      <Link href='#home' className="cursor-pointer">
        <div className="flex items-center gap-2">
          <p className="bg-blue-500 text-slate-50 rounded-full h-10 w-10 text-center pt-1 font-semibold text-2xl">
            T
          </p>
          <p className="text-2xl font-medium">Traflagar</p>
        </div>
      </Link>
      <p
        className="md:hidden text-5xl ml-auto"
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      >
        {openMenu ? <GrClose /> : <BiMenuAltRight />}
      </p>
      {openMenu && (
        <ul
          className="absolute top-20 right-2  flex flex-col gap-8 w-48 px-8 py-4 bg-sky-200 shadow-lg list-none text-lg font-extralight transition-all ease-linear"
          ref={wrapperRef}
        >
          <Link href="#home">
            <li className="hover:font-medium hover:outline-offset-4 hover:border-b-2 border-slate-700">
              Home
            </li>
          </Link>
          <Link href="#service">
            <li className="hover:font-medium hover:outline-offset-4 hover:border-b-2 border-slate-700">
              Find a doctor
            </li>
          </Link>
          <Link href="#app">
            <li className="hover:font-medium hover:outline-offset-4 hover:border-b-2 border-slate-700">
              Apps
            </li>
          </Link>
          <Link href="#testimonial">
            <li className="hover:font-medium hover:outline-offset-4 hover:border-b-2 border-slate-700">
              Testimonials
            </li>
          </Link>
          <Link href="#articles">
            <li className="hover:font-medium hover:outline-offset-4 hover:border-b-2 border-slate-700">
              Articles
            </li>
          </Link>
        </ul>
      )}
      <ul className="hidden md:flex gap-12 lg:gap-16 list-none text-base lg:text-lg font-extralight transition-all ease-linear">
        <Link href="#home">
          <li className="hover:font-medium hover:outline-offset-4 hover:border-b-2 border-slate-700">
            Home
          </li>
        </Link>
        <Link href="#service">
          <li className="hover:font-medium hover:outline-offset-4 hover:border-b-2 border-slate-700">
            Find a doctor
          </li>
        </Link>
        <Link href="#app">
          <li className="hover:font-medium hover:outline-offset-4 hover:border-b-2 border-slate-700">
            Apps
          </li>
        </Link>
        <Link href="#testimonial">
          <li className="hover:font-medium hover:outline-offset-4 hover:border-b-2 border-slate-700">
            Testimonials
          </li>
        </Link>
        <Link href="#articles">
          <li className="hover:font-medium hover:outline-offset-4 hover:border-b-2 border-slate-700">
            Articles
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
