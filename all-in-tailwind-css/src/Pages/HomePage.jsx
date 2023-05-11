import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

function HomePage() {
  return (
    <div className='bg-slate-50'>
        <Navbar/>
        <Outlet/>
        
      
    </div>
  )
}

export default HomePage
