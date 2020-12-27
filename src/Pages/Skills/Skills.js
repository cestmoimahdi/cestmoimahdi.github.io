import React,{useState} from 'react'
import { Redirect } from 'react-router-dom';
import Back from '../../Components/Back/Back';
import Skill from './Skill/Skill'
import './Skills.css'

const Skills = (props) => {
    const [state, setstate] = useState({...props.skills});
    const skill = state[props.info.match.params.page]
    let redirect = null;

    if (!skill) { redirect = < Redirect to = "/404" / > }


    return ( 
        <div className="skills" > 
            { redirect } 
            <div className = "skills-box" >
                <Back / >
                <Skill items = { skill }/>
            </div>
        </div>
    )
}

export default Skills