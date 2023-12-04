import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Signin, Signup, ListenerHome, StreamerHome, ListenerArtist, ListenerLive } from './container'
import { CurrentSongProvider } from "./customHooks/CurrentSongContext"

const App = () => {
  return (
    <CurrentSongProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/listener/home' element={<ListenerHome />} />
          <Route path='/streamerhome/*' element={<StreamerHome />} />
          <Route path='/listener/artist' element={<ListenerArtist />} />
          <Route path='/listener/livestream' element={<ListenerLive />} />
        </Routes>
      </BrowserRouter>
    </CurrentSongProvider>
  )
}

export default App
