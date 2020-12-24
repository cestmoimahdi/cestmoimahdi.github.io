import React from 'react'
import Star from '../Star/Star'
import './Language.css'

const Language = (props)=>{
    return(
        <div className="language" key={props.item.prop}>
            <h2 className="Card-Key">{props.item.prop}</h2>
            <h3 className="Card-Value"><Star star={props.item.value}/></h3>
        </div>
    )
}

export default Language