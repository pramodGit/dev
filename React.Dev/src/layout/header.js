import React, { Component } from 'react';
import { useState } from 'react';
import ButtonAtom from "../components/buttonAtom";
import NavBar from "./navBar";

function onSearch () {
    alert('search BITTON clicked');
}

export default function Header () {
    const [color, setColor] = useState("Green");
    return(
        <>
        <NavBar />
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
