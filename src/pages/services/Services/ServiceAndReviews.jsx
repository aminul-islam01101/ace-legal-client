import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import ServiceDetails from './ServiceDetails';
import Reviews from '../reviews/Reviews';

const ServiceAndReviews = () => {
    const { id } = useParams();
    // const [service, setService] = useState({});
    const { data: serviceDetails } = useQuery(['service'], () =>
        axios.get(`https://ace-legal-server.vercel.app/service/${id}`).then((res) => res.data)
    );
    // useEffect(() => {
    //     fetch(`https://ace-legal-server.vercel.app/service/${id}`)
    //         .then((res) => res.json())
    //         .then((data) => setService(data))

    //         .catch((err) => toast.error(err.message));
    // }, [id]);

    return (
        <div>
            <ServiceDetails serviceDetails={serviceDetails} />
            <Reviews serviceDetails={serviceDetails} />
        </div>
    );
};

export default ServiceAndReviews;
