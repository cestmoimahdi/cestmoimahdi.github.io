import React from 'react'
import './Projects.css'
import Formal from '../../../Container/Main/Formal/Formal'

const Projects = (props)=>{

    let projects = []
    for(let i in props.items){
        projects.push({
            prop:i,
            value:{i:props.items[i]}
        })
    }
    // console.log(projects)

    let project = 'Not Project Yet!!'
    if(projects){
        project = projects.map((item)=>{
            return(
                <Formal values={item.value} key={item.prop} prop='projects'/>
            )
        })
    }

    return(
        <div className="projects-box">{project}</div>
    )
}

export default Projects