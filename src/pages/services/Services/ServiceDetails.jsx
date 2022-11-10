/* eslint-disable react/self-closing-comp */
import React from 'react';
import ReactStars from 'react-rating-stars-component';

import NotAvailable from '../../../assets/images/Image_not_available.png';
import formatCurrency from '../../../Utilities/FormateCurrency';

const ServiceDetails = ({
    serviceDetails: { serviceImage, serviceName, price, ratings, description },
}) => (
    <div>
        <section>
            <div className="relative mx-auto max-w-screen-xl px-4 py-8">
                <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
                    <div className="lg:col-span-3">
                        <div className="relative mt-4">
                            <img
                                alt="Tee"
                                src={serviceImage || NotAvailable}
                                className="h-72 w-full rounded-xl object-cover lg:h-[540px]"
                            />
                        </div>
                    </div>

                    <div className="lg:sticky lg:top-0">
                        <form className="space-y-4 lg:pt-8">
                            <h1 className="text-2xl font-bold lg:text-3xl">{serviceName}</h1>
                            <small>A top reviewed service from ace-legal</small>

                            <ReactStars
                                size={24}
                                isHalf
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffb411"
                                value={Number(ratings)}
                                readonly
                            />
                            <p className="text-xl font-bold">{formatCurrency(price)}</p>

                            <div className="rounded border bg-gray-100 p-4">
                                <p className="text-sm">
                                    <span className="block">
                                        Are You in Legally trouble? Not Any more.{' '}
                                        <span className="font-bold text text-pink-500">
                                            Win is mine !!!
                                        </span>
                                    </span>
                                </p>
                            </div>
                        </form>
                    </div>

                    <div className="lg:col-span-3">
                        <div className="prose max-w-none [&>iframe]:mt-6 [&>iframe]:aspect-video [&>iframe]:w-full [&>iframe]:rounded-xl">
                            <h3 className="text-4xl font-bold">Why me?</h3>
                            <p className="dark:text-gray-100"> {description.slice(0, 250)}</p>
                            <p className="dark:text-gray-100"> {description.slice(250, 750)}</p>
                            <p className="dark:text-gray-100"> {description.slice(750)}</p>

                            <h2>Happy to serve as</h2>

                            <ul>
                                <li>
                                    I have a strong, young and energetic set of professionals in
                                    litigation
                                </li>
                                <li>dealing with the grievances of government officials</li>
                                <li>
                                    I undertake advisory to help you build a robust fight against
                                    opposite.
                                </li>
                                <li>Thousands customers trust</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default ServiceDetails;
