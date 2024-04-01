"use client";
import { CollectionItem } from "@/data/data";

import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";

type PropsType = {
  items: CollectionItem[];
};

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from "./SliderItem";
import NextArrow from "./NextArrow";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PrevArrow from "./PrevArrow ";

const Sliders = ({ items }: PropsType) => {
  const sliderRef = useRef<Slider>(null);
  var settings: Settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative w-full md:w-[80%]">
      <button
        onClick={() => sliderRef?.current?.slickPrev()}
        className="absolute top-0 bottom-0 m-auto -left-5 md:-left-20 z-10  h-5 w-5 md:h-12 md:w-9 flex items-center justify-center border border-[#2C9CF0] text-[#2C9CF0]">
        <FaChevronLeft className="h-3 w-3 md:h-4 md:w-4" />
      </button>
      <button
        onClick={() => sliderRef?.current?.slickNext()}
        className="absolute top-0 bottom-0 m-auto -right-5 md:-right-20 z-10 h-5 w-5 md:h-12 md:w-9 flex items-center justify-center border border-[#2C9CF0] text-[#2C9CF0]">
        <FaChevronRight className="h-3 w-3 md:h-4 md:w-4" />
      </button>
      <Slider ref={sliderRef} {...settings}>
        {items.map(item => (
          <SliderItem key={item.id} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default Sliders;
