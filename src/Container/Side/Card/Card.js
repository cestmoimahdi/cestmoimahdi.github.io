import React from 'react'
import Text from '../../../Components/Text/Text'
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
            // console.log(item.values)
            return(
                <div className="card" key={item.prop}>
                    <h2 className="Card-Key">{item.prop.toUpperCase()}</h2>
                    <h3 className="Card-Value"><Text info={item.values}/></h3>
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