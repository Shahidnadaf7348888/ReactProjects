import React, { useState } from "react"
import NavBar from "./Components/NavBar"
import Card from "./Components/Card"

function App() {

  let [Mode, setMode] = useState('dark')
  let [TextMode, setTextMode]= useState('dark')

  let [ModeTe, setModeTe]= useState('Dark')

  const BtnMode=()=>{
    if(Mode === 'dark'){
      setMode('light')
      setTextMode('dark')
      setModeTe('Dark')
    }
    else{
      setMode('dark')
      setTextMode('light')
      setModeTe('Light')
    }
  }


  return (
    <>
      <NavBar BtnMode={BtnMode} Mode={Mode} TextMode={TextMode} ModeTe={ModeTe}/>

    <div className={` container d-flex justify-content-center bg-${Mode} p-5 mt-5 `}>
      <Card headder="Car" img='https://images.unsplash.com/photo-1555652736-e92021d28a10?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXVkaXxlbnwwfHwwfHx8MA%3D%3D' 
        BtnClr='dark'/>
      <Card headder="Car" img='https://images.unsplash.com/photo-1555652736-e92021d28a10?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXVkaXxlbnwwfHwwfHx8MA%3D%3D' 
        BtnClr='dark'/>
      <Card headder="Car" img='https://images.unsplash.com/photo-1555652736-e92021d28a10?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXVkaXxlbnwwfHwwfHx8MA%3D%3D' 
        BtnClr='dark'/>
        </div>
       
    </>
    
  )
}

export default App
