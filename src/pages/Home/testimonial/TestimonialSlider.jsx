/* eslint-disable no-underscore-dangle */
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import { Pagination, Navigation, Autoplay } from 'swiper';
import React from 'react';
import './Styles.css';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ReviewCard from '../../services/reviews/ReviewCard';

const TestimonialSlider = () => {
    const { data: reviews } = useQuery(['reviews'], () =>
        axios.get('https://ace-legal-server.vercel.app/reviews').then((res) => res.data)
    );
    console.log(reviews);

    return (
        <div className="my-20">
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                slidesPerGroup={2}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                loop
                loopFillGroupWithBlank
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                }}
                navigation
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {reviews?.map((review) => (
                    <SwiperSlide key={review._id} className="h-[50vh]">
                        <ReviewCard review={review} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonialSlider;
