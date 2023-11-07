import { Link, NavLink } from "react-router-dom"

function Headder() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to={''}>Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <NavLink to={''} className={({isActive})=> ` ${isActive ? 'text-success':'text-dark'} nav-link active`} 
          aria-current="page" href="#">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to={'about'} className={({isActive})=> `${isActive? 'text-primary':'text-drak'} nav-link active`} aria-current="page" href="#">About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to='github' className={({isActive})=> `${isActive ? 'text-danger':'text-dark'} nav-link active`} aria-current="page" href="#">GitHub</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to={'contact'} className={({isActive})=>
          `${isActive? 'text-warning':'text-dark'} nav-link active`} aria-current="page" href="#">Contact</NavLink>
        </li>

      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Headder