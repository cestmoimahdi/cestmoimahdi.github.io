import React from 'react'
import Card from './Card/Card'
import Title from '../Title/Title'
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
                <div className="cards-item" key={item.prop}>
                    <Title title={item.prop}/>
                    <Card values={item.values}/>
                </div>
            )
        })
    }

    return(
        <div className='cards-box'>
            {cards}
        </div>
    )
}
export default Cards