import React from 'react'
import Header from '../Header/Header'
import Side from '../Side/Side'
import Main from '../Main/Main'
import './Resume.css'

const Resume = ()=>{
    return(
        <React.Fragment>
            <header>
                <Header />
            </header>
            <main>
                <div className='side'>
                    <Side />
                </div>
                <div className='main'>
                    {/* <Skills /> */}
                    <Main />
                </div>
            </main>
        </React.Fragment>
    )
}

export default Resume