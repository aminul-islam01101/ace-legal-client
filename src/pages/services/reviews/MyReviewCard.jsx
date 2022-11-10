/* eslint-disable react/self-closing-comp */
/* eslint-disable react/style-prop-object */

import React from 'react';
import { Link } from 'react-router-dom';
import NotAvailable from '../../../assets/images/Image_not_available.png';

const MyReviewCard = ({
    myReview: { ratings, serviceImage, message, serviceName, _id },
    handleClick,
}) => (
    <div className="container">
        <div className=" bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="p-4 md:p-4 flex gap-5">
                <figure className="text-2xl font-bold text-gray-800 dark:text-white">
                    <img className="w-36" src={serviceImage || NotAvailable} alt="" />
                </figure>

                <div className="w-full">
                    <div className="flex justify-between">
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            ServiceName: {serviceName || 'N/A'}
                        </p>
                        <button
                            type="button"
                            onClick={() => handleClick(_id)}
                            className="button bg-red-400"
                        >
                            X
                        </button>
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{message}</p>
                    <p className="mt-6"> ratings:{ratings}</p>
                    <div className="flex justify-end mt-3 item-center">
                        <Link to={`/myreviews/edit/${_id}`}>
                            <button type="button" className="button">
                                Update
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default MyReviewCard;
