import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; 
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        <nav className="header1">
          <div className="logo">
            <img src="/HeaderAssests/logo.png" alt="CITY PULSE" />
            <h2>CityPulse</h2>
          </div>
          <div className={`navlinks ${menuOpen ? "open" : ""}`}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/guide">Guide</Link></li>
              <li><Link to="/packages">Packages</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </nav>

        <nav className="header2">
          <div className="links">
            <ul className="contactlinks">
              <li>📞 +91 8888888888</li>
              <li>✉️ CityPluse_Tour@gmail.com</li>
              <li>🕒 Mon - Fri: 9AM - 6PM</li>
            </ul>
            <div className="signupdetails">
              <button>Signup</button>
              <button>SignIn</button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
