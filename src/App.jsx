import './App.css'

import Main from './pages/Main'
import Room from './pages/Room'
import { Routes, Route } from 'react-router-dom'
import SocketProvider, { useSocket } from './context/SocketProvider'
import { useEffect, useState } from 'react'
import api from './services/api'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/room/:roomId" element={<Room />} />
      </Routes>
    </>
  )
}

export default App
