/* eslint-disable no-underscore-dangle */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import ReviewCard from './ReviewCard';

const AllReview = ({ serviceDetails: { _id } }) => {
    const { data: reviews } = useQuery(['reviews'], () =>
        axios.get(`https://ace-legal-server.vercel.app/reviews?id=${_id}`).then((res) => res.data)
    );
    console.log(reviews);

    return (
        <div>
            {reviews.map((review) => (
                <ReviewCard key={review._id} review={review} />
            ))}
        </div>
    );
};

export default AllReview;
