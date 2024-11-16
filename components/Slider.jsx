import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination ,Navigation,Autoplay} from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import Swiper styles
import 'swiper/css';

const Slider = () => {

    const SliderContent = [
        { img_src: "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" , title : "Explore India from sky" , desc:"Exploring India from the sky can be a breathtaking experience! You get to see the diverse landscapes, from the majestic Himalayas in the north to the beautiful beaches in the south"},
        { img_src: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" , title : "Listen to the mountains" , desc:"Listening to the mountains is a poetic way to describe the experience of connecting with nature's grandeur.Mountain regions are often home to diverse bird species"},
        { img_src: "https://images.pexels.com/photos/8112535/pexels-photo-8112535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" , title : "serenity of varansi" , desc:"The ghats, with their steps leading down to the river, are central to Varanasi’s serenity. Witnessing the early morning rituals, where locals and pilgrims bathe in the Ganges"},
        { img_src: "https://images.pexels.com/photos/7263943/pexels-photo-7263943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" , title : "taj beauty " , desc:"The Taj Mahal, located in Agra, India, is one of the most iconic and beautiful monuments in the world. Built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal"},
        { img_src: "https://images.pexels.com/photos/5562368/pexels-photo-5562368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" , title : "jama masjid delhi" , desc:"The Jama Masjid in Delhi is one of the largest and most impressive mosques in India. Here’s a closer look at this historical and architectural marvel.The mosque was commissioned by Mughal Emperor Shah Jahan"},
        { img_src: "https://images.pexels.com/photos/16213217/pexels-photo-16213217/free-photo-of-lake-and-hazratbal-city-in-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" , title : "Nature calling" , desc:"Nature encompasses the physical world around us, including the living and non-living elements. It is a source of beauty, inspiration, and sustenance. Here are some key aspects of nature"},
        { img_src: "https://images.pexels.com/photos/2480807/pexels-photo-2480807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" , title : "Landscapes" , desc:"Freshwater bodies support a wide range of life and provide important resources for people and wildlife.From towering trees to delicate flowers, plants play a crucial role in sustaining life on Earth"},
        { img_src: "https://images.pexels.com/photos/1469872/pexels-photo-1469872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" , title : "See the sea" , desc:"India’s beaches offer a diverse range of experiences, from bustling party spots to tranquil retreats.Known for its vibrant nightlife, water sports, and beach shacks"},
      ];

  return (
    <Swiper
    slidesPerView={2}
    spaceBetween={0}
    pagination={{
      clickable: true,
    }}
    breakpoints={{
        // When the viewport is >= 640px
        640: {
          slidesPerView: 2, // Show 2 slides
          spaceBetween: 0,
        },
        // When the viewport is < 640px
        0: {
          slidesPerView: 1, // Show 1 slide for smaller devices
          spaceBetween: 0,
        },
      }}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Pagination,Navigation,Autoplay]}
      speed={500} // Transition duration (500ms)
      effect="slide" // You can choose 'slide', 'fade', 'cube', 'coverflow', etc.
    //   navigation={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='slider_class'
    >
        {SliderContent?.map((item,index)=>{
            return(
                <>
                    <SwiperSlide key={index} className='slide bg-neutral-800'>
                        <div className='relative w-full h-full '>
                            <img className="w-full h-full object-cover" src={item.img_src} alt='img'/>
                            <div className='absolute inset-0 bg-black opacity-30'>
                            </div>
                            <div className='absolute inset-0 flex items-end justify-center text-white z-10 bottom-10'>
                                <div className='w-[75%] flex flex-col items-center justify-center'>
                                <h1 className='lg:text-[32px] text-[24px] font-bold text-center'>{item.title.toUpperCase()}</h1>
                                <p className='text-center lg:text-[16px] text-[14px]'>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </>
            )
        })}
    </Swiper>
  )
}

export default Slider