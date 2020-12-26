import React from 'react'
import './Logo.css'

const Logo = (props)=>{
    return(
        <div className='logo-component'>
            <h2>{props.main}</h2>
            <h3>{props.description}</h3>
        </div>
        
    )
}

export default Logo