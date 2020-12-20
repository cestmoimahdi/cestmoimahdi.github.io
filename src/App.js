import React from 'react'
import Header from './Container/Header/Header'
import Side from './Container/Side/Side'
import Main from './Container/Main/Main'
import Footer from './Container/Footer/Footer'
import './App.css'

const App = ()=>{
    return(
        <div className="wrapper">
        <header>
            <Header />
        </header>
        <main>
            <div className='side'>
                <Side />
            </div>
            <div className='main'>
                <Main />
            </div>
        </main>
        <footer>
            <Footer />
        </footer>
        </div>
    )
}

export default App