import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service: { _id, img, name, description } }) => {
    const handleClick = () => {
        console.log('test click');
    };
    return (
        <div>
            <div className="w-full h-full rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img
                            src={img}
                            alt=""
                            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
                        />
                    </PhotoView>
                </PhotoProvider>
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">
                            {description.slice(0, 100)}...
                        </h2>
                        <p className="dark:text-gray-100">{name}</p>
                    </div>
                    <Link to={`/service/${_id}`}>
                        <button type="button" onClick={handleClick} className="button w-full">
                            Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
