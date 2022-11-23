import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Error from '../components/Error';

import SignIn from '../pages/Authentication/SignIn';
import SignUp from '../pages/Authentication/SignUp';

import Root from './Root';

import Home from '../pages/Home/Home';

import ProtectedRoute from './ProtectedRoute';

import Blogs from '../pages/blogs/Blogs';

import Services from '../pages/services/Services';
import ServiceAndReviews from '../pages/services/Services/ServiceAndReviews';
import AddService from '../pages/services/Services/AddService';
import MyReviews from '../pages/services/reviews/MyReviews';
import UpdateReview from '../pages/services/reviews/UpdateReview';

const router = createBrowserRouter(
    createRoutesFromElements(
        // main route
        <Route path="/" element={<Root />} errorElement={<Error />}>
            <Route path="/" element={<Home />} />

            <Route path="/services" element={<Services />} />
            <Route
                path="/service/:id"
                element={<ServiceAndReviews />}
                loader={async ({ params }) =>
                    fetch(`{https://ace-legal-server.vercel.app/service/${params.id}`)
                }
            />

            <Route path="/blogs" element={<Blogs />} />

            <Route
                path="/addservice/"
                element={
                    <ProtectedRoute>
                        <AddService />
                    </ProtectedRoute>
                }
                loader={async () => fetch('https://ace-legal-server.vercel.app/services')}
            />
            <Route
                path="/myreviews/"
                element={
                    <ProtectedRoute>
                        <MyReviews />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/myreviews/edit/:id"
                element={
                    <ProtectedRoute>
                        <UpdateReview />
                    </ProtectedRoute>
                }
            />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
        </Route>
    )
);

export default router;
