import React from 'react'
import ReactDOM from 'react-dom/client'
import Leyaote from './Leyaote'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { About, Home, Contact ,GitHub, User} from './Components'
import { GithubInfolder } from './Components/GitHub'


const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Leyaote/>} >
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='github' element={<GitHub/>}
          loader={GithubInfolder}
        />
        <Route path='user/:userid' element={<User/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
