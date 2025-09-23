import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
const Navbar = ({setShowLogin}) => {
  const [Advices, setAdvices] = useState("home");
  return (
    <div className="navbar">
      <img src={assets.Advicelogo} alt="logo" className="logo" width={100} height={100} />
      <ul className="navbar-Advices">
        <Link to='/' onClick={() => setAdvices("Home")} className={Advices === "Home" ? "active" : ""}>Home</Link>
        <a href="#explore-Advice" onClick={() => setAdvices("Advices")} className={Advices === "Advices" ? "active" : ""}>Advices</a>
        <a href="#app-download" onClick={() => setAdvices("Mobile-app")} className={Advices === "Mobile-app" ? "active" : ""}>Mobile-app</a>
        <a href="#footer" onClick={() => setAdvices("Contact-us")} className={Advices === "Contact-us" ? "active" : ""}>Contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in </button>
      </div>
    </div>
  )
}

export default Navbar
