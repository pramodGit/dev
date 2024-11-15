import React from "react";
import { NavLink } from "react-router-dom";

const code = '404';
const NotFoundPage = () => (
    <>
        <h3>!!! {code} !!!</h3>
        <NavLink to="/">Home</NavLink>
    </>
);

export default NotFoundPage;