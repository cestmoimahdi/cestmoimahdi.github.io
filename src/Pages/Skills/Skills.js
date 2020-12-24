import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import Resume from '../../Components/Resume/Resume';
import Skill from './Skill/Skill'
import './Skills.css'

const Skills = (props) => {
    const [state,setstate] = useState({
        // 'mailapars' :{
        //     title:'Front-End Developer',
        //     place:'Maila Pars Co.',
        //     tech:['html','xml','css','jquery','javascript','threejs'],
        //     desc:'Design Responsive user interfaces for mobile and desktop',
        //     projects:{},
        //     since :'Nov 2019'
        // },
        'frontend' :{
            "Front-End Developer":{
            desc:'Html Css Bootstarp Jquery Javascript Reactjs ...',
            since :'Nov 2017',
            tech:{
                'Basics':['html','css','bootsrtap','jquery'],
                'Javascript' :['javascript','es6','react'],
                'Package Manager' : ['npm','yarn'],
                'More' : ['webpack','git','threejs']
            },},
            courses:{},
            projects:{}
        },
        'backend' :{
            "Back-End Developer":{
            since :'Oct 2020',
            desc:'Nodejs Express Mongodb ...',
            tech:{
                'Basics':['html','css','bootsrtap','jquery'],
                'Javascript' :['javascript','es6','react'],
                'Package Manager' : ['npm','yarn'],
                   'More' : ['webpack','git','threejs']
            },},
            courses:{},
            projects:{},
        },
        'dba' :{
            "Database Developer":{
            desc:'T-SQL Pl/SQl RDBMS NoSQL ...',
            since :'Jul 2020',
            tech:{
                'Basics':['html','css','bootsrtap','jquery'],
                'Javascript' :['javascript','es6','react'],
                'Package Manager' : ['npm','yarn'],
                'More' : ['webpack','git','threejs']
            },},
            courses:{},
            projects:{},
        },
        'python' :{
            "Python Developer":{
            since :'May 2019',
            desc:'Python ...',
            tech:{
                'Basics':['Python'],
            },},
            courses:{},
            projects:{},
        },
    });

    // console.log(props.match.params.page)
    const skill = state[props.match.params.page]
    let redirect = null;

    if(!skill){redirect = <Redirect to="/404" />}


    return(
        <div className="skills">
            {redirect}
            <div className="skills-box">
                <Resume />
                <Skill items={skill}/>
            </div>
        </div>
    )
}

export default Skills