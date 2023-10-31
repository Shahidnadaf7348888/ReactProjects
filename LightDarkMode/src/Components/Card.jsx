import React from 'react'

function Card({img, headder= "Undefined", BtnClr= 'danger'}) {
  return (
    <div className="p-2 container">
    <div className="card" style={{width : "18rem"}}>
      <img src={img} alt="" />
    <div className="card-body">
      <h5 className="card-titel">{headder}</h5>
      <div className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
      <div className={`btn btn-${BtnClr} my-2`}>Click Me</div>
    </div>
    
    </div>
  </div>
  )
}

export default Card