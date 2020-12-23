import React,{ useState } from 'react'
import Formals from './Formals/Formals'
import Menus from '../Menus/Menus'
import './Main.css'

const Main = () => {
    const [state,setState] = useState({
        work :{
            'Nov 2019' :{
                title:'Front-End Developer',
                place:'Maila Pars Co.',
                tech:['html','xml','css','jquery','javascript','threejs'],
                desc:'Design Responsive user interfaces for mobile and desktop'
            },
            'Jan 2017' :{
                title:'Informatics Assistant',
                place:'Water and sewage Org.',
                tech:['word','excel','powerpoint','software','hardware'],
                desc:'Help with Computer issues in needed sections'
            }
        },
        education:{
            'Sep 2016' :{
                title:"Bachelor's degree - IT",
                place:'Azad Islamic University Of Tehran',
                desc:'Last year student of Computer Engineering - Information Technology'
            }
        },
        'Could Count on Me...' :{
            'Nov 2017' :{
                title:"Front-End Developer",
                desc:'Html Css Bootstarp Jquery Javascript Reactjs ...',
                click:'',
                tech:{
                    'Basics':['html','css','bootsrtap','jquery'],
                    'Javascript' :['javascript','es6','react'],
                    'Package Manager' : ['npm','yarn'],
                    'More' : ['webpack','git','threejs']
                }
            },
            'Oct 2020' :{
                title:"Back-End Developer",
                desc:'Nodejs Express Mongodb ...',
                click:'',
                tech:{
                    'Basics':['html','css','bootsrtap','jquery'],
                    'Javascript' :['javascript','es6','react'],
                    'Package Manager' : ['npm','yarn'],
                    'More' : ['webpack','git','threejs']
                }
            },
            'Jul 2020' :{
                title:"Database Developer",
                desc:'T-SQL Pl/SQl RDBMS NoSQL ...',
                click:'',
                tech:{
                    'Basics':['html','css','bootsrtap','jquery'],
                    'Javascript' :['javascript','es6','react'],
                    'Package Manager' : ['npm','yarn'],
                    'More' : ['webpack','git','threejs']
                }
            }
        },
    })
    return (
        <div className="main">
            <div className="main-box">
                <Menus />
                <Formals items={state}/>
            </div>
        </div>
    )
}

export default Main