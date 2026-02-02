import "./Nav.scss";
import DateandTime from "./DateandTime";
import React from 'react'

const Nav = () => {
  return (
    <nav>
      <div className="nav-left">
        <div className="apple-logo">
          <img src="/navbar-icons/apple.svg" alt="Apple" />
        </div>
        
        <div className="menu-section">
          <div className="menu-item">
            <span className="menu-label">Rohit Pandey</span>
          </div>
        </div>

        <div className="menu-section">
          <div className="menu-item">
            <span className="menu-label">File</span>
          </div>
          <div className="menu-item">
            <span className="menu-label">Edit</span>
          </div>
          <div className="menu-item">
            <span className="menu-label">View</span>
          </div>
          <div className="menu-item">
            <span className="menu-label">Window</span>
          </div>
          <div className="menu-item">
            <span className="menu-label">Help</span>
          </div>
        </div>
      </div>

      <div className="nav-right">
        <div className="status-icons">
          <div className="status-item" title="Wi-Fi">
            <img src="/navbar-icons/wifi.svg" alt="Wi-Fi" />
          </div>
        </div>
        
        <div className="date-time-wrapper">
          <DateandTime />
        </div>
      </div>
    </nav>
  )
}

export default Nav