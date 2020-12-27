import React from 'react'
import './List.css'

const List =(props)=>{

    let list = null
    // console.log(props.items)
    if(props.items){
        list = props.items.map((item)=>{
            return <div className="tech-list-item">{item}</div>
        })
    }

    return(
        <div className="tech-list-box">
            {list}
        </div>
    )
}

export default List