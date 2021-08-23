import React, { Fragment, useState, useEffect } from 'react';

import { RandomJoke } from './components/randomJoke/randomJoke';
import { JokeList } from './components/jokeList/jokeList';
import './index.css'
import  axios  from 'axios';

function App (){
    
    const [joke, setJoke] = useState ({
        joke: "Selecciona una broma de categoria o aleatoria"
    })
    const viewJoke = (joke) =>{
        console.log(joke)
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
            <div className="backgroundColor">
                <h1 className="title">Chuck Norris</h1>
                <img className="imgSize" src="https://assets.chucknorris.host/img/avatar/chuck-norris.png"/>
                <p className="joke">{joke.joke}</p>
                <RandomJoke viewJoke={viewJoke}/>
                <p className="category">Categorías</p>
                <JokeList categoryList={categoryList} viewJoke={viewJoke} />
            
            </div>
        </Fragment>
    )
    
}

export default App;


