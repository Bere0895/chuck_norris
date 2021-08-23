import React, {Fragment, useEffect, useState} from 'react'
import { Category } from './category'


export function JokeList({categoryList, viewJoke}) {
   
   
    return (
        <Fragment>
            <div>
                {
                    categoryList.map((value) =>
                      <Category categoryList={value.name} viewJoke={viewJoke}/>
                    )
                }
            </div>
        </Fragment>
    )
}
