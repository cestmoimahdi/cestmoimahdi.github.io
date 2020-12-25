import React from 'react'
import {Link} from 'react-router-dom'
import './Span.css'

const Span = (props) => {
    let page = null
    if(props.page){
        page =  <Link className="page" to={`/${props.page}`}>Page</Link>
    }else if(props.cert){
        page =  <a className="page href" href={props.cert}>Certificate</a>
    }else if(props.site || props.git){
        page =  <a className="page" href={props.site}>{props.type}</a>
    }
    return <div>{page}</div>
}

export default Span