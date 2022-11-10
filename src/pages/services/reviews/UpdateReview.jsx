/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateReview = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [existingReview, setExistingReview] = useState({});
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm({ mode: 'onChange' });

    useEffect(() => {
        fetch(`https://ace-legal-server.vercel.app/review/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setExistingReview(data);
            })
            .catch((err) => toast.error(err.message));
    }, [id]);

    const onSubmit = (inputData) => {
        fetch(`https://ace-legal-server.vercel.app/myreview/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('ace-legal-token')}`,
            },
            body: JSON.stringify({ message: inputData.message, ratings: inputData.ratings }),
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success('Your Review Updated successfully');
                navigate('/myreviews');
                console.log(data);
            })

            .catch((err) => toast.error(err.message));
    };

    return (
        <div className="my-36">
            <form
                className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
                onSubmit={handleSubmit(onSubmit)}
            >
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-lg dark:bg-gray-900">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium"> Edit your review message</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full">
                            <label htmlFor="message" className="text-sm">
                                Review message Update
                                <textarea
                                    required
                                    {...register('message', {
                                        minLength: 4,
                                        maxLength: 500,
                                    })}
                                    id="message"
                                    defaultValue={existingReview?.message}
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                                />
                                {errors?.message && (
                                    <p className="text-red-500">
                                        *Minimum 4 and maximum 500 character
                                    </p>
                                )}
                            </label>
                            <label className="col-span-2">
                                ratings:
                                <span>
                                    <input
                                        defaultValue={existingReview?.ratings}
                                        step=".1"
                                        className="block rounded"
                                        type="number"
                                        name="ratings"
                                        id="ratings"
                                        {...register('ratings', {
                                            min: 0,
                                            max: 5,
                                        })}
                                    />
                                    {errors?.ratings && (
                                        <p className="text-red-500">
                                            *Number should be Between 0 to 5
                                        </p>
                                    )}
                                </span>
                            </label>
                        </div>
                        <input className="button cursor-pointer" type="submit" />
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default UpdateReview;
