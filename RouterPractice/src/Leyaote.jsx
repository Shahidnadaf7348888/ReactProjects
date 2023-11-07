
import {Outlet} from 'react-router-dom'
import Footer from './Components/Footer'
import Headder from './Components/Headder'

function Leyaote() {
  return (
    <>
    <Headder/>
    <Outlet/>
    <Footer/>
    </>

  )
}

export default Leyaote