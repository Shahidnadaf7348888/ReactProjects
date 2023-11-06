
function Navbar({mode, modBtn,textMode }) {
    
  return (
    <>
    <div className="container-fluide ">
    <nav className={`navbar navbar-expand-lg navbar-${mode}  bg-${mode} ps-4 `}  >
    <a className="navbar-brand" href="#">Muskan</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Menu</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
            </li>
        </ul>
    </div>
    <div className={` form-check form-switch pe-3  text-${mode === 'dark' ? 'light' : 'dark'}`}>
        <input className='form-check-input' onClick={modBtn} type="checkbox" id="flexSwitchCheckChecked" />
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked" >{textMode}</label>
    </div>
</nav>

    </div>
    </>
  )
}

export default Navbar