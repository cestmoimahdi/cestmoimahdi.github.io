import React from 'react'
import Side from './Container/Side/Side'
import Main from './Container/Main/Main'

const App = ()=>{
    return(
        <div>
        <main>
            <div className='side'>
                <Side />
            </div>
            <div className='main'>
                <Main />
            </div>
        </main>
        <footer>
            <div className="footer">
            Designed by Mahdi Asemani
            </div>
        </footer>
        </div>
    )
}

export default App