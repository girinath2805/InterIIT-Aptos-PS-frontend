import React from 'react'
import {Navbar,Stream,RevenueHistory,StreamerDash} from '../components'
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
          <div style={{ minHeight: '100vh', overflowY:'auto' }}>
            <Routes location={location}>
              <Route path='home' element={<StreamerDash/>}/>
              <Route path='stream' element={<Stream/>}/>
              <Route path='revenuehistory' element={<RevenueHistory/>}/>
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default StreamerHome
