import React from 'react';
import Slider from './slider/Slider';
import ServicesSection from './ServiceSection/ServicesSection';
import Head from '../../components/Head';
import TestimonialSlider from './testimonial/TestimonialSlider';

const Home = () => {
    console.log('home');

    return (
        <div>
            <Head title="Home" />
            <Slider />
            <div className="container">
                <ServicesSection />
                <TestimonialSlider />
            </div>
        </div>
    );
};

export default Home;
