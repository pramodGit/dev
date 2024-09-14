import React from "react";
import Home from "./pages/home.tsx";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about.tsx"


export default function AppComponent () {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pages/about" element={<About />} />
            </Routes>
        </>
    );
}