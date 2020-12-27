import React,{useState} from 'react'
import { Redirect } from 'react-router-dom';
import Back from '../../Components/Back/Back';
import Work from './Work/Work'
import './Works.css'

const Works = (props)=>{
    const [state, setstate] = useState({...props.works});
    // console.log(state)
    const work = state[props.info.match.params.page]
    let redirect = null;

    if (!work) { redirect = < Redirect to = "/404" / > }


    return ( 
        <div className="works" > 
            { redirect } 
            <div className = "works-box" >
                <Back / >
                <Work items={work}/>
            </div>
        </div>
    )
}

export default Works