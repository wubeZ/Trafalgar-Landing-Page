"use client";

import React, { useRef } from "react";
import TestimonialCard from "../components/TestimonialCard";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { type Swiper as SwiperRef } from "swiper"
import "swiper/css";

const TestimonalSection = () => {
  const swiperRef = useRef<SwiperRef | null>(null);

  return (
    <div id="testimonial" className="pt-24 px-8 w-full flex flex-col lg:items-center">
      <p className="text-center text-3xl lg:text-4xl font-semibold">
        Testimonials
      </p>
      <p className="border-b-2 border-slate-800 w-14 mx-auto my-8"></p>
        <div className="flex justify-center items-center max-w-6xl lg:w-full">
          <div className="gap-24 lg:gap-40 mb-4 px-8 mt-16 lg:mx-32 text-center w-full lg:max-w-6xl">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              {new Array(4).fill(0).map((item, index) => [
                <SwiperSlide key={index}>
                  <TestimonialCard key={index} index={index} />
                </SwiperSlide>,
              ])}
            </Swiper>
          </div>
      </div>
      <div className="flex gap-8 justify-center items-center text-3xl font-bold">
        <button className="" onClick={() => swiperRef.current?.slidePrev()} aria-label="slide to left">
          <AiOutlineLeft />
        </button>
        <button className="" onClick={() => swiperRef.current?.slideNext()} aria-label="slide to right">
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonalSection;
