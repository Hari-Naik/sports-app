import Image from "next/image";
import React from "react";

const Advertisement = () => {
  return (
    <div className="bg-[#FFF] dark:bg-[#3B3E47] p-2">
      <div className="relative h-[50%]">
        <Image src={"/images/advertisement.png"} fill alt="advertisment" />
        <div className="bg-[#000000] absolute top-0 right-0 z-10 px-3">
          <span className="text-xs font-semibold text-[#FFF]">Ad</span>
        </div>
      </div>
      <h2 className="text-[#222D3A] dark:text-[#FFF] text-xl font-semibold my-2">
        Advertisement title
      </h2>
      <p className="text-xs text-[#525965] dark:text-[#DFDFDF]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab incidunt
        omnis iste ducimus molestias odit? Non molestiae, sint architecto atque
        enim nihil explicabo asperiores assumenda pariatur necessitatibus
        dignissimos, perspiciatis in?
      </p>
    </div>
  );
};

export default Advertisement;
