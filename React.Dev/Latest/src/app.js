import React from "react";
import AppRouter from "./routers/router.js";
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Header from '../src/layout/header';
import Footer from '../src/layout/footer';


export default function AppComponent () {
    return (
        <>
            <Header />
            <AppRouter />
            <Footer />
        </>
    );
}