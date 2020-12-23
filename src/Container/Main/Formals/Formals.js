import React from 'react'
import Title from '../../../Components/Title/Title'
import Formal from '../Formal/Formal'
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
            return(
                <div className="Card-Item" key={item.prop}>
                    <Title title={item.prop}/>
                    <Formal values={item.values}/>
                </div>
            )
        })
    }

    return (
        <div className="formals">
            {formal}
        </div>
    )
}

export default Formals