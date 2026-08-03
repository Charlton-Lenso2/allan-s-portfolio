import { Link } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="navbar">
      <div className="navsection">
        <h1 className="name">
          <Link to="/" onClick={closeMenu}>
            Allan Skonce
          </Link>
        </h1>

        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="contact-pill" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
