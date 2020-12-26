import React, { useState } from 'react'
import Formals from '../../Components/Formals/Formals'
import './Main.css'

const Main = () => {
    const [state,setState] = useState({
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