import React from 'react'
import {Navbar,Stream,RevenueHistory} from '../components'
import { Routes,Route} from 'react-router-dom'

const StreamerHome = () => {
  return (
    <div className='gradient-bg-welcome h-screen bg-fixed'>
      <Navbar/>
      <Routes>
        <Route path='stream' element={<Stream/>}/>
        <Route path='revenuehistory' element={<RevenueHistory/>}/>
      </Routes>
      {location.pathname === "/home" && (
        <div className='text-white'>
            hi
        </div>
      )}
    </div>
  )
}

export default StreamerHome
