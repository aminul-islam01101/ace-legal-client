import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Error from '../components/Error';

import SignIn from '../pages/Authentication/SignIn';
import SignUp from '../pages/Authentication/SignUp';

import Root from './Root';

import Home from '../pages/Home/Home';
import About from '../components/About';
import ProtectedRoute from './ProtectedRoute';

import Blogs from '../pages/blogs/Blogs';

import Services from '../pages/services/Services';
import ServiceAndReviews from '../pages/services/Services/ServiceAndReviews';
import AddService from '../pages/services/Services/AddService';
import MyReviews from '../pages/services/reviews/MyReviews';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />} errorElement={<Error />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service/:id" element={<ServiceAndReviews />} />

            <Route path="/blogs" element={<Blogs />} />

            <Route
                path="/addService/"
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
                loader={async () => fetch('https://ace-legal-server.vercel.app/services')}
            />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
        </Route>
    )
);

export default router;
