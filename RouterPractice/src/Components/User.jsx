import { useParams } from "react-router-dom"

function User() {
    const {userid} = useParams()
  return (
    <div className="container-fluid bg-success text-center "  style={{padding : '15rem 0'}}>
    <div className="h1"> UserName : {userid.toLocaleUpperCase()} </div>
    </div>
  )
}

export default User