import React from 'react';
import { createContext, useContext, useState } from 'react';
import { ThemeContext } from './layout';

export default function LeftSidebar () {
    const theme = useContext(ThemeContext);
    return(
        <>
        <div className="left-panel">
            <ul>
                <li>{theme}Left Panel</li>
            </ul>
        </div>
        </>
    );
}
