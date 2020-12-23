import React from 'react'
import './Span.css'

const Span = (props) => {
    let page = null
    if(props.page){
        console.log(props.page)
        page =  <a className="page" onClick={props.page}>Page</a>
    }
    return <div>{page}</div>
}

export default Span