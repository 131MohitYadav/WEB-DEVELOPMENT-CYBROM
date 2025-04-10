import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Sign from './Sign'
import Login from './Login'

function App() {
  

  return (
    <>
    <Routes>
      <Route index element={<Sign/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>

    </>
  )
}

export default App
