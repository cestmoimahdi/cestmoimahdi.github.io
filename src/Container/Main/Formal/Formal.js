import React from 'react'
import './Formal.css'

const Formal = (props)=>{
    const itemsArray = [];
    for(let i in props.values){
        itemsArray.push({
            prop:i,
            values:props.values[i]
        })
    }

    console.log(itemsArray)

    let formal = null;
    if(itemsArray){
        formal = itemsArray.map((item)=>{
            return (
                <div className="formal">
                    <div className="left">
                        <p className="date">{item.prop}</p>
                    </div>
                    <div className="right">
                        <div className="circle"></div>
                        <h2 className="title">{item.values.title}</h2>
                        <h3 className="place">{item.values.place}</h3>
                        <p className="describe">{item.values.desc}</p>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="content">
            {formal}
        </div>
    )
}

export default Formal