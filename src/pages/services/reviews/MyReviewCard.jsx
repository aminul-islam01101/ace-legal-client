/* eslint-disable react/self-closing-comp */
/* eslint-disable react/style-prop-object */

import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const MyReviewCard = ({
    myReview: { ratings, serviceImage, message, serviceName, _id },
    handleClick,
}) => {
    console.log('do');

    return (
        <div className="container">
            <div className=" bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div className="p-4 md:p-4 flex gap-5">
                    <figure className="text-2xl font-bold text-gray-800 dark:text-white">
                        <img className="w-20" src={serviceImage} alt="" />
                    </figure>

                    <div className="w-full">
                        <div className="flex justify-between">
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                {serviceName}
                            </p>
                            <button
                                type="button"
                                onClick={() => handleClick(_id)}
                                className="button"
                            >
                                X
                            </button>
                        </div>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{message}</p>
                        <p> ratings:{ratings}</p>
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
};

export default MyReviewCard;
