/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import ServiceCard from '../../services/Services/ServiceCard';

const ServicesSection = () => {
    const {
        data: { fewServices },
    } = useQuery(['fewServices'], () =>
        axios.get('https://ace-legal-server.vercel.app/services').then((res) => res.data)
    );

    return (
        <div className="">
            <h1 className="text-5xl text-center my-20">My Practice Areas</h1>
            <div className="grid my-20 xl:grid-cols-3 gap-10 lg:gap-5">
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
