import React from 'react';
import Layout from '../layout/layout';

const childrenData = ["Home", "Page"];
export default function Home () {
    return (
        <>
            {/* <h1>Home</h1> */}
            <Layout children={childrenData}></Layout>
        </>
    );
};
