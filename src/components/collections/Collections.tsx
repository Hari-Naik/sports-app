import { collections } from "@/data/data";
import React from "react";
import Sliders from "./Sliders";

const Collections = () => {
  return (
    <div className="bg-[#FFF] dark:bg-transparent dark:bgGradient w-[90%] max-w-6xl mx-auto flex flex-col items-center justify-center shadow-md px-4 py-32 mt-20">
      <h1 className="text-2xl sm:text-4xl text-[#000000] dark:text-[#FFFFFF] font-bold text-center">
        {collections.title}
      </h1>
      <p className="text-xs sm:text-sm text-[#000000] dark:text-[#FFFFFF] text-center md:w-[80%] lg:w-[70%] my-6">
        {collections.subTitle}
      </p>

      <Sliders items={collections.items} />
    </div>
  );
};

export default Collections;
