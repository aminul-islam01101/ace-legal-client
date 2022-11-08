import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import React, { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
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
