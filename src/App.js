import React, { useState } from 'react'
import {BrowserRouter as Router } from 'react-router-dom'
import Welcome from './Container/Welcome/Welcome'
import Side from './Container/Side/Side'
import Footer from './Container/Footer/Footer'
import Blog from './Container/Blog/Blog'
import './App.css'

const App = ()=>{

    const [state,setState] = useState({
        main:{
            work :{
                'Nov 2019' :{
                    title:'Front-End Developer',
                    place:'Maila Pars Co.',
                    desc:'Design Responsive user interfaces for mobile and desktop',
                },
                'Jan 2017' :{
                    title:'Informatics Assistant',
                    place:'Water and sewage Org.',
                    desc:'Help with Computer issues in needed sections',
                }
            },
            education:{
                'Sep 2016' :{
                    title:"Bachelor's degree - IT",
                    place:'Islamic Azad University Of Tehran',
                    desc:'Last year student of Computer Engineering - Information Technology',
                }
            },
            'Could Count on Me...' :{
                'Nov 2017' :{
                    title:"Front-End Developer",
                    desc:'Html Css Bootstarp Jquery Javascript Reactjs ...',
                    links:{
                        page :'frontend'
                    }
                },
                'Oct 2020' :{
                    title:"Back-End Developer",
                    desc:'Nodejs Express Mongodb ...',
                    links:{
                        page :'backend'
                    }
                },
                'Jul 2020' :{
                    title:"Database Developer",
                    desc:'T-SQL Pl/SQl RDBMS NoSQL ...',
                    links:{
                        page :'dba'
                    }
                },
                'May 2019' :{
                    title:"Python Developer",
                    desc:'Python ...',
                    links:{
                        page :'python'
                    }
                },
            },
        },
        skills:{
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
                        links:{
                            Certificate: 'https://quera.ir/certificate/rjPnZ34g/'
                        }
                    },
                },
                projects: {
                    '1': {
                        date: 'Nov 2019',
                        title: 'Personal CV Website',
                        place: 'Reactjs JSX Javascript HTML CSS',
                        desc: "Responsive Single Page Application For my First React project ever.All codes are in React and JSX which is styled by Css , All Links are by React Routing Library So it's like an SPA. Main structure of Project is based on grid display. All components are reusable and based on flex display. Anybody can use Sourcecode and can customize it there is no copyright:) All states are in App.js to handle it easily",
                        links:{
                            Github: 'https://github.com/cestmoimahdi/cestmoimahdi.github.io',
                            Website: 'https://cestmoimahdi.github.io'
                        }
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
                        links:{
                            Certificate: ''
                        }
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
                        links:{
                            Certificate: 'https://quera.ir/certificate/c06NQCtk/'
                        }
                    },
                    'Advanced Python Programming': {
                        desc: 'Advanced Python Programming and Object-Oriented Thinking Course',
                        date: 'May 2020',
                        duration: 'Task-Oriented',
                        from: 'Quera College',
                        links:{
                            Certificate: 'https://quera.ir/certificate/zsD46sTK/'
                        }
                    },
                    'Python For Every One': {
                        desc: 'Task-Oriented Course in Fundamentals of Python Programming and Algorithmic Thinking',
                        date: 'November 2020',
                        duration: 'Task-Oriented',
                        from: 'Coursera',
                        links:{
                            Certificate: ''
                        }
                    },
                },
                projects: {}
            },
        },
        side:{
            Personal : {
                name : 'Mahdi Asemani',
                birthday : 'January 8th, 1998 (23)',
                languages : 'Persian, English, Turkish'
            },
            Contact : {
                mobile : { value : '+98 9016800390' , click : 'tel:+989016800390' },
                email : { value : 'Mahdiasemani98@yahoo.com', click : 'mailto:mahdiasemani98@yahoo.com' },
                address : 'Tehransar, Tehran, Iran'
            },
            social : {
                github : { value : 'github.com/Cestmoimahdi', click : 'https://github.com/Cestmoimahdi' },
                linkedin: { value : 'linkedin.com/Cestmoimahdi' ,click : 'https://linkedin.com/Cestmoimahdi' }
            }
        },
        welcome:{
            name:"Mahdi Asemani",
            description:"Front-End Developer"
        },
        footer:{
            designer:"Mahdi Asemani",
            lang:'Reactjs'
        }
    })


    return(
        <Router>
            <div className="wrapper" >
                <header>
                    <Welcome welcome={state.welcome}/>
                </header>
                <main>
                    <div className='side'>
                        <Side side={state.side}/>
                    </div>
                    <div className='main'>
                        <Blog main={state.main} skills={state.skills}/>
                    </div>
                </main>
                <footer>
                        <Footer footer={state.footer} />
                </footer>
            </div>
        </Router>
    )
}

export default App