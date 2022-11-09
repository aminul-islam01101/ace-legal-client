/* eslint-disable no-underscore-dangle */

import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import ReviewCard from './ReviewCard';

const AllReview = ({ serviceDetails }) => {
    const [reviews, setReviews] = useState([]);
    // const [refresh, setRefresh] = useState(false);
    console.log(serviceDetails._id);

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
    console.log(reviews.length);

    return (
        <div>
            {reviews.map((review) => (
                <ReviewCard key={review._id} review={review} />
            ))}
        </div>
    );
};

export default AllReview;
