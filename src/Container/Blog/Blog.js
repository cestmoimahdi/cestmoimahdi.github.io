import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Skills from '../../Pages/Skills/Skills'
import Works from '../../Pages/Works/Works'
import Notfound from '../../Pages/Notfound/Notfound'
import Main from '../../Pages/Main/Main'
import './Blog.css'

const Blog = (props)=>{
    return(
        <div className="routing-wrapper">
            <Switch>
                <Route path="/" exact component={()=><Main main={props.main}/>} />
                <Route path="/404" component={Notfound} />
                <Route path="/skill/:page" exact component={(e)=><Skills skills={props.skills} info={e}/>} />
                <Route path="/work/:page" exact component={(e)=><Works works={props.works} info={e}/>} />
                <Route component={Notfound} />
            </Switch>
        </div>
    )
}

export default Blog