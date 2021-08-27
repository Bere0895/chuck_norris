import React, { Fragment, useState, useEffect } from 'react';
import { RandomJoke } from './components/randomJoke/randomJoke';
import { JokeList } from './components/jokeList/jokeList';
import  axios  from 'axios';

import styles from './App.module.css'

function App (){
    
    const [joke, setJoke] = useState ({
        joke: "Selecciona una broma de categoria o aleatoria"
    })
    const viewJoke = (joke) =>{
        setJoke({joke:joke})
    }

    const [categoryList, setCategory] = useState([]);

    useEffect(() => {
        axios.get('https://api.chucknorris.io/jokes/categories').then(resp =>{
            if(resp.data){
                for(let i of resp.data){
                    setCategory(old=> [...old,{name:i}])
                }
            }
        })
       
    },[])

    return (
        <Fragment>
            <div className={styles.backgroundColor}>
                <h1 className={styles.title}>Chuck Norris</h1>
                <img className={styles.imgSize} src="https://assets.chucknorris.host/img/avatar/chuck-norris.png"/>
                <p className={styles.joke}>{joke.joke}</p>
                <RandomJoke viewJoke={viewJoke}/>
                <p className={styles.category}>Categorías</p>
                <JokeList categoryList={categoryList} viewJoke={viewJoke} />
            
            </div>
        </Fragment>
    )
    
}

export default App;


