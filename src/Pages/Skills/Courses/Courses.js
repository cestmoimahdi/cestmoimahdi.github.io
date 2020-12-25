import React from 'react'
import Course from './Course/Course'
import './Courses.css'

const Courses = (props)=>{
    // console.log(props.items)

    let course = []
    for(let i in props.items){
        course.push({
            prop:i,
            value:props.items[i]
        })
    }
    
    let CourseItem = course.map((i)=>{
        return <Course title={i.prop} infos={i.value} key={i.prop}/>
    })

    return(
        <div className="courses-box">{CourseItem}</div>
    )
}

export default Courses