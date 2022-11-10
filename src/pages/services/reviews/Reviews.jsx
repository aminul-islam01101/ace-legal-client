import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../Contexts/AuthContext';

import AddReview from './AddReview';
import AllReview from './AllReview';

const Reviews = ({ serviceDetails }) => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <div>
                {user?.uid ? (
                    <AddReview serviceDetails={serviceDetails} />
                ) : (
                    <div className="text-center mt-20">
                        <Link className="underline mr-2 " to="/signin">
                            Sign in
                        </Link>
                        to add a review
                    </div>
                )}
            </div>
            <h3 className="text-center text-4xl mb-20 mt-5">Peoples Love in review 💓 tweet 💓</h3>
            <AllReview serviceDetails={serviceDetails} />
        </div>
    );
};

export default Reviews;
