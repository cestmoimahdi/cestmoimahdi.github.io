import React from 'react'
import {Link}  from 'react-router-dom'
import Home from '../../images/home.png'
import './Resume.css'

const Resume = ()=>{
    return(
        <div className="resume">
            <Link to="/">
            <img src={Home}/>
            </Link>
        </div>
    )
}

export default Resume