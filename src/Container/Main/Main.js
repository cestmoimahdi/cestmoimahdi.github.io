import React,{ useState } from 'react'
import Formals from './Formals/Formals'
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
    })
    const [stateTech,setStateTech] = useState({
        'Could Count on Me...' :{
            'Front-End Developer' :{
                start:'Nov 2017',
                tech:{
                    'Basics':['html','css','bootsrtap','jquery'],
                    'Javascript' :['javascript','es6','react'],
                    'Package Manager' : ['npm','yarn'],
                    'more' : ['threejs','webpack','git']
                }
            },
            'Back-End Developer' :{
                place:'Oct 2020',
                tech:{
                    'Basics':['html','css','bootsrtap','jquery'],
                    'Javascript' :['javascript','es6','react'],
                    'Package Manager' : ['npm','yarn'],
                    'more' : ['threejs','webpack','git']
                }
            },
        },
    })
    return (
        <div className="main">
            <div className="main-box">
                <Formals items={state}/>
            </div>
        </div>
    )
}

export default Main