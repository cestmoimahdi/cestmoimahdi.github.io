import React from 'react'
import './Infos.css'

const Infos = (props)=>{
    console.log(props.items)

    let tech = 'Not project Yet!';
    if(props.items.tech){
        tech = 'yes'
    }

    return(
        <div className="infos">
            <div>{props.items.desc}</div>
            <div className="title"><span> Since </span>{props.items.since}</div>
            <div className="title"><span> All I KNOW </span>{tech}</div>
        </div>
    )
}

export default Infos