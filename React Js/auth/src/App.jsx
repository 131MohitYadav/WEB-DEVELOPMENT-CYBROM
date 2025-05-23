import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Sign from './Sign'
import Login from './Login'
import Home from './Home'


function App() {
  

  return (
    <>
    <Routes>
      <Route index element={<Sign/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>

    </>
  )
}

export default App
