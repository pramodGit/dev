import React from 'react';
import Layout from '../layout/layout';

const childrenData = ["pramod", "Kumar"];
export default function About () {
    return (
        <>
            <h1>About</h1>
            <Layout children={childrenData}></Layout>
        </>
    );
};
