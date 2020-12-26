import React from 'react'
import Span from './Span/Span'
import './Spans.css'

const Spans = (props) => {
    let pages = []
    let page = null;
    // console.log(props.pages)
    if(props.pages){
        for(let i in props.pages){
            pages.push({
                prop:i,
                value:props.pages[i]
            })
        }
        page = pages.map((i)=>{
            return <Span type={i.prop} toload={i.value}/>
        })
    }

    return (
        <div className="spans-link-box">
            {page}
        </div>
    )
}

export default Spans