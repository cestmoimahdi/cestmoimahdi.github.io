import React from 'react'
import Tech from '../Tech/Tech'
import './Infos.css'

const Infos = (props)=>{
    // console.log(props.items)

    let tech;
    let moreinfos = null
    if(props.items.location){
        moreinfos = (
            <div>
                <div className="infos-post"> <span> As </span> {props.items.post} </div>
                <div className="infos-location"> <span> Location : </span> {props.items.location} </div>
                <div className="infos-phone"> <span> Phone : </span> {props.items.phone} </div>
            </div>
        )
    }else{
        tech = <div className="infos-not-info"> Notting Yet! </div>;
        if(props.items.tech){
            tech = <Tech items={props.items.tech}/>
        }
        moreinfos = <div className="infos-lang"> <span> Languages, Frameworks, Libraries And ... </span>{tech}</div>
    }

    return(
        <div className="infos-box">
            <div className="infos-desc">{props.items.desc}</div>
            <div className="infos-item">
                <div className="infos-time"> <span> Since </span> {props.items.since} </div>
                {moreinfos}
            </div>
        </div>
    )
}

export default Infos