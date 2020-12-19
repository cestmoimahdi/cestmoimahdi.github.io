import React from 'react'
import Side from './Container/Side/Side'
import Main from './Container/Main/Main'

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