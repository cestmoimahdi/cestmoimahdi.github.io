import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Skills from '../../Pages/Skills/Skills'
import Notfound from '../../Pages/Notfound/Notfound'
import Main from '../Main/Main'
import './Blog.css'

const Blog = ()=>{
    return(
        <div>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/404" component={Notfound} />
                <Route path="/:page" exact component={Skills} />
                <Route component={Notfound} />
            </Switch>
        </div>
    )
}

export default Blog