import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Error from '../components/Error';

import SignIn from '../pages/Authentication/SignIn';
import SignUp from '../pages/Authentication/SignUp';

import Root from './Root';

import Home from '../pages/Home/Home';
import About from '../components/About';
import ProtectedRoute from './ProtectedRoute';

import ServiceDetails from '../pages/servicesAndReviews/Services/ServiceDetails';
import Blogs from '../pages/blogs/Blogs';
import AddService from '../pages/servicesAndReviews/Services/AddService';
import ServicesAndReviews from '../pages/servicesAndReviews/ServicesAndReviews';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />} errorElement={<Error />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
                path="/services"
                element={
                    <ProtectedRoute>
                        <ServicesAndReviews />
                    </ProtectedRoute>
                }
            />
            <Route path="/services/:id" element={<ServiceDetails />} />
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
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
        </Route>
    )
);

export default router;
