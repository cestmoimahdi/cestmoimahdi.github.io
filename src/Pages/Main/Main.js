import React from 'react'
import Formals from '../../Components/Formals/Formals'
import './Main.css'

const Main = (props) => {
    return (
        <div className="main">
            <div className="main-box">
                <Formals items={props.main}/>
            </div>
        </div>
    )
}

export default Main