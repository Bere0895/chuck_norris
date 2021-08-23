import React, { Fragment, useState, useRef, setState } from 'react';

export function ListJesting({getJesting}) {
   
    const categoriesJesting = () =>{
        fetch('https://api.chucknorris.io/jokes/categories').then(async resp =>{
          
            const data = await resp.json()
            const listItems = data.map((name) =>
                <button>{name}</button>
            );
            //getJesting(data.value)
        })
    }

    return (
        <div>
            <button onClick={categoriesJesting}></button>
            
        </div>
    )
}
