import React from "react";
import { MdAirplaneTicket } from "react-icons/md";
import { MdLocalHotel } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa";
import { RiShipFill } from "react-icons/ri";
import { FaCcVisa } from "react-icons/fa6";
import { MdCarRental } from "react-icons/md";
const Services = () => {
  return (
    <>
      <div className="bg-[#231535] mt-10">
        <div className="p-5 w-full flex justify-center items-center flex-col">
          <div className="font-Smooch italic text-[22px] text-white ">
            Avail Now
          </div>
          <div
            id="packages"
            className="font-Roboto font-bold text-[32px] text-white"
          >
            OUR SERVICES
          </div>
        </div>
        <div className="w-full h-[350px] sm:h-[250px]  flex items-center justify-around text-[45px] sm:text-[75px] flex-wrap gap-5 ">
          <div className="service_icon">
            <MdAirplaneTicket />
            <h1 className="text-[18px]">Air Tickets</h1>
          </div>
          <div className="service_icon">
            <MdLocalHotel />
            <h1 className="text-[18px]">Hotel Programs</h1>
          </div>
          <div className="service_icon">
            <FaUmbrellaBeach />
            <h1 className="text-[18px]">Holiday Packages</h1>
          </div>
          <div className="service_icon">
            <RiShipFill />
            <h1 className="text-[18px]">Book Cruises</h1>
          </div>
          <div className="service_icon">
            <FaCcVisa />
            <h1 className="text-[18px]">Visa Assistance</h1>
          </div>
          <div className="service_icon">
            <MdCarRental />
            <h1 className="text-[18px]">Car Rentals</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
