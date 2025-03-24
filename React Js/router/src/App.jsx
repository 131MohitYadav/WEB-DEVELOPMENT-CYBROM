
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from "./Home"
import About from "./About"
import Services from "./Services"
import Contact from "./Contact"
import Profile from "./Profile"
import Navbar from './Navbar'



function App() {
 

  return (
    <>

    {/* First Method called */}
    
    {/* <Navbar/>
<Routes>
  <Route index element={<Home />}/>
  <Route path="/about" element={<About />}/>
  <Route path="/service" element={<Services/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/profile" element={<Profile />}/>
  
</Routes> */}



<Routes>
  <Route path="/" element = {<Navbar/>} >
  <Route index element={<Home />}/>
  <Route path="/about" element={<About />}/>
  <Route path="/service" element={<Services/>}/>

  <Route path="/contact" element={<Contact/>}/>
  <Route path="/profile" element={<Profile />}/>
  </Route>
  
</Routes>
    </>
  )
}

export default App
