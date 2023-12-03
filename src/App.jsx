import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signin, Signup, ListenerHome, StreamerHome, ListenerArtist } from './container'
import { Error404 } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/listener/home' element={<ListenerHome />} />
        <Route path='/streamer/*' element={<StreamerHome />} />
        <Route path='/listener/artist' element={<ListenerArtist />} />
        <Route path='*' element={<Error404/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
