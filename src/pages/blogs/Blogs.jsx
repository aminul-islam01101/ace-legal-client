/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import Author from '../../assets/images/author.jpg';
import Head from '../../components/Head';

const Blogs = () => (
    <div>
        <Head title="Blogs" />
        <div className="dark:bg-gray-800 dark:text-gray-50">
            <div className="container grid grid-cols-12 mx-auto">
                <div
                    className="flex flex-col justify-center p-20 col-span-12 align-middle bg-no-repeat bg-cover dark:bg-gray-700 lg:col-span-6 lg:h-auto"
                    style={{
                        backgroundImage:
                            'url(' +
                            'https://img.freepik.com/free-vector/blog-concept-illustration-idea-posting-sharing-following_613284-2970.jpg?w=900&t=st=1668087955~exp=1668088555~hmac=6a3e8442c32dbc475529bddee8f35d3894c82a5052ae68832c133aceb485ea06' +
                            ')',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'multiply',
                        backgroundSize: 'cover',
                    }}
                >
                    <div className="flex flex-col items-center p-8 py-12 text-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-7 h-7"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                </div>
                <div className="flex flex-col col-span-12 p-6 shadow-lg divide-y lg:col-span-6 lg:p-10 divide-gray-700">
                    <div className="pt-6 pb-4 space-y-2">
                        <span>Blog-1:</span>
                        <h1 className="text-3xl font-bold">
                            What is the Difference between SQL and NoSQL?
                        </h1>
                        <p>
                            <strong>SQL is a relational, </strong>vertically scalable, table based
                            that use <strong>structured query language</strong> and have a
                            predefined schema.
                            <br />
                            SQL databases are usually RDBMS or DBMS (Relational DataBase Management
                            Systems) and are table based,
                            <br />
                            SQL Databases: MySQL, SQLite ,Oracle DB
                        </p>
                        <p className="italic">On the other hand</p>
                        <p>
                            <strong> NoSQL is a non-relational, </strong>horizontally scalable,
                            key-value, graph or wide-column stores
                            <strong>unstructured data language</strong> and have a dynamic schemas.
                            <br />
                            NoSQL uses unstructured data (like graphs)
                            <br />
                            NoSQL: MongoDB, DynamoDB
                        </p>
                    </div>
                    <div className="pt-6 pb-4 space-y-2">
                        <span>Blog-2</span>
                        <h1 className="text-3xl font-bold">What is JWT, and how does it work?</h1>
                        <p>
                            JSON Web Token (JWT) is an authorization system that open standard for
                            securely transmitting information between parties as JSON object. It is
                            compact, readable and digitally signed using a private key/ or a public
                            key pair by the Identity Provider(IdP).
                            <br />
                            It is used to securely transfer information over the web(between two
                            parties).
                        </p>
                        <p> Working Process </p>
                        <p>
                            Authentication server verifies the credentials and issues a jwt signed
                            using either a secret salt or a private key. Users Client uses the JWT
                            to access protected resources by passing the JWT in HTTP Authorization
                            header. Resource server then verifies the authenticity of the token
                            using the secret salt/ public key.
                        </p>
                    </div>
                    <div className="pt-6 pb-4 space-y-2">
                        <span>Blog-3</span>
                        <h1 className="text-3xl font-bold">
                            What is the difference between javascript and NodeJS?
                        </h1>
                        <p>
                            JavaScript is a simple programming language that can be used with any
                            browser that has the JavaScript Engine installed. Node.
                            <br />
                            js, on the other hand, is an interpreter or execution environment for
                            the JavaScript programming language.
                            <br />
                            Difference between Node.JS and Javascript: Javascript is a programming
                            language that can be run on browsers,
                            <br />
                            but Node.JS is a runtime environment built on Googles v8 engine, for
                            javascript.
                        </p>
                    </div>
                    <div className="pt-6 pb-4 space-y-2">
                        <span>Blog-3</span>
                        <h1 className="text-3xl font-bold">
                            How does NodeJS handle multiple requests at the same time?
                        </h1>
                        <p>
                            Its EventQueue, the master here,
                            <br />
                            NodeJS receives multiple client requests and places them into
                            EventQueue.
                            <br />
                            NodeJS has its own EventLoop which is an infinite loop that receives
                            requests and processes them
                            <br />
                            This EventLoop is single threaded.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container flex justify-end my-10  ">
                <div className="max-w-md p-6 overflow-hidden rounded-lg shadow-lg dark:bg-gray-900 dark:text-gray-100">
                    <article>
                        <h2 className="text-xl font-bold">Authors Info</h2>
                        <p className="mt-4 dark:text-gray-400">
                            Hei, I am Aminul Islam. Currently Working in TC-39, writing about
                            javascript core concept for several years.
                        </p>
                        <div className="flex items-center mt-8 space-x-4">
                            <img
                                src={Author}
                                alt=""
                                className="w-10 h-10 rounded-full dark:bg-gray-500"
                            />
                            <div>
                                <h3 className="text-sm font-medium">TC-39</h3>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
);

export default Blogs;
