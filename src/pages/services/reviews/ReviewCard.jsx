/* eslint-disable react/self-closing-comp */
import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import ReactStars from 'react-rating-stars-component';

const ReviewCard = ({ review }) => {
    const { message, customerName, position, ratings, date } = review;

    return (
        <div>
            <div className="flex flex-col  my-6 w-full h-full shadow-lg p-5 mt-10">
                <div className="flex gap-5 pt-5 flex-wrap justify-between">
                    <p className="text-base">Reviewed on: {date.split('T')[0]}</p>
                    <ReactStars
                        size={24}
                        isHalf
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                        value={Number(ratings)}
                        readonly
                    />
                </div>
                <div className="px-4 py-8 rounded-t-lg sm:px-8 md:px-6 dark:bg-gray-900">
                    <div className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                        <FaQuoteLeft className="text-3xl" />
                        <div className="slide-text text-base"> {message}</div>
                        <span className="flex justify-end">
                            <FaQuoteRight className="text-3xl " />
                        </span>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center p-4 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
                    <img
                        src={
                            review?.customerImage || 'https://source.unsplash.com/50x50/?portrait?3'
                        }
                        alt=""
                        className="slide-img w-10 h-10 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-700"
                    />
                    <p className="text-xl font-semibold leading-tight">
                        {customerName || 'unKnown'}
                    </p>
                    <p className="text-sm uppercase">{position}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
