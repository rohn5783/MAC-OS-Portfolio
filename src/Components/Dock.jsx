import React from "react";
import "./dock.scss";

const Dock = ({ onIconClick, openWindows = {} }) => {
  const dockIcons = [
    { id: 'spotify', name: 'Spotify', icon: '/doc-icons/Assets/spotify.svg' },
    { id: 'calendar', name: 'Calendar', icon: '/doc-icons/Assets/calendar.svg' },
    { id: 'cli', name: 'Terminal', icon: '/doc-icons/Assets/cli.svg' },
    { id: 'github', name: 'GitHub', icon: '/doc-icons/Assets/github.svg' },
    { id: 'lick', name: 'Link', icon: '/doc-icons/Assets/lick.svg' },
    { id: 'mail', name: 'Mail', icon: '/doc-icons/Assets/mail.svg' },
    { id: 'notes', name: 'Notes', icon: '/doc-icons/Assets/notes.svg' },
    { id: 'pdf', name: 'PDF Viewer', icon: '/doc-icons/Assets/pdf.svg' },
  ];

  return (
    <footer className="dock">
      {dockIcons.map((item) => (
        <div
          key={item.id}
          className={`dock-icon ${item.id} ${openWindows[item.id] ? 'active' : ''}`}
          onClick={() => onIconClick(item.id)}
          title={item.name}
        >
          <div className="icon-glass">
            <img src={item.icon} alt={item.name} />
          </div>
          {openWindows[item.id] && <div className="active-indicator"></div>}
        </div>
      ))}
    </footer>
  );
};

export default Dock;
