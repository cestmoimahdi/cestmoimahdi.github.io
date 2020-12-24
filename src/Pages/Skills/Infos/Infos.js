import React from 'react'
import Tech from './Tech/Tech'
import './Infos.css'

const Infos = (props)=>{
    // console.log(props.items)

    let tech = 'Notting Yet!';
    if(props.items.tech){
        tech = <Tech items={props.items.tech}/>
    }

    return(
        <div className="infos">
            <div>{props.items.desc}</div>
            <div className="infos-title">
                <div> <span> Since </span> {props.items.since} </div>
                <div className="infos-tech"> <span> Languages, Frameworks, Libraries And ... </span>{tech} </div>
            </div>
        </div>
    )
}

export default Infos