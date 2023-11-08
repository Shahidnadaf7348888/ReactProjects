// import { useCallback, useEffect, useState } from "react"
import { useLoaderData } from 'react-router-dom'

function GitHub() {

  const data = useLoaderData()
  
// const [data, setData] = useState([])

//   const fetchData= useCallback(()=>{
//       fetch('https://api.github.com/users/Shahidnadaf7348888')
//       .then((res)=> res.json())
//       .then ((data)=> setData(data))
//   },[])

//   useEffect(()=>{
//     fetchData()
//   },[fetchData])


  return (
    <>
    <div className="container-fluid bg-secondary  text-center "  style={{padding : '0rem 0px 15rem 0px'}}>
      <div className="h1 p-5 ">GitHub Section</div>
      <div className="container d-flex justify-center ">
         <img src={data.avatar_url} alt="" width={300} style={{boxShadow :'.1px .1px 10px black'}} />
       
        <div className=" p-5">
         <h3 className="">User Name : {data.login}</h3>
       
         <div className="d-flex ps-5">
          <h4 className='me-2'>Followers : {data.followers}</h4>
          <h4>Following : {data.following}</h4>
        </div>

         </div>
      </div>
    </div>
    </>
  )
}

export default GitHub

export const GithubInfolder= async ()=>{
    const resp= await fetch("https://api.github.com/users/Shahidnadaf7348888")
    return resp.json()
}