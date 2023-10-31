import { useState } from 'react'
import './App.css'

function App() {
  const [counter , setCount] = useState(10)

  const AddValue=()=>{
    if(counter < 20){
      setCount(counter+ 1)
    }
  }

  const RemoveValue =()=>{
    if(counter > 0 ){
      setCount(counter - 1)
    }
  }
  return (
    <>
    <h1>Chai aur code </h1>
    <h2>Counter Value : {counter}</h2>


    <button onClick={AddValue}>Add Value {counter}</button>
    <button onClick={RemoveValue}>Remove Vlaue {counter}</button>
    </>
  )
}

export default App
