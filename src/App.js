import React from 'react'
import Header from './Container/Header/Header'
import Side from './Container/Side/Side'
import Main from './Container/Main/Main'
import Footer from './Container/Footer/Footer'

const App = ()=>{
    return(
        <div>
        <Header />
        <main>
            <div className='side'>
                <Side />
            </div>
            <div className='main'>
                <Main />
            </div>
        </main>
        <Footer />
        </div>
    )
}

export default App