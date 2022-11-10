/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

import AuthContext from '../../../Contexts/AuthContext';

const AddReview = ({ serviceDetails }) => {
    const [prevReview, setPrevReview] = useState('');
    // const [storedReview, setStoredReview] = useState({});
    const [refresh, setRefresh] = useState(false);

    // react form hook data
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ mode: 'onChange' });
    // user info from firebase auth
    const {
        user: { displayName, email, photoURL },
    } = useContext(AuthContext);
    // react query data for POST operation
    const muteFunc = async (data) => axios.post('https://ace-legal-server.vercel.app/review', data);

    const { mutate } = useMutation(muteFunc, {
        onSuccess: () => toast.success('Successfully posted Your Review'),
        onError: () => toast.error('there was an error'),
    });

    // react form hook  submit handler
    const onSubmit = (data) => {
        const reviewData = {
            ...data,
            customerName: displayName,
            email,
            customerImage: photoURL,
            serviceName: serviceDetails.name,
            serviceImage: serviceDetails.img,
            serviceId: serviceDetails._id,
            date: new Date(),
        };

        mutate(reviewData);
        setRefresh(!refresh);
        reset();
    };

    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
            <form
                className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
                onSubmit={handleSubmit(onSubmit)}
            >
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-lg dark:bg-gray-900">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium text-center">
                            You are welcome to write a review of my service
                        </p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full">
                            <label htmlFor="message" className="text-sm font-bold">
                                Review Tweet
                                <textarea
                                    required
                                    {...register('message', {
                                        minLength: 4,
                                        maxLength: 500,
                                    })}
                                    id="message"
                                    placeholder="Write your review"
                                    className="w-full font-thin rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                                />
                                {errors?.message && (
                                    <p className="text-red-500">
                                        *Minimum 4 and maximum 500 character
                                    </p>
                                )}
                            </label>
                            <label className="col-span-full font-bold">
                                Ratings:
                                <input
                                    step=".1"
                                    type="number"
                                    name="ratings"
                                    id="ratings"
                                    className="block rounded font-thin"
                                    {...register('ratings', {
                                        min: 0,
                                        max: 5,
                                    })}
                                    placeholder="Give a rating out of 5"
                                />
                                {errors?.ratings && (
                                    <p className="text-red-500">*Number should be between 0 to 5</p>
                                )}
                            </label>
                            <div>
                                <label htmlFor="position" className="text-sm font-bold">
                                    Working As
                                    <input
                                        type="text"
                                        required
                                        {...register('position', {
                                            minLength: 4,
                                            maxLength: 50,
                                        })}
                                        id="position"
                                        placeholder="Write your Working arena/position"
                                        className="w-full font-thin rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                                    />
                                    {errors?.position && (
                                        <p className="text-red-500">
                                            *Minimum 3 and maximum 50 character
                                        </p>
                                    )}
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                {/* <div>
                    {storedReview && (
                        <Link className="underline" to="/myreviews">
                            {prevReview}
                        </Link>
                    )}
                </div> */}

                <input className="button" type="submit" />
            </form>
        </section>
    );
};
export default AddReview;
