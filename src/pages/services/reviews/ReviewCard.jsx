/* eslint-disable react/self-closing-comp */
import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const ReviewCard = ({ review: { message, customerName, customerImage, position } }) => {
    console.log('something');

    return (
        <div>
            <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                    <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                        <FaQuoteLeft className="text-3xl" />
                        {message}
                        <div className="flex justify-end">
                            <FaQuoteRight className="text-3xl " />
                        </div>
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
                    <img
                        src={customerImage || 'https://source.unsplash.com/50x50/?portrait?3'}
                        alt=""
                        className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-700"
                    />
                    <p className="text-xl font-semibold leading-tight">{customerName}</p>
                    <p className="text-sm uppercase">{position}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
