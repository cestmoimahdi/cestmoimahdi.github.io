import React from 'react'
import {Link} from 'react-router-dom'
import './Span.css'

const Span = (props) => {
    let page = null
    if(props.page){
        page =  <Link className="page" to={`/${props.page}`}>Page</Link>
    }
    return <div>{page}</div>
}

export default Span