
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Fetchapi from './Fetchapi'
import Insert from './Insert'



function App() {


  return (
    <>

<Routes>
      <Route index element={<Insert/>}/>
      <Route path="/fetchapi" element={<Fetchapi/>}/>
    </Routes>


    </>
  )
}

export default App
