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
                    src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
                    alt=""
                />
            </SwiperSlide>
            <SwiperSlide className="h-[75vh]">Slide 2</SwiperSlide>
            <SwiperSlide className="h-[75vh]">Slide 3</SwiperSlide>
        </Swiper>
    );
}