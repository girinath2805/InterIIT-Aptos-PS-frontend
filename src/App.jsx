import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signin, Signup, ListenerHome, StreamerHome, ListenerArtist, ListenerLive } from './container'
import { Error404 } from './components'
import { CurrentSongProvider } from "./customHooks/CurrentSongContext"

const App = () => {
  return (
    <CurrentSongProvider>
      <BrowserRouter>
        <Routes>
            <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/listener/home' element={<ListenerHome />} />
          <Route path='/streamer/*' element={<StreamerHome />} />
          <Route path='/listener/artist' element={<ListenerArtist />} />
          <Route path='/listener/livestream' element={<ListenerLive />} />
          <Route path='*' element={<Error404/>} />
      </Routes>
      </BrowserRouter>
    </CurrentSongProvider>
  )
}

export default App
