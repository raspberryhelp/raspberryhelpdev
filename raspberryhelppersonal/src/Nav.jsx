import React from 'react'
import { Link, Links } from "react-router-dom";
import click from './assets/navtouch.wav';

function Nav() {


  const playClickSound = () => {
    const audio = new Audio(click);
    audio.volume = 0.3;
    audio.play();
};

  return (
    <div className="navigation-bar">
      <Link to="/"onClick={playClickSound}>About</Link>
      <Link to="/Projects"  onClick={playClickSound}>Projects</Link>
      <Link to="/Tools"  onClick={playClickSound}>Tools</Link>
      <Link to="/Blog"  onClick={playClickSound}>Blog</Link>
      <Link to="/Art" onClick={playClickSound}>Art</Link>
      <Link to="/Widgets" onClick={playClickSound}>Widgets</Link>
    </div>
  )
}

export default Nav