import { Route, Routes } from 'react-router-dom'
import './App.css'
import Appoint from './Appoint'
import Fetchapi from './Fetchapi'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Appoint />} />
        <Route path="/fetchapi" element={<Fetchapi1 />} />
      </Routes>
    </>
  )
}

export default App
