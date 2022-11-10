import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => (
    <div>
        <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                        <span className="sr-only">Error</span>
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">
                        Sorry, this page is not found.
                    </p>

                    <Link to="/" className="button">
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    </div>
);

export default Error;
