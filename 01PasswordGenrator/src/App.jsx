import { useCallback, useEffect, useState , useRef} from 'react'
import './App.css'

function App() {

  const [password, setPassword] = useState({})
  const [Length, setLength] = useState(8)

  const [numberAllowd, setnumberAllowd] = useState(false)
  const [charector, setCharector] = useState(false)

  const PasswordGenrator= useCallback(()=>{
    let pass = ''
    let str = 'ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numberAllowd) str += '1234567890';
    if(charector) str += '!@#$%^&*()_+-={}[]|<>/?:;'

    for (let i = 0; i < Length; i++) {
      let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[Length, numberAllowd, charector])

useEffect(()=>{
  PasswordGenrator()
},[PasswordGenrator, Length, numberAllowd, charector])

//useReff

const passRef = useRef(null)

const CoppyBtn =useCallback(()=>{
  passRef.current?.select()
  navigator.clipboard.writeText(password)
},[password])

  return (
  <>
    <h1 className='text-light'>Password Genrator</h1>
    <div className="p-5 bg-dark ">
      <div className="input-group">
      <input type="text" className='form-control' placeholder='Password Genrator'  value={password} ref={passRef} />
      <div className="btn btn-success" onClick={CoppyBtn}>Copy</div>
      </div>
      <div className="input-group pt-3">
      <input type="range" className='me-2'  value={Length} onChange={(e)=> {setLength(e.target.value)}}/>
      <label htmlFor="" className='me-2 text-light'>Length :{Length}</label> 
      
      <input type="checkBox" className='me-2'  
      onChange={()=>{setnumberAllowd((prev)=> !prev)
      }} />
      <label htmlFor="" className='me-2 text-light'>number</label>
     
      <input type="checkBox" className='me-2' 
      onChange={()=>{setCharector((prev)=> !prev)
      }}
      />
      <label htmlFor="" className='me-2 text-light'>Charector</label> 
      </div>
    </div>
  </>
  )
}

export default App
