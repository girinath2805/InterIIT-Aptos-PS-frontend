import React from 'react'
import {Navbar,Stream,RevenueHistory} from '../components'
import { Routes,Route, useLocation} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const StreamerHome = () => {
  let location = useLocation();

  return (
    <div className='gradient-bg-welcome h-screen overflow-auto'>
      <Navbar/>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="page"
          timeout={300}
        >
          <Routes location={location}>
            <Route path='stream' element={<Stream/>}/>
            <Route path='revenuehistory' element={<RevenueHistory/>}/>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      {location.pathname === "/home" && (
        <div className='text-white'>
            dashboard
        </div>
      )}
    </div>
  )
}

export default StreamerHome
