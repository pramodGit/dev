import React from 'react';
import Layout from '../layout/layout';

const childrenData = ["pramod", "Kumar"];
export default function Home () {
    return (
        <>
            <h1>Home</h1>
            <Layout children={childrenData}></Layout>
        </>
    );
};
