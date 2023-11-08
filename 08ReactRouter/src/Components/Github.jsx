// import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  return (
    <>
          <div className="flex justify-center p-12 ">
          <img width={100} src="data:image/png;base64,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" alt="" />
          <h1 className=' p-4 text-5xl'>Github</h1>
          </div>
        <div className="text-center flex ps-5  ">
        <img className='p-10 rounded-full ' src={data.avatar_url} alt="" width={300} />
        <div className='pt-12 mt-8'>
        <h1 className='p-4 text-3xl '>User Id : {data.login}</h1>
        <h1 className='text-2xl '>GitHub Followers : {data.followers}</h1>
        </div>
        </div>
    </>
  )
}

export default Github

export const GithubInfolder = async ()=>{
  const respon= await fetch('https://api.github.com/users/Shahidnadaf7348888')
  return respon.json()
}