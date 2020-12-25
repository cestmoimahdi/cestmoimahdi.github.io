import React from 'react'
import Span from '../../../../Components/Span/Span'
import './Course.css'

const Course = (props)=>{
    let certificate = null;
    if(props.infos.cert){
        certificate = <div className="course-item-cert"> <a href={props.infos.cert} target="_blank">Certificate</a> </div>
    }

    return(
        <div className="course-item">
            <Span cert={props.infos.cert} />
             <h3 className="course-item-title">{props.title}</h3>
            <p className="course-item-desc">{props.infos.desc}</p>
            <p className="course-item-from"><span className="course-item-infos-title">From : </span>{props.infos.from}</p>
            <p className="course-item-date"><span className="course-item-infos-title">Issue Date : </span>{props.infos.date}</p>
            <p className="course-item-duration"><span className="course-item-infos-title">Duration : </span>{props.infos.duration}</p>
            {certificate}
        </div>
    )
}

export default Course