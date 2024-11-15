import React, { Component, useState, useEffect } from 'react';
import ButtonAtom from "../components/buttonAtom";
// import NavBar from "./navBar";
import MainNavigation from "./mainNavigation";
import NavigationDrawer from './drawer';

const getLocalStorage = () => console.log(sessionStorage.getItem("logged In"));

function onSearch () {
    alert('search BITTON clicked');
}
export default function Header () {
    const [color, setColor] = useState("Green");
    // this effect should go into Login component
    useEffect(() => {
        sessionStorage.setItem("logged In", "Pramod");
    }, []);
    return(
        <>
        <NavigationDrawer />
        {/* <NavBar /> */}
        <nav className="header">
            <ul>
                <li>test useState = {color}</li>
                <li><button
                        type="button"
                        onClick={() => setColor("Blue")}
                    >Blue</button>
                </li>
                <li><button
                        type="button"
                        onClick={() => setColor("Red")}
                    >Red</button>
                </li>
                <li>
                    <ButtonAtom label="Search" bgColor={color} onClick={onSearch} />
                </li>
            </ul>
        </nav> 
        </>
    );
}
