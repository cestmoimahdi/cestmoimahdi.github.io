import React from 'react'
import {Route} from 'react-router-dom'
import Skills from '../../Pages/Skills/Skills'
import Resume from '../Resume/Resume'
import './Blog.css'

const Blog = ()=>{
    return(
        <div>
            <Route path="/" exact component={Resume} />
            <Route path="/:page" exact component={Skills} />
        </div>
    )
}

export default Blog