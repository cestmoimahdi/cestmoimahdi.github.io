import React from 'react'
import {BrowserRouter as Router } from 'react-router-dom'
import Footer from './Container/Footer/Footer'
import Blog from './Container/Blog/Blog'
import './App.css'

const App = ()=>{
    return(
        <Router>
            <div className="wrapper">
                <Blog />
                <footer>
                    <Footer />
                </footer>
            </div>
        </Router>
    )
}

export default App