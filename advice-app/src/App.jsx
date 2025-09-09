import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Emotional from "./pages/Emotional.jsx";
import Financial from "./pages/Financial.jsx";
import Food from "./pages/Food.jsx";
import Transport from "./pages/Transport.jsx";
import Travel from "./pages/Travel.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emotional" element={<Emotional />} />
        <Route path="/financial" element={<Financial />} />
        <Route path="/food" element={<Food />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
