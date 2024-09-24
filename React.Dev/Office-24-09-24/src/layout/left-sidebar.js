import React, { createContext, useContext, useState } from 'react';
import { ThemeContext } from './layout';

export default function LeftSidebar () {
    const themeObj = useContext(ThemeContext);
    return(
        <>
        <div className="left-panel">
            <ul>
                <li>Left Panel <button onClick={themeObj.clickFn}>{themeObj.name}</button></li>
            </ul>
        </div>
        </>
    );
}
