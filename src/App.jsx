import React, { useState } from 'react'
import './App.scss'
import Dock from './Components/Dock'
import Nav from './Components/Nav'
import MacWindow from './Components/Windows/MacWindow'
import Github from './Components/Windows/Github'

const App = () => {
  const [openWindows, setOpenWindows] = useState({
    github: true,
    spotify: false,
    calendar: false,
    cli: false,
    lick: false,
    mail: false,
    notes: false,
    pdf: false,
  })

  const handleIconClick = (windowName) => {
    setOpenWindows(prev => ({
      ...prev,
      [windowName]: !prev[windowName]
    }))
  }

  const handleCloseWindow = (windowName) => {
    setOpenWindows(prev => ({
      ...prev,
      [windowName]: false
    }))
  }

  const getWindowTitle = (windowName) => {
    const titles = {
      github: 'GitHub Projects',
      spotify: 'Spotify',
      calendar: 'Calendar',
      cli: 'Terminal',
      lick: 'Lick',
      mail: 'Mail',
      notes: 'Notes',
      pdf: 'PDF Viewer',
    }
    return titles[windowName] || windowName
  }

  return (
    <main>
      <div className="background-effects">
        <div className="stars"></div>
        <div className="nebula nebula-1"></div>
        <div className="nebula nebula-2"></div>
        <div className="nebula nebula-3"></div>
        <div className="shooting-star"></div>
        <div className="cosmic-dust"></div>
      </div>
      <Nav />
      <Dock onIconClick={handleIconClick} openWindows={openWindows} />
      
      {openWindows.github && (
        <Github onClose={() => handleCloseWindow('github')} />
      )}
      
      {openWindows.spotify && (
        <MacWindow 
          title={getWindowTitle('spotify')}
          onClose={() => handleCloseWindow('spotify')}
        >
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h2>Spotify</h2>
            <p>Music player coming soon...</p>
          </div>
        </MacWindow>
      )}
      
      {openWindows.calendar && (
        <MacWindow 
          title={getWindowTitle('calendar')}
          onClose={() => handleCloseWindow('calendar')}
        >
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h2>Calendar</h2>
            <p>Calendar view coming soon...</p>
          </div>
        </MacWindow>
      )}
      
      {openWindows.cli && (
        <MacWindow 
          title={getWindowTitle('cli')}
          onClose={() => handleCloseWindow('cli')}
        >
          <div style={{ padding: '2rem', fontFamily: 'monospace' }}>
            <p>$ Terminal</p>
            <p>Welcome to the terminal!</p>
            <p>$ _</p>
          </div>
        </MacWindow>
      )}
      
      {openWindows.lick && (
        <MacWindow 
          title={getWindowTitle('lick')}
          onClose={() => handleCloseWindow('lick')}
        >
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h2>Lick</h2>
            <p>Lick application coming soon...</p>
          </div>
        </MacWindow>
      )}
      
      {openWindows.mail && (
        <MacWindow 
          title={getWindowTitle('mail')}
          onClose={() => handleCloseWindow('mail')}
        >
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h2>Mail</h2>
            <p>Email client coming soon...</p>
          </div>
        </MacWindow>
      )}
      
      {openWindows.notes && (
        <MacWindow 
          title={getWindowTitle('notes')}
          onClose={() => handleCloseWindow('notes')}
        >
          <div style={{ padding: '2rem' }}>
            <h2>Notes</h2>
            <textarea 
              style={{ 
                width: '100%', 
                height: '200px', 
                background: 'transparent', 
                color: 'inherit',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '0.5rem',
                padding: '1rem'
              }}
              placeholder="Start typing your notes..."
            />
          </div>
        </MacWindow>
      )}
      
      {openWindows.pdf && (
        <MacWindow 
          title={getWindowTitle('pdf')}
          onClose={() => handleCloseWindow('pdf')}
        >
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h2>PDF Viewer</h2>
            <p>PDF viewer coming soon...</p>
          </div>
        </MacWindow>
      )}
    </main>
  )
}

export default App