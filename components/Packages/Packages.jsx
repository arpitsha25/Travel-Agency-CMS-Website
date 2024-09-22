import React from "react";
import PKG1 from "../../public/PKG1.jpg";
import PKG2 from "../../public/PKG2.jpg";
import PKG3 from "../../public/PKG3.jpg";
import PKG4 from "../../public/PKG4.jpg";
import { FaArrowRight } from "react-icons/fa";
import PackageCard from "./PackageCard";
import { useRouter } from "next/router";
const Packages = () => {
    const router = useRouter()
  const PackgeData = [
    {
      imgSrc: PKG1,
      title: "Explore Himalayas",
      location: "Himachal Pradesh",
      duration: "2-3 Nights",
      description:
        "Exploring the Himalayas is a journey into one of the most majestic and awe-inspiring regions on Earth. Known for their towering peaks, including the iconic Mount Everest, the Himalayas offer breathtaking landscapes and rich cultural experiences. This region captivates adventurers and nature lovers alike, providing opportunities for trekking, exploring serene valleys, and immersing oneself in local traditions.",
      price: "19999",
      strikeprice : "22999"
    },
    {
      imgSrc: PKG2,
      title: "Go Goa",
      location: "Goa",
      duration: "3-4 Nights",
      description:
        "Goa, India's smallest state by area, is a vibrant and tropical paradise known for its golden beaches, lively nightlife, and rich cultural heritage. Nestled along the western coastline, Goa offers a unique blend of Portuguese colonial architecture and Indian traditions. From the bustling beaches of Baga and Calangute to the tranquil shores of Palolem, Goa caters to both party enthusiasts and those seeking peace. The state is famous for its seafood, spice plantations, and vibrant festivals like Carnival and New Year's Eve celebrations. Beyond the beaches, Goa’s lush landscapes, ancient churches, and vibrant markets make it a must-visit destination for travelers seeking adventure, relaxation, and cultural experiences.",
      price: "7999",
      strikeprice : "9999"
    },
    {
      imgSrc: PKG3,
      title: "Padharo Mhare Desh",
      location: "Jaipur",
      duration: "3-4 Nights",
      description:
        "Jaipur, the capital of Rajasthan, is a city steeped in royal history and architectural grandeur. Known as the 'Pink City' for its signature terracotta-colored buildings, Jaipur is a captivating blend of tradition and modernity. The city is renowned for its majestic palaces, such as the City Palace and Hawa Mahal, as well as its formidable forts, like the Amber and Nahargarh Forts, which offer stunning views of the surrounding landscape. Jaipur is also a hub of vibrant markets, where you can find intricate jewelry, colorful textiles, and traditional Rajasthani handicrafts. With its rich cultural heritage, royal charm, and warm hospitality, Jaipur offers an unforgettable experience for travelers.",
      price: "10999",
      strikeprice : "11999"
    },
    {
      imgSrc: PKG4,
      title: "Visit Lakshadweep",
      location: "Lakshadweep",
      duration: "3-4 Nights",
      description:
        "Lakshadweep, an archipelago of 36 stunning coral islands in the Arabian Sea, is one of India’s most pristine and unspoiled tropical paradises. Known for its crystal-clear turquoise waters, white sandy beaches, and vibrant coral reefs, Lakshadweep is a haven for nature lovers and adventure enthusiasts alike. The islands offer opportunities for activities like snorkeling, scuba diving, and kayaking, giving visitors a chance to explore the rich marine life, including colorful corals and exotic fish species. With only a few islands open to tourists, Lakshadweep remains a tranquil escape, far from the crowds, offering an intimate connection with nature. Its serene beauty, coupled with the charm of local culture and sustainable tourism practices, makes Lakshadweep an ideal destination for those seeking peace, adventure, and a deeper appreciation of the natural world.",
      price: "13999",
      strikeprice : "15999"

    },
    {
        imgSrc: PKG1,
        title: "Explore Himalayas",
        location: "Himachal Pradesh",
        duration: "2-3 Nights",
        description:
          "Exploring the Himalayas is a journey into one of the most majestic and awe-inspiring regions on Earth. Known for their towering peaks, including the iconic Mount Everest, the Himalayas offer breathtaking landscapes and rich cultural experiences. This region captivates adventurers and nature lovers alike, providing opportunities for trekking, exploring serene valleys, and immersing oneself in local traditions.",
        price: "19999",
        strikeprice : "22999"
      },
      {
        imgSrc: PKG2,
        title: "Go Goa",
        location: "Goa",
        duration: "3-4 Nights",
        description:
          "Goa, India's smallest state by area, is a vibrant and tropical paradise known for its golden beaches, lively nightlife, and rich cultural heritage. Nestled along the western coastline, Goa offers a unique blend of Portuguese colonial architecture and Indian traditions. From the bustling beaches of Baga and Calangute to the tranquil shores of Palolem, Goa caters to both party enthusiasts and those seeking peace. The state is famous for its seafood, spice plantations, and vibrant festivals like Carnival and New Year's Eve celebrations. Beyond the beaches, Goa’s lush landscapes, ancient churches, and vibrant markets make it a must-visit destination for travelers seeking adventure, relaxation, and cultural experiences.",
        price: "7999",
        strikeprice : "9999"
      },
      {
        imgSrc: PKG3,
        title: "Padharo Mhare Desh",
        location: "Jaipur",
        duration: "3-4 Nights",
        description:
          "Jaipur, the capital of Rajasthan, is a city steeped in royal history and architectural grandeur. Known as the 'Pink City' for its signature terracotta-colored buildings, Jaipur is a captivating blend of tradition and modernity. The city is renowned for its majestic palaces, such as the City Palace and Hawa Mahal, as well as its formidable forts, like the Amber and Nahargarh Forts, which offer stunning views of the surrounding landscape. Jaipur is also a hub of vibrant markets, where you can find intricate jewelry, colorful textiles, and traditional Rajasthani handicrafts. With its rich cultural heritage, royal charm, and warm hospitality, Jaipur offers an unforgettable experience for travelers.",
        price: "10999",
        strikeprice : "11999"
      },
      {
        imgSrc: PKG4,
        title: "Visit Lakshadweep",
        location: "Lakshadweep",
        duration: "3-4 Nights",
        description:
          "Lakshadweep, an archipelago of 36 stunning coral islands in the Arabian Sea, is one of India’s most pristine and unspoiled tropical paradises. Known for its crystal-clear turquoise waters, white sandy beaches, and vibrant coral reefs, Lakshadweep is a haven for nature lovers and adventure enthusiasts alike. The islands offer opportunities for activities like snorkeling, scuba diving, and kayaking, giving visitors a chance to explore the rich marine life, including colorful corals and exotic fish species. With only a few islands open to tourists, Lakshadweep remains a tranquil escape, far from the crowds, offering an intimate connection with nature. Its serene beauty, coupled with the charm of local culture and sustainable tourism practices, makes Lakshadweep an ideal destination for those seeking peace, adventure, and a deeper appreciation of the natural world.",
        price: "13999",
        strikeprice : "15999"
  
      },
      {
        imgSrc: PKG1,
        title: "Explore Himalayas",
        location: "Himachal Pradesh",
        duration: "2-3 Nights",
        description:
          "Exploring the Himalayas is a journey into one of the most majestic and awe-inspiring regions on Earth. Known for their towering peaks, including the iconic Mount Everest, the Himalayas offer breathtaking landscapes and rich cultural experiences. This region captivates adventurers and nature lovers alike, providing opportunities for trekking, exploring serene valleys, and immersing oneself in local traditions.",
        price: "19999",
        strikeprice : "22999"
      },
      {
        imgSrc: PKG2,
        title: "Go Goa",
        location: "Goa",
        duration: "3-4 Nights",
        description:
          "Goa, India's smallest state by area, is a vibrant and tropical paradise known for its golden beaches, lively nightlife, and rich cultural heritage. Nestled along the western coastline, Goa offers a unique blend of Portuguese colonial architecture and Indian traditions. From the bustling beaches of Baga and Calangute to the tranquil shores of Palolem, Goa caters to both party enthusiasts and those seeking peace. The state is famous for its seafood, spice plantations, and vibrant festivals like Carnival and New Year's Eve celebrations. Beyond the beaches, Goa’s lush landscapes, ancient churches, and vibrant markets make it a must-visit destination for travelers seeking adventure, relaxation, and cultural experiences.",
        price: "7999",
        strikeprice : "9999"
      },
      {
        imgSrc: PKG3,
        title: "Padharo Mhare Desh",
        location: "Jaipur",
        duration: "3-4 Nights",
        description:
          "Jaipur, the capital of Rajasthan, is a city steeped in royal history and architectural grandeur. Known as the 'Pink City' for its signature terracotta-colored buildings, Jaipur is a captivating blend of tradition and modernity. The city is renowned for its majestic palaces, such as the City Palace and Hawa Mahal, as well as its formidable forts, like the Amber and Nahargarh Forts, which offer stunning views of the surrounding landscape. Jaipur is also a hub of vibrant markets, where you can find intricate jewelry, colorful textiles, and traditional Rajasthani handicrafts. With its rich cultural heritage, royal charm, and warm hospitality, Jaipur offers an unforgettable experience for travelers.",
        price: "10999",
        strikeprice : "11999"
      },
      {
        imgSrc: PKG4,
        title: "Visit Lakshadweep",
        location: "Lakshadweep",
        duration: "3-4 Nights",
        description:
          "Lakshadweep, an archipelago of 36 stunning coral islands in the Arabian Sea, is one of India’s most pristine and unspoiled tropical paradises. Known for its crystal-clear turquoise waters, white sandy beaches, and vibrant coral reefs, Lakshadweep is a haven for nature lovers and adventure enthusiasts alike. The islands offer opportunities for activities like snorkeling, scuba diving, and kayaking, giving visitors a chance to explore the rich marine life, including colorful corals and exotic fish species. With only a few islands open to tourists, Lakshadweep remains a tranquil escape, far from the crowds, offering an intimate connection with nature. Its serene beauty, coupled with the charm of local culture and sustainable tourism practices, makes Lakshadweep an ideal destination for those seeking peace, adventure, and a deeper appreciation of the natural world.",
        price: "13999",
        strikeprice : "15999"
  
      },
  ];
  return (
    <>
     {router.pathname !== '/allpackages' && <div className="p-5 w-full flex justify-center items-center flex-col">
        <div className="font-Smooch italic text-[22px] text-green-500 ">
          Book Now
        </div>
        <div id = 'packages' className="font-Roboto font-bold text-[32px]">
          POPULAR PACKAGES
        </div>
      </div>}
      <div className="relative flex flex-wrap md:flex-row flex-col items-center w-full justify-around mb-10 gap-5 ">
        {PackgeData.slice(0,router.pathname == '/allpackages' ? PackgeData.length : 4).map((item) => {
          return (
            <>
              <PackageCard
                img={item.imgSrc}
                title={item.title}
                location={item.location}
                duration={item.duration}
                description={item.description}
                price={item.price}
                strikeprice={item.strikeprice}
              />
            </>
          );
        })}
      </div>
      {router.pathname !== '/allpackages' && <div className=" w-full flex justify-center items-center flex-col">
        <div className=" text-center">
          <h2>
            <button className="button-primary2" onClick={()=>router.push('/allpackages')}>
              Explore All Packages
              <FaArrowRight />
            </button>
          </h2>
        </div>
      </div>}
      {/* <div className="p-5 w-full flex justify-center items-center flex-col">
        <div className="font-Smooch italic text-[22px] text-green-500 ">
          Whats New
        </div>
        <div className="font-Roboto font-bold text-[32px]">SPECIAL OFFERS</div>
      </div> */}
    </>
  );
};

export default Packages;
