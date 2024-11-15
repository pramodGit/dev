import React, { useContext, useState } from 'react';
import { ThemeContext } from './layout';
import SubMiddle from './sub-middle';

export default function Middle (props) {
    const themeObj = useContext(ThemeContext);
    const [data, setData] = useState(props.content);
    function handleClick() {
        let temp = [...data];
        temp.push("Singh");
        setData(temp);
    }
    return (
        <>
        {/* {data} */}
        {/* {props.content} */}
        {/* <button onClick={handleClick}>{themeObj.name} : Middle Panel Button</button> */}
        {/* <SubMiddle content={data} /> */}
        </>
    );
}
