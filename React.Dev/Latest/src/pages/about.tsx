import React from 'react';
import Layout from '../layout/layout';

const childrenData = ["About", "Page"];
export default function About () {
    return (
        <>
            {/* <h1>About</h1> */}
            <Layout children={childrenData}></Layout>
        </>
    );
};
