import React from 'react'
import Language from '../Language/Language'
import './Tech.css'

const Tech = (props)=>{

    let itemsArray = []
    for(let i in props.items){
        itemsArray.push({
            prop:i,
            value:props.items[i]
        })
    }
    // console.log(itemsArray)
    let tech = itemsArray.map((i)=>{
        return <Language item={i} key={i.prop} />
    })
    console.log(tech)

    return(
        <div className="tech">
            {tech}
        </div>
    )
}

export default Tech