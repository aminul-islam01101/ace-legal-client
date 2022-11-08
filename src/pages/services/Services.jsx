/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import React from 'react';
import { useQuery } from '@tanstack/react-query';

import ServiceCard from './Services/ServiceCard';
import Head from '../../components/Head';

const ServicesSection = () => {
    const {
        data: { allServices },
    } = useQuery(['allServices'], () =>
        axios.get('https://ace-legal-server.vercel.app/services').then((res) => res.data)
    );

    return (
        <div>
            <Head title="Services" />
            <div className="grid grid-cols-3">
                {allServices.map((service) => (
                    <ServiceCard key={service._id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default ServicesSection;
