import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import Resume from '../../Components/Resume/Resume';
import Skill from './Skill/Skill'
import './Skills.css'

const Skills = (props) => {
    const [state,setstate] = useState({
        'frontend' :{
            "Front-End Developer":{
                desc:'Html Css Bootstarp Jquery Javascript Reactjs ...',
                since :'Nov 2017',
                tech:{
                    'html':5,
                    'css':5,
                    'bootsrtap':4,
                    'jquery':4,
                    'javascript':4,
                    'es6':4,
                    'react':4,
                    'npm':4,
                    'webpack':3,
                    'git':3,
                    'threejs':3
                }
            },
            courses:{},
            projects:{}
        },
        'backend' :{
            "Back-End Developer":{
                since :'Oct 2020',
                desc:'Nodejs Express Mongodb ...',
                tech:{
                    'Nodejs':3,
                    'Express':3,
                    'git':3,
                }
            },
            courses:{},
            projects:{}
        },
        'dba' :{
            "Database Developer":{
                desc:'T-SQL Pl/SQl RDBMS NoSQL ...',
                since :'Jul 2020',
                tech:{
                    'T-SQL':4,
                    'SQL Server':3,
                    'PL/SQL':3,
                    'SSMS':3,
                }
            },
            courses:{},
            projects:{}
        },
        'python' :{
            "Python Developer":{
                since :'May 2019',
                desc:'Python ...',
                tech:{
                    'python':4,
                }
            },
            courses:{},
            projects:{}
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