import React, { Component, useState, useEffect } from 'react';
import ButtonAtom from "../components/buttonAtom";
import NavBar from "./navBar";
import MainNavigation from "./mainNavigation";
import NavigationDrawer from './drawer';

const getLocalStorage = () => console.log(sessionStorage.getItem("logged In"));

export default function Header () {
    const [color, setColor] = useState("Green");
    // this effect should go into Login component
    useEffect(() => {
        sessionStorage.setItem("logged In", "Pramod");
    }, []);
    return(
        <>
        <NavigationDrawer />
        {/* <MainNavigation /> */}
        {/* <nav className="header">
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
                    <ButtonAtom label="Get Session" bgColor={color} onClick={getLocalStorage} />
                </li>
            </ul>
        </nav>  */}
        </>
    );
}
