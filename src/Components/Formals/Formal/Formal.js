import React from 'react'
import Spans from '../../Spans/Spans'
import './Formal.css'

const Formal = (props)=>{
    const itemsArray = [];
    for(let i in props.values){
        let date = i
        if (props.prop === 'projects'){date = props.values[i].date}
        itemsArray.push({
            prop:date,
            values:props.values[i]
        })
    }


    // console.log(itemsArray)

    let formal = null;
    if(itemsArray){
        formal = itemsArray.map((item)=>{
            let spanItem = null;
            if(item.values){spanItem = <Spans pages={item.values.links}/>}
            return (
                <div className="formal" key={item.prop}>
                    <div className="left">
                        <p className="date">{item.prop}</p>
                    </div>
                    <div className="right">
                        <div className="circle"></div>
                        {spanItem}
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