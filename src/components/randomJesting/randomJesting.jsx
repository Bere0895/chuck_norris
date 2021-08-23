import React from 'react';
import '../../../src/styles.css'

export function RandomJesting({viewJesting}) {
   
    const getJesting = () =>{
        fetch('https://api.chucknorris.io/jokes/random').then(async resp =>{
            const data = await resp.json()
            console.log(data)
            viewJesting(data.value)
        })
    }
    return (
        <div>
            <button className="buttons" onClick={getJesting}>Broma Aleatoria</button>
        </div>
    )
}
