import "./Nav.scss";
import DateandTime from "./DateandTime";

import React from 'react'

const Nav = () => {
  return (
    <nav>
<div className="left">
    <div className="apple-icons">
        <img src="public\navbar-icons\apple.svg" alt="apple-icons" />
    </div>
    <div className="nav-items">
        <p>Rohit Pandey</p>

    </div>
    <div className="nav-items">
        <p>File</p>
        
    </div><div className="nav-items">
        <p>Window</p>
        
    </div>
    <div className="nav-items">
        <p>Terminal</p>
        
    </div>
</div>
<div className="right">
<div className="nav-icon">
    <img src = "public\navbar-icons/wifi.svg"></img>
</div>
<div className="nav-items"> 
    <DateandTime />
</div>
</div>



    </nav>
  )
}

export default Nav