import React, { useContext } from 'react';
import { ThemeContext } from './layout';

export default function Middle (data) {
    const theme = useContext(ThemeContext);
    return (
        <>
        <button>{theme} : Middle Panel Button</button>
        </>
    );
}
