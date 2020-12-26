import React from 'react'
import './Text.css'

const Text = (props) => {
    return (typeof props.info) === 'object' ? (<a className="text-a-component" href={props.info.click}>{props.info.value}</a>) : props.info
}

export default Text