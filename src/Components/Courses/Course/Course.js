import React from 'react'
import Spans from '../../Spans/Spans'
import './Course.css'

const Course = (props)=>{
    let certificate = null;
    if(props.infos.links){
        certificate = <Spans pages={props.infos.links} />
    }

    return(
        <div className="course-item">
            <h3 className="course-item-title">{props.title}</h3>
            <p className="course-item-desc">{props.infos.desc}</p>
            <p className="course-item-from"><span className="course-item-infos-title">Held By : </span>{props.infos.from}</p>
            <p className="course-item-date"><span className="course-item-infos-title">Issue Date : </span>{props.infos.date}</p>
            <p className="course-item-duration"><span className="course-item-infos-title">Duration : </span>{props.infos.duration}</p>
            {certificate}
        </div>
    )
}

export default Course