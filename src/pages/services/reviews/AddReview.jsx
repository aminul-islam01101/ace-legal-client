/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import { useMutation} from '@tanstack/react-query';
import axios from 'axios';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import AuthContext from '../../../Contexts/AuthContext';

const AddReview = ({ serviceDetails: { img, name, _id } }) => {
    const [prevReview, setPrevReview] = useState('');

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
        onSuccess: () => toast.success('success'),
        onError: () => toast.error('there was an error'),
    });

    // already stored review check
    // const { data: storedReview } = useQuery(['storedReview'], () =>
    //     axios
    //         .get(`https://ace-legal-server.vercel.app/reviews?id=${_id}&email=${email}`)
    //         .then((res) => res.data)
    // );
    // console.log(storedReview);

    // react form hook  submit handler
    const onSubmit = (data) => {
        // if (storedReview[0]?.email) {
        //     setPrevReview('already reviewed.try to update');
        //     return;
        // }
        const reviewData = {
            ...data,
            customerName: displayName,
            email,
            customerImage: photoURL,
            serviceName: name,
            serviceImage: img,
            serviceId: _id,
            date: new Date(),
        };

        mutate(reviewData);
        reset();
        console.log('data');
    };

    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
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
                                Bio
                                <textarea
                                    required
                                    {...register('message', {
                                        minLength: 4,
                                        maxLength: 300,
                                    })}
                                    id="message"
                                    placeholder="Write your review"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                                />
                                {errors?.message && <p>min 4 ch and max 300ch</p>}
                            </label>
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
                            <div>
                                <label htmlFor="position" className="text-sm">
                                    Working As
                                    <input
                                        required
                                        {...register('position', {
                                            minLength: 4,
                                            maxLength: 50,
                                        })}
                                        id="position"
                                        placeholder="Write your Working arena/position"
                                        className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                                    />
                                    {errors?.position && <p>min 4 ch and max 50ch</p>}
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
