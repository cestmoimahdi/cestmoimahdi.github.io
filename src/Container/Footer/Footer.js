import React from 'react'
import './Footer.css'

const Footer = (props) => {
    return(
        <div className="footer-box">
            <h4 className="footer-designer">Designed by <span>{props.footer.designer}</span> with <span>{props.footer.lang}</span></h4>
        </div>
    )
}

export default Footer