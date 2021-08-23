import React from 'react'
import '../../../src/styles.css'

export function randomJoke() {
    const getJokes = () =>{
        fetch('').then(async resp=>{
            const data = await resp.json()
            viewJoke(data.value)
        })
    }
    return (
        <div>
            <button className="buttons" onClick={getJokes}>Broma Aleatoria</button>
        </div>
    )
}
