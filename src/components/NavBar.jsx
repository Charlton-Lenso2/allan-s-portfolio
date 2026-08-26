import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./NavBar.css";
import avatarImg from "../assets/logoAS-white.png";

const SCROLL_IDLE_MS = 250;

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const idleTimerRef = useRef(null);
  const closeMenu = () => setIsOpen(false);

  // Brand swap: while the visitor scrolls, the name gives way to the round
  // profile photo; ~250ms after scrolling stops it eases back to the name.
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      if (Math.abs(window.scrollY - lastY) < 2) return;
      lastY = window.scrollY;
      setIsScrolling(true);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(
        () => setIsScrolling(false),
        SCROLL_IDLE_MS
      );
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="navsection">
        <h1 className="name">
          <Link
            to="/"
            onClick={closeMenu}
            className={isScrolling ? "brand avatarMode" : "brand"}
            aria-label="Allan Skonce — home"
          >
            <span className="brandName">Allan Skonce</span>
            <img
              className="brandAvatar"
              src={avatarImg}
              alt=""
              aria-hidden="true"
            />
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
