import React from 'react'
import Title from '../../../Components/Title/Title';
import Courses from '../Courses/Courses'
import Projects from '../Projects/Projects'
import Infos from '../Infos/Infos'
import './Skill.css'

const Skill = (props) => {

    const itemsArray = [];
    for (let i in props.items){
        itemsArray.push({
            prop:i,
            value:props.items[i]
        })
    }
    
    let skills = itemsArray.map((i)=>{
        let check = null;
        if(i.prop ==='courses'){
            check = <Courses items={i.value}/>
        }else if(i.prop === 'projects'){
            check = <Projects items={i.value}/>
        }else{
            check = <Infos items={i.value}/>
        }
        return (
            <div className="Card-Item" key={i.prop}>
                <Title title={i.prop}/>
                {check}
            </div>
        )
    })

    return (
        <div className="skill">
            {skills}
        </div>
    )
}

export default Skill