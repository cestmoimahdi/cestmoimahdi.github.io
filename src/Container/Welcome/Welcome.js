import React from 'react'
import Logo from '../../Components/Logo/Logo'
import './Welcome.css'

const Welcome = (props) => {
    return ( 
        <div className="welcome" >
            <Logo logo={props.welcome}/ >
        </div>
    )
}

export default Welcome