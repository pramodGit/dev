import React from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from "react-router-dom";


export default function PortfolioItemPage () {
    const params = useParams();
    return (
        <>
            <h1>Portfolio Item Page</h1>
            <p>This is portfolio item page of id {params.id}</p>
            <NavLink to="/">Home</NavLink>
        </>
    );
}