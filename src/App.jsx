import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Home,Signin,Signup,ListenerHome } from './container'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/listener/home' element={<ListenerHome/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

