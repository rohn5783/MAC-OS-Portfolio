import React from "react";
import { Rnd } from "react-rnd";
import "./MacWindow.scss";
const MacWindow = ({ children, onClose, title = "Rohit Pandey -zsh" }) => {
  return (
    <Rnd
    default={{
      width:"40vw",
      height:"40vh",
      x:"300",
      y:"200"
    }}
    minWidth={300}
    minHeight={200}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div className="dot red" onClick={onClose} title="Close">
              <span className="dot-icon">×</span>
            </div>
            <div className="dot yellow" title="Minimize">
              <span className="dot-icon">−</span>
            </div>
            <div className="dot green" title="Maximize">
              <span className="dot-icon">+</span>
            </div>
          </div>
          <div className="title">
            <p>{title}</p>
          </div>
        </div>
        <div className="main-content">
            {children}
        </div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
