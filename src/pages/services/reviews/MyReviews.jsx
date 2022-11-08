/* eslint-disable no-underscore-dangle */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import AuthContext from '../../../Contexts/AuthContext';
import MyReviewRow from './MyReviewRow';

const MyReviews = () => {
    const {
        user: { email },
    } = useContext(AuthContext);

    const { data: myStoredReviews } = useQuery(['storedReview'], () =>
        axios
            .get(`https://ace-legal-server.vercel.app/reviews?email=${email}`)
            .then((res) => res.data)
    );
    console.log(email);

    return (
        <div>
            {myStoredReviews.map((myReview) => (
                <MyReviewRow key={myReview._id} myStoredReview={myStoredReviews} />
            ))}
        </div>
    );
};

export default MyReviews;
