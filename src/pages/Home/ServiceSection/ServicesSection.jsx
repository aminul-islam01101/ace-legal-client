/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import ServiceCard from '../../servicesAndReviews/Services/ServiceCard';

const ServicesSection = () => {
    const {
        data: { fewServices },
    } = useQuery(['fewServices'], () =>
        axios.get('https://ace-legal-server.vercel.app/services').then((res) => res.data)
    );
    console.log(fewServices);

    return (
        <div>
            <div>
                {fewServices.map((service) => (
                    <ServiceCard key={service._id} service={service} />
                ))}
            </div>
            <div className="flex justify-center mt-5">
                <Link to="/services">
                    <button type="button" className="button flex jc">
                        See All
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ServicesSection;
