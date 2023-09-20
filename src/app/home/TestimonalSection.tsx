import React from "react";
import TestimonialCard from "../components/TestimonialCard";

const TestimonalSection = () => {
  return (
    <div className="overflow-x-scroll mt-32 lg:mx-8">
      <div className="flex gap-24 lg:gap-40 h-[430px] mb-24 mx-8 lg:mx-32  text-center">
        {new Array(4)
          .fill(0)
          .map((item, index) => [<TestimonialCard key={index} />])}
      </div>
    </div>
  );
};

export default TestimonalSection;
