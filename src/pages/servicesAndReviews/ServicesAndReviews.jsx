import React from 'react';
import Head from '../../components/Head';
import Services from './Services/Services';

const ServicesAndReviews = () => {
    console.log('services');

    return (
        <div>
            <Head title="Services" />
            <Services />
        </div>
    );
};

export default ServicesAndReviews;
