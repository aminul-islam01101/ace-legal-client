import React from 'react';
import ServiceDetails from './ServiceDetails';
import Reviews from '../reviews/Reviews';

const ServiceAndReviews = () => {
    console.log('test');

    return (
        <div>
            <ServiceDetails />
            <Reviews />
        </div>
    );
};

export default ServiceAndReviews;
