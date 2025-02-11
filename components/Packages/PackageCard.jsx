import React from "react";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineFreeCancellation } from "react-icons/md";
import { IoMan } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
const PackageCard = (props) => {
  return (
    <div className="package-card group">
      <div className="h-[45%] group overflow-hidden relative">
        <div className="relative w-full h-full rounded-3xl overflow-hidden">
          <div className="w-full h-full transition-transform duration-300 ease-in-out transform group-hover:scale-110">
            <Image src={props.img} className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity duration-300 ease-in-out pointer-events-none"></div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col  p-2 text-[#666666]">
        <div className="font-Roboto font-normal text-black text-[22px]">{props.title}</div>
        <p  className="text-[14px]">{props.second_title}</p>
        <div className="pt-2 w-full flex justify-between">
          <div className=" flex items-center gap-2 text-[14px]">
            <FaLocationDot />
            {props.location}
          </div>
          <div className="flex items-center gap-2 text-[14px]">
            <MdAccessTimeFilled />
            {props.duration}
          </div>
        </div>
        <div className="flex flex-col">
          <span className="flex items-center gap-2 text-[14px]"><MdOutlineFreeCancellation/><p>Free Cancellation</p></span>
          <span className="flex items-center gap-2 text-[14px]"><IoMan/><p>Tour Guide</p></span>
          <div className="flex space-x-1 text-yellow-400 text-[16px]">
                      {Array(props.rating).fill().map((_, index) => (
                        <IoMdStar key={index} className="text-[18px]" />
                      ))}
                    </div>
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
                  <button className="button-primary2 rounded-l-lg">
                    Enquire now
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
