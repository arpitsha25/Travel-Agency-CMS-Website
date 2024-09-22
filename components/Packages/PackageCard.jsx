import React from "react";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
const PackageCard = (props) => {
  return (
    <div className="package-card group">
      <div className="h-[40%] group overflow-hidden relative">
        <div className="relative w-full h-full rounded-3xl overflow-hidden">
          <div className="w-full h-full transition-transform duration-300 ease-in-out transform group-hover:scale-110">
            <Image src={props.img} className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity duration-300 ease-in-out pointer-events-none"></div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-center p-2 gap-4 text-[#666666]">
        <div className="text-[18px]">{props.title}</div>
        <div className="w-full flex justify-between">
          <div className="flex items-center gap-2 text-[14px]">
            <FaLocationDot />
            {props.location}
          </div>
          <div className="flex items-center gap-2 text-[14px]">
            <MdAccessTimeFilled />
            {props.duration}
          </div>
        </div>
        <div className="text-[12px] lg:h-[110px] md:h-[160px] h-[160px] overflow-hidden">
          {props.description}
        </div>
        <div className="absolute w-full bottom-1 px-2">
          <hr className="border-gray-300 w-full pb-2"></hr>
          <div className="flex justify-between">
            <div className="flex flex-col text-[14px]">
              <p>From <span className="line-through">{props.strikeprice}</span></p>
              <p className="text-[22px] text-green-500">INR {props.price}</p>
            </div>
            <div className="flex items-center gap-2 text-[14px]">
              <div className=" text-center">
                <h2>
                  <button className="button-primary2">
                    Explore
                    <FaArrowRight />
                  </button>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
