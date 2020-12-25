import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import Resume from '../../Components/Resume/Resume';
import Skill from './Skill/Skill'
import './Skills.css'

const Skills = (props) => {
    const [state, setstate] = useState({
        'frontend': {
            "Front-End Developer": {
                desc: 'Html Css Bootstarp Jquery Javascript Reactjs ...',
                since: 'Nov 2017',
                tech: {
                    'html': 5,
                    'css': 5,
                    'bootsrtap': 4,
                    'jquery': 4,
                    'javascript': 4,
                    'es6': 4,
                    'react': 4,
                    'npm': 3,
                    'webpack': 2,
                    'git': 2,
                    'threejs': 2
                }
            },
            courses: {
                'Front-End Web Development': {
                    desc: 'Project-Oriented Course in Front-End Web Development Include  jQuery, JavaScript, Bootstrap, CSS, HTML, Ajax',
                    date: 'October 2020',
                    duration: 'Project-Oriented',
                    from: 'Quera College',
                    cert: 'https://quera.ir/certificate/rjPnZ34g/'
                },
            },
            projects: {
                '1': {
                    date: 'Nov 2019',
                    title: 'Personal CV Website',
                    place: 'Reactjs JSX Javascript HTML CSS',
                    desc: "Responsive Single Page Application For my First React project ever.All codes are in React and JSX which is styled by Css , All Links are by React Routing Library So it's like an SPA. Main structure of Project is based on grid display. All components are reusable and based on flex display. Anybody can use Sourcecode and can customize it there is no copyright:) All states are in App.js to handle All easily",
                    git: 'https://github.com/cestmoimahdi/cestmoimahdi.github.io',
                    site: 'https://cestmoimahdi.github.io'
                },
            }
        },
        'backend': {
            "Back-End Developer": {
                since: 'Oct 2020',
                desc: 'Nodejs Express Mongodb ...',
                tech: {
                    'Nodejs': 2,
                    'Express': 2,
                    'git': 2,
                }
            },
            courses: {},
            projects: {}
        },
        'dba': {
            "Database Developer": {
                desc: 'T-SQL Pl/SQl RDBMS NoSQL ...',
                since: 'Jul 2020',
                tech: {
                    'T-SQL': 4,
                    'SQL Server': 3,
                    'PL/SQL': 3,
                    'SSMS': 3,
                }
            },
            courses: {
                'T-SQL Fundamentals': {
                    desc: 'Project-Oriented Course in SQL Server Include T-SQL, Window Functions and ...',
                    date: 'Jul 2020',
                    duration: '40h',
                    from: 'Tehran University',
                    cert: '#'
                },
            },
            projects: {}
        },
        'python': {
            "Python Developer": {
                since: 'May 2019',
                desc: 'Python ...',
                tech: {
                    'python': 4,
                }
            },
            courses: {
                'Python Fundamentals': {
                    desc: 'Task-Oriented Course in Fundamentals of Python Programming and Algorithmic Thinking',
                    date: 'April 2020',
                    duration: 'Task-Oriented',
                    from: 'Quera College',
                    cert: 'https://quera.ir/certificate/c06NQCtk/'
                },
                'Advanced Python Programming': {
                    desc: 'Advanced Python Programming and Object-Oriented Thinking Course',
                    date: 'May 2020',
                    duration: 'Task-Oriented',
                    from: 'Quera College',
                    cert: 'https://quera.ir/certificate/zsD46sTK/'
                },
                'Python For Every One': {
                    desc: 'Task-Oriented Course in Fundamentals of Python Programming and Algorithmic Thinking',
                    date: 'November 2020',
                    duration: 'Task-Oriented',
                    from: 'Coursera',
                    cert: ''
                },
            },
            projects: {}
        },
    });

    // console.log(props.match.params.page)
    const skill = state[props.match.params.page]
    let redirect = null;

    if (!skill) { redirect = < Redirect to = "/404" / > }


    return ( <
        div className = "skills" > { redirect } <
        div className = "skills-box" >
        <
        Resume / >
        <
        Skill items = { skill }
        /> < /
        div > <
        /div>
    )
}

export default Skills