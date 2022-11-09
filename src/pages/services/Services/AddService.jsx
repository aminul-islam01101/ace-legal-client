/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import Head from '../../../components/Head';

const AddService = () => {
    const {
        register,
        handleSubmit,
        getValues,
        reset,
        formState: { errors },
    } = useForm({ mode: 'onChange' });

    // react query data for POST operation
    const muteFunc = async (data) =>
        axios.post('https://ace-legal-server.vercel.app/service', data);

    const { mutate } = useMutation(muteFunc, {
        onSuccess: () => toast.success('successfully added service'),
        onError: () => toast.error('there was an error'),
    });

    const onSubmit = (data) => {
        mutate({ ...data, date: new Date() });
        reset();
    };
    return (
        <div className="container">
            <Head title="Add Service" />
            <h1 className="text-2xl font-bold text-center">Add a Service</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
                {/* Service name */}
                <div className="space-y-1 text-sm">
                    <div>
                        <div className="flex flex-col gap-2">
                            <div>
                                <label htmlFor="serviceName" className="block dark:text-gray-400">
                                    Service Name
                                    <input
                                        {...register('serviceName', {
                                            required: true,
                                            maxLength: 100,
                                            pattern: /^[a-zA-z\s]+$/i,
                                        })}
                                        id="serviceName"
                                        placeholder="Service Name"
                                        className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                                    />
                                    {errors?.serviceName?.type === 'pattern' && (
                                        <p>Alphabetical characters only</p>
                                    )}
                                    {errors?.serviceName?.type === 'maxLength' && (
                                        <p>service Name cannot exceed 100 characters</p>
                                    )}
                                </label>
                            </div>
                            {/* price */}
                            <div>
                                <label className="block">
                                    Service Price:
                                    <input
                                        step=".1"
                                        type="number"
                                        id="price"
                                        {...register('price', {
                                            min: 100,
                                            max: 50000,
                                        })}
                                        placeholder="Service Price"
                                    />
                                    {errors?.price && <p>Number should be 100 to 50000</p>}
                                </label>
                            </div>

                            {/* ratings */}
                            <div>
                                {' '}
                                <label className="col-span-2">
                                    ratings:
                                    <span>
                                        <input
                                            step=".1"
                                            type="number"
                                            name="ratings"
                                            id="ratings"
                                            {...register('ratings', {
                                                min: 0,
                                                max: 5,
                                            })}
                                            placeholder="give a rating out of 5"
                                        />
                                        {errors?.ratings && <p>Number should be 0 to 5</p>}
                                    </span>
                                </label>
                            </div>

                            {/* Image */}
                            <div>
                                <input
                                    {...register('serviceImage', {
                                        required: true,
                                    })}
                                    id="serviceImage"
                                    placeholder="Please Enter Service Image Url"
                                    className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                                />
                            </div>
                            {/* Description */}
                            <div>
                                <label htmlFor="message" className="text-sm">
                                    Service description
                                    <textarea
                                        required
                                        {...register('description', {
                                            minLength: 50,
                                        })}
                                        id="description"
                                        placeholder="Write service description"
                                        className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                                    />
                                    {errors?.description && <p>min 50 ch</p>}
                                </label>
                            </div>
                            <input className="button" type="submit" value="submit" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddService;
