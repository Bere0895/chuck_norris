import React, { Fragment } from 'react'
import  axios  from 'axios'
import './../../index.css'

export function Category({categoryList, viewJoke}) {
    const getJoke = () =>{
        axios.get('https://api.chucknorris.io/jokes/random?category='+categoryList).then((resp)=>{
            viewJoke(resp.data.value)
        })
    }
    return (
        <Fragment>
            <button className="buttonsCategory" onClick={getJoke}>{categoryList} </button>
        </Fragment>
        
    )
}
