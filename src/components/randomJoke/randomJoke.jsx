import axios from 'axios';
import React from 'react';

import styles from './randomJoke.module.css';


export function RandomJoke({viewJoke}) {
    const getJokes = () =>{
        axios.get('https://api.chucknorris.io/jokes/random').then(async resp=>{
            const data = await resp.data
            viewJoke(data.value)
        })
    }
    return (
        <div>
            <button className={styles.buttons} onClick={getJokes}>Broma Aleatoria</button>
        </div>
    )
}
