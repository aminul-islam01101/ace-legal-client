/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */

import React, { useContext, useEffect, useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import MyReviewCard from './MyReviewCard';
import AuthContext from '../../../Contexts/AuthContext';

const MyReviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    const [open, setOpen] = useState(false);
    const [agree, setAgree] = useState(false);
    const [modalId, setModalId] = useState('');
    const [refresh, setRefresh] = useState(false);
    const [existing, setExisting] = useState({});
    const [updatedData, setUpdatedData] = useState({});

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ mode: 'onChange' });

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
        // const proceed = window.confirm('Are you sure, you want to cancel this order');
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
                        alert('deleted successfully');
                        const remaining = myReviews?.reviews?.filter((review) => review._id !== id);
                        setMyReviews(remaining);
                        setRefresh(!refresh);
                    }
                });
        }
    };
    // getting existing data

    // handle update
    const handleUpdate = (id) => {
        fetch(`https://ace-legal-server.vercel.app/myreview/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('ace-legal-token')}`,
            },
            body: JSON.stringify({ message: updatedData.message, ratings: updatedData.message }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    const remaining = myReviews.filter((rev) => rev._id !== id);
                    const approving = myReviews.find((rev) => rev._id === id);
                  

                    const newOrders = [approving, ...remaining];
                    setMyReviews(newOrders);
                }
            });
    };

    useEffect(() => {
        setAgree(true);
    }, []);
    const handleAgree = () => {
        handleDelete(modalId);

        setOpen(false);
    };
    const handleClick = (id, reviewData = {}) => {
        setOpen(true);
        setModalId(id);
        setExisting(reviewData);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = (data) => {
        setUpdatedData(data);
        handleUpdate(modalId);

        reset();
        setOpen(false);
        console.log(data);
    };
    console.log(updatedData);

    return (
        <div>
            <div>
                {myReviews?.reviews?.map((myReview) => (
                    <MyReviewCard
                        key={myReview._id}
                        myReview={myReview}
                        handleClick={handleClick}
                    />
                ))}
            </div>

            {/* delete modal */}
            <Modal show={open} onClose={handleClose}>
                <Modal.Header> Are you sure to delete ?</Modal.Header>

                <Modal.Footer>
                    <Button onClick={handleAgree}>I accept</Button>
                    <Button color="gray" onClick={handleClose}>
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* update modal */}
            <Modal show={open} onClose={handleClose}>
                <Modal.Header> Update your review message</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            afdfasdfa
                        </p>
                        <form
                            className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                                <div className="space-y-2 col-span-full lg:col-span-1">
                                    <p className="font-medium">Personal Inormation</p>
                                </div>
                                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                    <div className="col-span-full">
                                        <label htmlFor="message" className="text-sm">
                                            Edit your review message
                                            <textarea
                                                required
                                                {...register('message', {
                                                    minLength: 4,
                                                    maxLength: 300,
                                                })}
                                                id="message"
                                                defaultValue={existing?.message}
                                                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                                            />
                                            {errors?.message && <p>min 4 ch and max 300ch</p>}
                                        </label>
                                        <label className="col-span-2">
                                            ratings:
                                            <span>
                                                <input
                                                    defaultValue={existing.ratings}
                                                    step=".1"
                                                    type="number"
                                                    name="ratings"
                                                    id="ratings"
                                                    {...register('ratings', {
                                                        min: 0,
                                                        max: 5,
                                                    })}
                                                />
                                                {errors?.ratings && <p>Number should be 0 to 5</p>}
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </fieldset>

                            <input className="button" type="submit" />
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleAgree}>I accept</Button>
                    <Button color="gray" onClick={handleClose}>
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default MyReviews;
