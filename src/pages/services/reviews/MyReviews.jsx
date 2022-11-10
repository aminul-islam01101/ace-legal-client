/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */

import React, { useContext, useEffect, useState } from 'react';
import { Button, Modal } from 'flowbite-react';

import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import MyReviewCard from './MyReviewCard';
import AuthContext from '../../../Contexts/AuthContext';
import Head from '../../../components/Head';

const MyReviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    const [open, setOpen] = useState(false);
    const [agree, setAgree] = useState(false);
    const [modalId, setModalId] = useState('');
    const [refresh, setRefresh] = useState(false);

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
    }, [user?.email, logOut, refresh]);

    // handle delete
    const handleDelete = (id) => {
        let loading = true;
        if (loading) {
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-700 dark:border-violet-400" />;
        }
        if (agree) {
            fetch(`https://ace-legal-server.vercel.app/myreview/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('ace-legal-token')}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);

                    if (data.deletedCount) {
                        toast.success(' Review Deleted successfully');
                        const remaining = myReviews?.reviews.filter((review) => review._id !== id);
                        setMyReviews(remaining);
                        setRefresh(!refresh);
                    }
                })
                .catch((error) => {
                    console.error(error);
                })
                .finally(() => {
                    loading = false;
                });
        }
    };

    useEffect(() => {
        setAgree(true);
    }, []);
    const handleAgree = () => {
        handleDelete(modalId);

        setOpen(false);
    };
    const handleClick = (id) => {
        setOpen(true);
        setModalId(id);
    };
    const handleClose = () => {
        setOpen(false);
    };
    console.log(myReviews.reviews);

    return (
        <div>
             <Head title="My-Reviews" />
            <div>
                {myReviews?.reviews?.length === 0 ? (
                    <div className="min-h-screen grid place-items-center">
                        <div className="font-bold text-lg">
                            No Reviews Found. Try to add a review from our
                            <Link className="underline ml-1 " to="/services">
                                services
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="grid gap-8 my-20">
                        {myReviews?.reviews?.map((myReview) => (
                            <MyReviewCard
                                key={myReview._id}
                                myReview={myReview}
                                handleClick={handleClick}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* delete modal */}
            <Modal show={open} onClose={handleClose}>
                <Modal.Header> Are you sure to delete Your Review ?</Modal.Header>

                <Modal.Footer className="justify-end">
                    <Button className="button" onClick={handleAgree}>
                        I accept
                    </Button>
                    <Button color="gray" onClick={handleClose}>
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default MyReviews;
