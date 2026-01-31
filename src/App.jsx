import React from 'react'
import './App.scss'
import Dock from './Components/Dock'
import Nav from './Components/Nav'
import MacWindow from './Components/Windows/MacWindow'
import Github from './Components/Windows/Github'



const App = () => {
  return (
  <main>
    <Nav />
<Dock />
{/* <MacWindow><p>Hello</p></MacWindow> */}
<Github />
  </main>
  )
}

export default App