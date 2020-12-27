import React from 'react'
import Span from './Span/Span'
import './Spans.css'

const Spans = (props) => {
    let pages = []
    let page = null;
    let classHandler = 'spans-link-box'
    // console.log(props.pages)
    if(props.pages){
        for(let i in props.pages){
            if (i === 'page'){classHandler = 'spans-page-box'}
            pages.push({
                prop:i,
                value:props.pages[i]
            })
        }
        page = pages.map((i)=>{
            return <Span type={i.prop} toload={i.value} key={i.prop}/>
        })
    }
    // console.log(classHandler)
    return (
        <div className={classHandler}>
            {page}
        </div>
    )
}

export default Spans