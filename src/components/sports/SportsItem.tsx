import { SportsItem } from "@/data/data";
import Image from "next/image";
import React from "react";

type PropsType = {
  item: SportsItem;
  index?: number;
};

const SportsItem: React.FC<PropsType> = ({ item, index }) => {
  return (
    <div
      className={`${
        index && index <= 3 ? "xl:hidden" : ""
      } bg-[#FFFFFF] dark:bg-[#3B3E47] p-2 shadow-md`}>
      <div className="relative h-[320px] md:h-[278px]">
        <Image src={item.image} fill alt={item.title} />
      </div>

      <h2 className="text-[17px] text-[#000] dark:text-[#FFF] font-medium my-2">
        {item.title}
      </h2>
      <div className="w-full h-max bg-[#292B32] flex gap-10 p-2 text-sm">
        <Card title="Total Events" subTitle={`${item.totalEvents} Events`} />
        <Card title="Sport" subTitle={item.sport} />
      </div>
    </div>
  );
};

type CardPropsType = {
  title: string;
  subTitle: string;
};

const Card = ({ title, subTitle }: CardPropsType) => {
  return (
    <div className="flex flex-col">
      <span className="text-[#525965] dark:text-[#DFDFDF] text-xs">
        {title}
      </span>
      <span className="text-[#000] dark:text-[#FFF] text-sm font-semibold">
        {subTitle}
      </span>
    </div>
  );
};

export default SportsItem;
