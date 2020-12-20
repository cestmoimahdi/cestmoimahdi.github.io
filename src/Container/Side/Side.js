import React , {useState} from 'react'
import Cards from './Cards/Cards'
import './Side.css'

const Side = () => {
    const [state,setState] = useState({
        Personal : {
            name : 'Mahdi Asemani',
            birthday : 'January 8th, 1998 (23)',
            languages : 'Persian, English, Turkish'
        },
        Contact : {
            mobile : '+98 9016800390',
            email : 'Mahdiasemani98@yahoo.com',
            address : 'Tehransar, Tehran, Iran'
        },
        social : {
            github : 'github.com/Cestmoimahdi',
            linkedin: 'linkedin.com/Cestmoimahdi'
        }
    })
    return (
        <div className="side">
            <div className="side-box">
                <div className="image"></div>
                <Cards items={state}/>
            </div>
        </div>
    )
}

export default Side