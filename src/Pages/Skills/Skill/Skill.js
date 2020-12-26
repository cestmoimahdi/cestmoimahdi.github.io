import React from 'react'
import Title from '../../../Components/Title/Title';
import Courses from '../../../Components/Courses/Courses'
import Projects from '../../../Components/Projects/Projects'
import Infos from '../../../Components/Infos/Infos'
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
            <div className="skill-card-Item" key={i.prop}>
                <Title title={i.prop}/>
                {check}
            </div>
        )
    })

    return (
        <div className="skill-box">
            {skills}
        </div>
    )
}

export default Skill