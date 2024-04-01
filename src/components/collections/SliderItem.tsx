import { CollectionItem } from "@/data/data";
import Image from "next/image";
import React from "react";

type PropsType = {
  item: CollectionItem;
};

const SliderItem = ({ item }: PropsType) => {
  return (
    <div className="h-max bg-[#FFFFFF] dark:bg-[#3B3E47] shadow-md p-2">
      <div className="relative h-[320px]">
        <Image
          src={item.image}
          fill
          className="object-cover"
          alt={item.title}
        />
      </div>
      <BreakDown />
      <Info item={item} />
    </div>
  );
};

const BreakDown = () => {
  return (
    <div className="w-full flex items-center justify-between mt-2">
      <div className="h-5 w-5 rounded-full bg-white dark:bg-[#222a2e] -ml-4 "></div>
      <div className=" w-[90%] border-t-2 border-dashed border-[#818A97]"></div>
      <div className="h-5 w-5 rounded-full bg-white dark:bg-[#222a2e] -mr-4 "></div>
    </div>
  );
};

const Info = ({ item }: PropsType) => {
  return (
    <div className="w-full flex flex-col items-center text-center gap-2 mt-2">
      <h2 className="text-[17px] text-[#000] dark:text-[#FFFFFF] font-medium">
        {item.title}
      </h2>
      <div className="flex items-center divide-x divided-[#DFDFDF] gap-2 text-sm text-[#000] dark:text-[#DFDFDF]">
        <span>OCT 15</span>
        <span className="pl-2">SUN</span>
        <span className="pl-2">4.30 PM</span>
      </div>
      <p className="text-sm text-[#525965] dark:text-[#DFDFDF] text-center px-2">
        {item.venue}
      </p>
      <button className="bg-[#000] text-white text-sm w-full py-2 mt-4">
        {item.btnText}
      </button>
    </div>
  );
};

export default SliderItem;
