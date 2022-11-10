import React from 'react';
import Slider from './slider/Slider';
import ServicesSection from './ServiceSection/ServicesSection';
import Head from '../../components/Head';
import TestimonialSlider from './testimonial/TestimonialSlider';
import Consultation from './Consultation';

const Home = () => (
    <div>
        <Head title="Home" />
        <Slider />
        <div className="container">
            <ServicesSection />
            <TestimonialSlider />
            <Consultation />
        </div>
    </div>
);

export default Home;
