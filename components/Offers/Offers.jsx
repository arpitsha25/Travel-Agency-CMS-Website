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
      <div className="p-5 w-full flex justify-center items-center flex-col">
        <div className="font-Smooch italic text-[22px] text-green-500 ">
          Whats New
        </div>
        <div className="font-Roboto font-bold text-[32px]">SPECIAL OFFERS</div>
      </div>
      <div className="flex lg:flex-row flex-col items-center gap-5 w-full justify-around mb-10 ">
        <div className="card group">
          {/* <img src={Offer1.src} alt='offer1'/> */}
          <Image
            src={Offer1}
            className=" w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-110"
          />
          <div className="absolute inset-0 z-10 w-full h-full flex  items-center">
            <div className="w-[75%]  flex flex-col gap-5">
              <div className="text-[28px] font-medium text-center">
                Grab Offer !!!
              </div>
              <div className="text-[18px] text-center">Discount upto 30%</div>
              <div className=" text-center">
                <h2>
                  <button className="button-primary2">View Details<FaArrowRight/></button>
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
            <div className="w-[75%]  flex flex-col gap-5">
              <div className="text-[28px] font-medium text-center">
                Summer Escapes !!
              </div>
              <div className="text-[18px] text-center">Plan your trip with us</div>
              <div className=" text-center">
                <h2>
                  <button className="button-primary2">Know More<FaArrowRight/></button>
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
            <div className="w-[75%] flex flex-col gap-5">
              <div className="text-[28px] font-medium text-center">
                Exclusive Deals !!
              </div>
              <div className="text-[18px] text-center">Want to have deals with 50% off...</div>
              <div className=" text-center">
                <h2>
                  <button className="button-primary2">Book Now<FaArrowRight/></button>
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
