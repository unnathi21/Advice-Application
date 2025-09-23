import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.Advicelogo} alt="" width="100" height="100"/>
                <p></p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon}alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon}alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Advices</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
        
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>6305694907</li>
                <li>daminibikki@gmail.com</li>
                </ul>
        </div>
        </div>
    
        <hr />
    <p className="footer-copyright">Copyright 2025 © Advice.com - All rights Reserved</p>
    </div>
    
  )
}

export default Footer