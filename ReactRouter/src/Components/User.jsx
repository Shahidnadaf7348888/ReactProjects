// import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userid} = useParams()
    
  return (
    <>
        <h1 className='text-center font-bold text-3xl p-12 bg-gray-600 text-white '>User : {userid.toUpperCase()}</h1>
    </>
  )
}

export default User