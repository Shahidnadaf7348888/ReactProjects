import { useContext, useState } from "react"
import UserContext from "../Context/UserContext"

function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)
    let handlerSubmit= (e)=>{
        e.preventDefault()
        setUser({userName, password})
      }
      console.log(userName)
  return (
    <div className="container ">
        <div className="form-control p-4 " style={{width : '20rem',boxShadow : '1px 2px 5px black'}}>
        <div className="h1">Login</div>
        <input type="text" className="form-control m-2" placeholder='User Name' 
        value={userName} onChange={(e)=> setUserName(e.target.value)} />

        <input type="text" className="form-control m-2" placeholder='Password' 
        value={password} onChange={(e)=> setPassword(e.target.value)}   />
        <button className="btn btn-outline-success" onClick={handlerSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default Login