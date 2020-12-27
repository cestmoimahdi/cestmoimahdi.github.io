import React from 'react'
import Course from './Course/Course'
import './Courses.css'

const Courses = (props)=>{
    // console.log(props.items)

    let course = []
    let CourseItem = []
    if (props.items){
        for(let i in props.items){
            course.push({
                prop:i,
                value:props.items[i]
            })
        }
        
        CourseItem = course.map((i)=>{
            return <Course title={i.prop} infos={i.value} key={i.prop}/>
        })
    }
    if (CourseItem.length === 0){
        CourseItem = 'No Course Yet!!'
    }
    return(
        <div className="courses-box">{CourseItem}</div>
    )
}

export default Courses