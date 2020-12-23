import React from 'react'
import './Title.css'

const Title = (props) => {
    return <h2 className="Card-Title">{props.title.toUpperCase()}</h2>
}

export default Title