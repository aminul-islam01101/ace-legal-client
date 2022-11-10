import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import './Slider.css';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper';

export default function Slider() {
    return (
        <Swiper
            spaceBetween={100}
            centeredSlides
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
                type: 'fraction',
            }}
            navigation
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            loop
        >
            <SwiperSlide className="h-[75vh]">
                <img
                    src="https://i.ibb.co/6nghbft/patent-law-concept-with-man-weighing-scale-52683-48415.webp"
                    alt=""
                />
            </SwiperSlide>
            <SwiperSlide className="h-[75vh]">
                <img
                    src="https://i.ibb.co/GkxLWxj/concentrated-colleagues-watching-statistic-charts-talking-about-work-professional-senior-managers-yo.jpg"
                    alt=""
                />
            </SwiperSlide>

            <SwiperSlide className="h-[75vh]">
                <img
                    src="https://img.freepik.com/free-photo/still-life-with-scales-justice_23-2149776044.jpg?w=996&t=st=1668099172~exp=1668099772~hmac=f426c23106dca618c942bd74f99c821e692ed884a6e79ce66fc39f56134c72fe"
                    alt=""
                />
            </SwiperSlide>
        </Swiper>
    );
}
