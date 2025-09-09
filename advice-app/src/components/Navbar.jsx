import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Advice Hub</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/emotional">Emotional</Link></li>
        <li><Link to="/financial">Financial</Link></li>
        <li><Link to="/food">Food</Link></li>
        <li><Link to="/transport">Transport</Link></li>
        <li><Link to="/travel">Travel</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
