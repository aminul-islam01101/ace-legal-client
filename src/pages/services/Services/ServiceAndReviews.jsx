import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ServiceDetails from './ServiceDetails';
import Reviews from '../reviews/Reviews';

const ServiceAndReviews = () => {
    const { id } = useParams();
    const { data: serviceDetails } = useQuery(['service'], () =>
        axios.get(`https://ace-legal-server.vercel.app/service/${id}`).then((res) => res.data)
    );

    console.log(serviceDetails);

    return (
        <div>
            <ServiceDetails serviceDetails={serviceDetails} />
            <Reviews serviceDetails={serviceDetails} />
        </div>
    );
};

export default ServiceAndReviews;
