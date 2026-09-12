import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import click from './assets/navtouch.wav';

  function useTheme() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, setTheme];
}
function ThemeToggle() {
  const [theme, setTheme] = useTheme();
  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? '☀' : '☾'}
    </button>
  );
}

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
      <ThemeToggle/>
    </div>
  );
}

export default Nav