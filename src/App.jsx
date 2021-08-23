
import React, { Fragment, useState, useRef } from 'react';
import { RandomJesting } from './components/randomJesting/randomJesting';
import { ListJesting } from './components/listJesting/listJesting';
import '../src/styles.css'

function App (){
    
    const [jesting, setJesting] = useState ({
        jesting: ""
    })
    const viewJesting = (jesting) =>{
        console.log(jesting)
        setJesting({jesting:jesting})
    }
    
    return (
        <Fragment>
            <div className="backgroundColor">
                <h1 className="title">Chuck Norris</h1>
                <img className="imgSize" src="https://assets.chucknorris.host/img/avatar/chuck-norris.png"/>
                <p className="jesting">{jesting.jesting}</p>
                <RandomJesting viewJesting={viewJesting}/>
                <p className="category">Categorías</p>
                <ListJesting />
            </div>
        </Fragment>
    )
    
}

export default App;