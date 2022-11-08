import React from 'react';
import Slider from './slider/Slider';
import ServicesSection from './ServiceSection/ServicesSection';
import Head from '../../components/Head';

const Home = () => {
    console.log('home');

    return (
        <div>
            <Head title="Home" />
            <Slider />
            <ServicesSection />
        </div>
    );
};

export default Home;
