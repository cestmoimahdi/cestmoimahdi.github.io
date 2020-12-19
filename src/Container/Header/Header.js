import React from 'react'
import Logo from '../../Components/Logo/Logo'
import './Header.css'

const Header = ()=>{
    return(
        <header>
            <div className="header">
                <Logo />
            </div>
        </header>
    )
}

export default Header