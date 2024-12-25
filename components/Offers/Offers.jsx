import React from "react";
import Offer1 from "../../public/Offer_1.jpg";
import Offer2 from "../../public/Offer_2.jpg";
import Offer3 from "../../public/Offer_3.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
const Offers = () => {
  // console.log("ooo",Offer1)
  return (
    <>
      <div className="p-5 w-full flex justify-center items-center flex-col ">
        <div className="font-Smooch italic text-[22px] text-green-500 ">
          Whats New
        </div>
        <div className="font-Roboto font-bold lg:text-[32px] text-[24px]">SPECIAL OFFERS</div>
      </div>
      <div className="flex lg:flex-row flex-col items-center gap-5 w-full justify-around mb-10 bg-[#231535] lg:p-10 p-8">
        <div className="card group">
          <Image
            src={Offer1}
            className=" w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-110"
          />
          <div className="absolute inset-0 z-10 w-full h-full flex  items-center">
            <div className="w-[75%]  flex flex-col lg:gap-5 gap-2">
              <div className="lg:text-[28px] text-[22px] font-medium text-center">
                Grab Offer !!!
              </div>
              <div className="lg:text-[18px] text-[14px] text-center">Discount upto 30%</div>
              <div className=" text-center">
                <h2>
                  <button className="button-primary2 lg:text-[16px] text-[14px]">View Details<FaArrowRight/></button>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="card group">
          <Image
            src={Offer2}
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-110"
          />
                    <div className="absolute inset-0 z-10 w-full h-full flex  items-center">
            <div className="w-[75%]  flex flex-col lg:gap-5 gap-2">
              <div className="lg:text-[28px] text-[22px] font-medium text-center">
                Summer Escapes !!
              </div>
              <div className="lg:text-[18px] text-[14px] text-center">Plan your trip with us</div>
              <div className=" text-center">
                <h2>
                  <button className="button-primary2 lg:text-[16px] text-[14px]">Know More<FaArrowRight/></button>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="card group ">
          <Image
            src={Offer3}
            alt="Offer"
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-110"
          />
        <div className="absolute inset-0 z-10 w-full h-full flex  items-center">
            <div className="w-[75%] flex flex-col lg:gap-5 gap-2">
              <div className="lg:text-[28px] text-[22px] font-medium text-center">
                Exclusive Deals !!
              </div>
              <div className="lg:text-[18px] text-[14px] text-center">Want to have deals with 50% off...</div>
              <div className=" text-center">
                <h2>
                  <button className="button-primary2 lg:text-[16px] text-[14px]">Book Now<FaArrowRight/></button>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Offers;
