import React from 'react';

import NotAvailable from '../../../assets/images/Image_not_available.png';

const ServiceDetails = ({ serviceDetails: { img,name } }) => (
    <div>
        <section>
            <div className="relative mx-auto max-w-screen-xl px-4 py-8">
                <div>
                    <h1 className="text-2xl font-bold lg:text-3xl">{name}</h1>

                    <p className="mt-1 text-sm text-gray-500">SKU: #012345</p>
                </div>

                <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
                    <div className="lg:col-span-3">
                        <div className="relative mt-4">
                            <img
                                alt="Tee"
                                src={img || NotAvailable}
                                className="h-72 w-full rounded-xl object-cover lg:h-[540px]"
                            />

                            <div className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-black/75 px-3 py-1.5 text-white">
                                <svg
                                    className="h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                    />
                                </svg>

                                <span className="ml-1.5 text-xs"> Hover to zoom </span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:sticky lg:top-0">
                        <form className="space-y-4 lg:pt-8">
                            <h2 className="text-lg font-bold">Color</h2>

                            <h2 className="text-lg font-bold">Material</h2>

                            <div className="rounded border bg-gray-100 p-4">
                                <p className="text-sm">
                                    <span className="block">Pay as low as $3/mo with 0% APR.</span>
                                </p>
                            </div>

                            <div>
                                <p className="text-xl font-bold">$19.99</p>
                            </div>
                        </form>
                    </div>

                    <div className="lg:col-span-3">
                        <div className="prose max-w-none [&>iframe]:mt-6 [&>iframe]:aspect-video [&>iframe]:w-full [&>iframe]:rounded-xl">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ad
                                labore nostrum, a explicabo iste est dolorem deserunt id ullam magni
                                accusamus saepe, nulla sed sint reiciendis, aperiam cumque officiis!
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                                eveniet ipsam mollitia nesciunt illo! Suscipit, corrupti!
                            </p>

                            <h2>Features</h2>

                            <ul>
                                <li>Smooth neck design</li>
                                <li>Breathable fabric</li>
                                <li>Odour prevention</li>
                                <li>Made from recycled materials</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default ServiceDetails;
