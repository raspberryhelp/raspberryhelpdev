import React, { useState } from 'react'
import { Link } from "react-router-dom";
import click from './assets/navtouch.wav';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const playClickSound = () => {
    const audio = new Audio(click);
    audio.volume = 0.3;
    audio.play();
  };

  const handleLinkClick = () => {
    playClickSound();
    setMenuOpen(false);
  };

  return (
    <div className="navigation-bar">
      <div className="nav-links">
        <Link to="/" onClick={handleLinkClick}>About</Link>
        <Link to="/Projects" onClick={handleLinkClick}>Projects</Link>
        <Link to="/Tools" onClick={handleLinkClick}>Tools</Link>
        <Link to="/Blog" onClick={handleLinkClick}>Blog</Link>
        <Link to="/Art" onClick={handleLinkClick}>Art</Link>
        <Link to="/Widgets" onClick={handleLinkClick}>Widgets</Link>
      </div>

      <button
        className="nav-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={handleLinkClick}>About</Link>
          <Link to="/Projects" onClick={handleLinkClick}>Projects</Link>
          <Link to="/Tools" onClick={handleLinkClick}>Tools</Link>
          <Link to="/Blog" onClick={handleLinkClick}>Blog</Link>
          <Link to="/Art" onClick={handleLinkClick}>Art</Link>
          <Link to="/Widgets" onClick={handleLinkClick}>Widgets</Link>
        </div>
      )}
    </div>
  );
}

export default Nav