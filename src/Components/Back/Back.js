import React from 'react'
import {Link}  from 'react-router-dom'
import Home from '../../images/home.png'
import './Back.css'

const Back = ()=>{
    return(
        <div className="back-component">
            <Link to="/">
            <img src={Home} alt="homelogo"/>
            </Link>
        </div>
    )
}

export default Back