import React from 'react'
import './Title.css'

const Title = (props) => {
    return <h2 className="card-title-component">{props.title.toUpperCase()}</h2>
}

export default Title