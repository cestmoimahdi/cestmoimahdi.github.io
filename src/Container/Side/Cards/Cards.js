import React from 'react'
import Card from '../Card/Card'
import './Cards.css'

const Cards = (props)=>{

    const itemsArray =[]
    for(let i in props.items){
        itemsArray.push({
            prop:i,
            values:props.items[i]
        })
    }

    let cards = null
    if(itemsArray){
        cards = itemsArray.map((item)=>{
            return(
                <div className="Card-Item" key={item.prop}>
                    <h2 className="Card-Title">{item.prop.toUpperCase()}</h2>
                    <Card values={item.values}/>
                </div>
            )
        })
    }

    return(
        <div className='cards'>
            {cards}
        </div>
    )
}
export default Cards