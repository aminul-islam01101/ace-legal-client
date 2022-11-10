/* eslint-disable no-underscore-dangle */

import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import ReviewCard from './ReviewCard';

const AllReview = ({ serviceDetails }) => {
    const [reviews, setReviews] = useState([]);
    // const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        setReviews([]);
        fetch(`https://ace-legal-server.vercel.app/reviewsById?id=${serviceDetails?._id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setReviews([]);
                    setReviews(data.reviews);
                } else {
                    toast.error('loading error');
                }
            })
            .catch((err) => toast.error(err.message));
    }, [serviceDetails?._id]);


    return (
        <div>
            {reviews.length === 0 ? (
                <div className='text-center mb-20'>Thanks For Interest. Be the first to add a review.</div>
            ) : (
                <div className="grid mb-20 justify-center md:grid-cols-2 gap-10">
                    {reviews.map((review) => (
                        <ReviewCard key={review._id} review={review} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllReview;
