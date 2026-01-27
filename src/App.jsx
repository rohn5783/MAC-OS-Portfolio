import React from 'react'
import './App.scss'
import Dock from './Components/Dock'
import Nav from './Components/Nav'
import MacWindow from './Components/Windows/MacWindow'



const App = () => {
  return (
  <main>
    <Nav />
<Dock />
<MacWindow><p>Hello</p></MacWindow>
  </main>
  )
}

export default App