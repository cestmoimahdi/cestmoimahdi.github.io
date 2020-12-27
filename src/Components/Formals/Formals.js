import React from 'react'
import Title from '../Title/Title'
import Formal from './Formal/Formal'
import Tech from '../Tech/Tech'
import './Formals.css'

const Formals = (props) => {
    const itemsArray =[]
    for(let i in props.items){
        itemsArray.push({
            prop:i,
            values:props.items[i]
        })
    }
    // console.log(itemsArray)

    let formal = null;
    if(itemsArray){
        formal = itemsArray.map((item)=>{
            let formalItem = <Formal values={item.values}/>
            if (item.prop.startsWith('languages')){ formalItem = <Tech items={item.values}/> }
            return(
                <div className="formal-item" key={item.prop}>
                    <Title title={item.prop}/>
                    {formalItem}
                </div>
            )
        })
    }

    return (
        <div className="formals-box">
            {formal}
        </div>
    )
}

export default Formals