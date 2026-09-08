import React from 'react'
import { Link, Links } from "react-router-dom";
function Nav() {
  return (
    <div class = "navigation-bar">
        <Link to ="/">About</Link>
        <Link to ="/Projects">Projects</Link>
        <Link to ="/Tools">Tools</Link>
        <Link to ="/Blog">Blog</Link>
        <Link to ="/Art">Art</Link>
        <Link to ="/Widgets">Widgets</Link>

    </div>
  )
}

export default Nav