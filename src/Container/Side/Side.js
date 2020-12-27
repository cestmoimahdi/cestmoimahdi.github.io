import React from 'react'
import Cards from '../../Components/Cards/Cards'
import './Side.css'

const Side = (props) => {
    return (
        <div className="side">
            <div className="side-box">
                <div className="side-logo-image"></div>
                <Cards items={props.side}/>
            </div>
        </div>
    )
}

export default Side