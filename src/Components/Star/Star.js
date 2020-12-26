import React from 'react'
import './Star.css'

const Star = (props)=>{

    let count = props.star;
    let stars = []
    for(let item = 5 ; item > 0 ; item--){
        if (count > 0){
            stars.push({prop:item,check:'star-checked'})
        }else{
            stars.push({prop:item,check:''})
        }
        count--
    }

    let star = null;
    star = stars.map((i)=>{
        return <span className={`star-circle ${i.check}`} key={i.prop}></span>
    })
    // console.log(star)
    return (
        <div className="star-box">{star}</div>
    )
}

export default Star