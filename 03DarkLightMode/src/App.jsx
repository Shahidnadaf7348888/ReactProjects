
import { useState } from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'

function App() {
  const [mode, setMode] = useState('light')
  const [textMode, setTextMode] =useState('Dark Mode')

  const modBtn= ()=>{
    if(mode === 'light'){
      setMode('dark')
      setTextMode('Light Mode')
    }
    else{
      setMode('light')
      setTextMode('Dark Mode')
    }
  }
  return (
    <>
      <Navbar modBtn={modBtn} mode={mode} textMode={textMode}  />
      <Home mode={mode} />
    </>
  )
}

export default App
