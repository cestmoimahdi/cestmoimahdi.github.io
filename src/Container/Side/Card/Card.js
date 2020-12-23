import React from 'react'
import './Card.css'

const Card = (props) => {
    const itemsArray = []
    for (let i in props.values) {
        itemsArray.push({
            prop: i,
            values: props.values[i]
        })
    }

    let card = null
    if(itemsArray){
        card = itemsArray.map((item)=>{
            return(
                <div className="card" key={item.prop}>
                    <h2 className="Card-Key">{item.prop.toUpperCase()}</h2>
                    <h3 className="Card-Value"><a href="#">{item.values}</a></h3>
                </div>
            )
        })
    }

    console.log(itemsArray)
    return (
        <div className="content">
            {card}
        </div>
    )
}

export default Card