import React from 'react';
import { Helmet } from 'react-helmet-async';

const Head = ({ title }) => (
    <Helmet>
        <title>Ace-{title} </title>
    </Helmet>
);
export default Head;
