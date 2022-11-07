import React from 'react';
import ReactDOM from 'react-dom/client';
// import { ToastContainer } from 'react-toastify';

import App from './App';
// import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import UserContext from './Contexts/UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <UserContext>
        <App />
        {/* <ToastContainer autoClose={1000} /> */}
        </UserContext>
    </React.StrictMode>
);
