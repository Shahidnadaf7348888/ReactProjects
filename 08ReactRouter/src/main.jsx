import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import {Home, About, Contact,User, Github } from './Components'
import { GithubInfolder } from './Components/Github'


// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout/>,
//     children : [
//       {
//         path : '',
//         element : <Home/>,
//      },
//     {
//         path : 'about',
//         element : <About/>
//     },
//     {
//       path : 'contact',
//       element : <Contact/>
//     }
//   ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout/>}>
      <Route path='' element= {<Home/>} />
      <Route path='about' element= {<About/>} />
      <Route path='contact' element= {<Contact/>} />
      <Route path='user/:userid' element={<User/>}/>
      <Route 
      loader={GithubInfolder}
      path='github' 
      element ={<Github/>}
      />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
