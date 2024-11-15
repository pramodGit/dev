import React from 'react';
import useFetch from "../hooks/useFetch";

export default function Footer () {
    
    const data = /*[
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false
        }];*/useFetch("https://jsonplaceholder.typicode.com/todos");
    //const data = useFetch("http://localhost:5000/api/login");
    return (
        <>
            <h3>Footer</h3>
            {data && data.map((item) => <p key={item.id}>{item.title}</p>)}
        </>
    );
}
