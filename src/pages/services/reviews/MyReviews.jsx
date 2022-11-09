/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */

import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../Contexts/AuthContext';
import MyReviewRow from './MyReviewRow';

const MyReviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        let loading = true;
        if (loading) {
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-700 dark:border-violet-400" />;
        }

        fetch(`https://ace-legal-server.vercel.app/reviewsByEmail?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('ace-legal-token')}`,
            },
        })
            .then((res) => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then((data) => {
                setMyReviews(data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                loading = false;
            });
    }, [user?.email, logOut]);
    console.log(myReviews?.reviews);

    return (
        <div>
            {myReviews?.reviews?.map((myReview) => (
                <MyReviewRow key={myReview._id} myReview={myReview} />
            ))}
        </div>
    );
};

export default MyReviews;
