import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../Contexts/AuthContext';

import AddReview from './AddReview';
import AllReview from './AllReview';

const Reviews = ({serviceDetails}) => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <div>
                {user?.uid ? (
                    <AddReview serviceDetails={serviceDetails} />
                ) : (
                    <div>
                        <Link className="underline" to="/signin">
                            Sign in
                        </Link>
                        to add a review
                    </div>
                )}
            </div>
            <AllReview />
        </div>
    );
};

export default Reviews;
