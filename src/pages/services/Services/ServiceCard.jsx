/* eslint-disable react/self-closing-comp */
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import ReactStars from 'react-rating-stars-component';
import NotAvailable from '../../../assets/images/Image_not_available.png';
import formatCurrency from '../../../Utilities/FormateCurrency';

const ServiceCard = ({
    service: { _id: id, serviceName, serviceImage, description, ratings, price },
}) => (
    <div data-aos="zoom-in">
        <div className="w-full h-full rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 md:flex xl:grid">
            <div>
                <PhotoProvider>
                    <PhotoView src={serviceImage}>
                        <img
                            src={serviceImage || NotAvailable}
                            alt=""
                            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
                        />
                    </PhotoView>
                </PhotoProvider>
            </div>
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{serviceName}</h2>
                    <p className="dark:text-gray-100"> {description.slice(0, 100)}...</p>
                </div>
                <div className="flex justify-between">
                    <p>{formatCurrency(price)}</p>
                    <ReactStars
                        size={24}
                        isHalf
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffb411"
                        value={Number(ratings)}
                        readonly
                    />
                </div>
                <Link to={`/service/${id}`}>
                    <button type="button" className="button w-full">
                        Details
                    </button>
                </Link>
            </div>
        </div>
    </div>
);

export default ServiceCard;
