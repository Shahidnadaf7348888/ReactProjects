import React from 'react'

function NavBar({Mode, BtnMode, TextMode,ModeTe}) {
  return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-${Mode} bg-${Mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Cars</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse  navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Setting</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Contact</a>
        </li>
      </ul>
        <div className="form-check form-switch">
            <input type="checkbox" onClick={BtnMode} className='form-check-input ' id='flexSwitchCheckDefault' />
           <label htmlFor="flexSwitchCheckDefault" className={`form-check-lable text-${TextMode} `}>{ModeTe}</label>
        </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar