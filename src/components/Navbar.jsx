import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>

      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>
            MAIN
          </Link>
        </li>
        <li>
          <Link to="/gallery" onClick={() => setIsOpen(false)}>
            GALLERY
          </Link>
        </li>
        <li>
          <Link to="/project" onClick={() => setIsOpen(false)}>
            PROJECT
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>
            CERTIFICATIONS
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>
            CONTACTS
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
