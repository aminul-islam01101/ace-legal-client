import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import React, { Suspense, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
import router from './Routes/Routes';

const App = () => {
    console.log('app');
    const client = new QueryClient({
        defaultOptions: {
            queries: {
                suspense: true,
            },
        },
    });
    // card animator
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div>
            <QueryClientProvider client={client}>
                <Suspense fallback={<div>Loading...</div>}>
                    <HelmetProvider>
                        <RouterProvider router={router} />
                        <Toaster />
                    </HelmetProvider>
                </Suspense>
            </QueryClientProvider>
        </div>
    );
};
export default App;
