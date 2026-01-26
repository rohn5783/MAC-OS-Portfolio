import React from "react";
import "./dock.scss";
const Dock = () => {
  return (
    <footer className="dock">
      <div className="icon spotify">
        <img src="\doc-icons\Assets\spotify.svg" alt="icon" />
      </div>
      <div className="icon calendar">
        <img src="\doc-icons\Assets\calendar.svg" alt="icon" />
      </div>
      <div className="icon cli">
        <img src="\doc-icons\Assets\cli.svg" alt="icon" />
      </div>
      <div className="icon github">
        <img src="\doc-icons\Assets\github.svg" alt="icon" />
      </div>
      <div className="icon lick">
        <img src="\doc-icons\Assets\lick.svg" alt="icon" />
      </div>
      <div className="icon mail">
        <img src="\doc-icons\Assets\mail.svg" alt="icon" />
      </div>
      <div className="icon notes">
        <img src="\doc-icons\Assets\notes.svg" alt="icon" />
      </div>
      <div className="icon pdf">
        <img src="\doc-icons\Assets\pdf.svg" alt="icon" />
      </div>
    </footer>
  );
};

export default Dock;
