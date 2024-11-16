import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import user from "../../public/user.webp";
import user2 from "../../public/user2.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoMdStar } from "react-icons/io";

import Image from "next/image";
const Testimonials = () => {
  const testimonialsData = [
    {
      profile: user,
      description:
        "I recently booked a trip to Bali through Travel with us, and it was hands down the best vacation I’ve ever had. From the seamless booking process to the handpicked accommodations, everything was perfect. The itinerary was well-balanced with adventure, culture, and relaxation. Our guide was knowledgeable and made sure we experienced the local culture authentically.",
      name: "Arpit Sharma",
      rating : 4
    },
    {
      profile: user2,
      description:
        "Thanks to Travel with us, my trip to the Maldives was an absolute dream come true. The service was exceptional from start to finish, with every detail carefully planned. The island resort was stunning, and the activities like snorkeling and sunset cruises were beyond my expectations.",
      name: "Rishabh Shukla",
      rating : 5
    },
    {
      profile: user,
      description:
        "I recently booked a trip to Bali through Travel with us, and it was hands down the best vacation I’ve ever had. From the seamless booking process to the handpicked accommodations, everything was perfect. The itinerary was well-balanced with adventure, culture, and relaxation. Our guide was knowledgeable and made sure we experienced the local culture authentically.",
      name: "Arpit Sharma",
      rating : 5
    },
    {
      profile: user2,
      description:
        "Thanks to Travel with us, my trip to the Maldives was an absolute dream come true. The service was exceptional from start to finish, with every detail carefully planned. The island resort was stunning, and the activities like snorkeling and sunset cruises were beyond my expectations.",
      name: "Rishabh Shukla",
      rating : 4
    },
    {
      profile: user,
      description:
        "I recently booked a trip to Bali through Travel with us, and it was hands down the best vacation I’ve ever had. From the seamless booking process to the handpicked accommodations, everything was perfect. The itinerary was well-balanced with adventure, culture, and relaxation. Our guide was knowledgeable and made sure we experienced the local culture authentically.",
      name: "Arpit Sharma",
      rating : 5

    },
    {
      profile: user2,
      description:
        "Thanks to Travel with us, my trip to the Maldives was an absolute dream come true. The service was exceptional from start to finish, with every detail carefully planned. The island resort was stunning, and the activities like snorkeling and sunset cruises were beyond my expectations.",
      name: "Rishabh Shukla",
      rating : 4
    },
  ];
  return (
    <div className="main_container">
      <div className="p-5 w-full flex justify-center items-center flex-col">
        <div className="font-Smooch italic text-[22px] text-green-500 ">
          What our client says
        </div>
        <div id="packages" className="font-Roboto font-bold lg:text-[32px] text-[24px]">
          TESTIMONIALS
        </div>
      </div>
      <div className="flex justify-center items-center w-full mb-10">
        <Swiper
          slidesPerView={2}
          spaceBetween={0}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
          speed={500}
          effect="slide"
        >
          {testimonialsData?.map((testimonial, index) => {
            return (
              <SwiperSlide key={index} className="slideee">
                <div className="flex flex-col justify-between  w-[90%] lg:w-[60%] ">
                  <div className="flex justify-center flex-col items-center gap-2 ">
                    <Image
                      src={testimonial.profile}
                      className="object-cover rounded-[50%] h-[75px] w-[75px]"
                    />
                  <div className="text-[14px] flex flex-col items-center">
                    <div>{testimonial.name}</div>
                    <div className="flex space-x-1 text-yellow-400 text-[16px]">
                      {Array(testimonial.rating).fill().map((_, index) => (
                        <IoMdStar key={index} />
                      ))}
                    </div>
                  </div>
                  </div>
                  <div className=" text-[40px] text-[#666666] opacity-20 ">
                    <FaQuoteLeft />
                  </div>
                  <div className="flex flex-col items-center w-full h-full gap-3">
                    <div className="w-[80%] text-[14px]">
                      {testimonial.description}
                    </div>
                  </div>
                  <div className=" flex justify-end text-[40px] text-[#666666] opacity-20 ">
                    <FaQuoteRight />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
