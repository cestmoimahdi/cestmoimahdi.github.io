import React from 'react'
import {Link} from 'react-router-dom'
import './Span.css'

const Span = (props) => {
    let link = null;
    if(props.type){
        if (props.type=== 'page'){
            link =(
                <div className="item-link">
                    <Link className="link-a" to={`/${props.toload}`}>Page</Link>
                </div>
            )
        }
        else{
            link =(
                <div className={`item-link ${props.type}`} >
                    <a className="link-a" target="_blank" href={props.toload}>{props.type}</a>
                </div>
            )
        }
    }
    return <div>{link}</div>
}

export default Span