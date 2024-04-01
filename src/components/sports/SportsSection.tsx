"use client";
import React, { useState } from "react";
import SportsItem from "./SportsItem";
import { sports } from "@/data/data";
import Advertisement from "../Advertisement";

const SportsSection = () => {
  const [end, setEnd] = useState<number>(4);

  const handleClick = () => {
    if (end < sports.items.length) {
      setEnd(prev => prev + 4);
    } else {
      setEnd(4);
    }
  };

  return (
    <section className="w-[90%] max-w-6xl mx-auto flex flex-col">
      <span className="w-max text-2xl text-[#000] dark:text-[#FFF] font-bold border-b-2 border-[#738FFF] py-1">
        {sports.title}
      </span>
      <div className="hidden xl:layout gap-4 mt-4">
        {sports.items.slice(0, 4).map(item => (
          <SportsItem key={item.id} item={item} />
        ))}
        <Advertisement />
      </div>

      <div className="layout gap-4 mt-4">
        {sports.items.slice(0, end).map((item, index) => (
          <SportsItem key={item.id} item={item} index={index} />
        ))}
      </div>
      <button
        onClick={handleClick}
        className="bg-[#2C9CF0] text-white text-sm font-semibold py-2 px-6 rounded mt-10 mx-auto">
        {end >= sports.items.length ? "See Less" : "See More"}
      </button>
    </section>
  );
};

export default SportsSection;
