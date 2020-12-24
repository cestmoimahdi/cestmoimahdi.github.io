import React from 'react'
import {BrowserRouter as Router } from 'react-router-dom'
import Welcome from './Container/Welcome/Welcome'
import Side from './Container/Side/Side'
import Footer from './Container/Footer/Footer'
import Blog from './Container/Blog/Blog'
import './App.css'

const App = ()=>{
    return(
        <Router>
            <div className="wrapper" >
                <header>
                    <Welcome />
                </header>
                <main>
                    <div className='side'>
                        <Side />
                    </div>
                    <div className='main'>
                        <Blog />
                    </div>
                </main>
                <footer>
                        <Footer />
                </footer>
            </div>
        </Router>
    )
}

export default App