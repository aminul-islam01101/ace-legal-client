import React from 'react';
import Slider from './slider/Slider';
import ServicesSection from './ServiceSection/ServicesSection';

const Home = () => {
    console.log('home');

    return (
        <div>
            <Slider />
            <ServicesSection />
        </div>
    );
};

export default Home;
