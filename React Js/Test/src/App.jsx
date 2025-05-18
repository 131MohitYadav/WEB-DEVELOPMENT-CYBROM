import {  Routes, Route } from 'react-router-dom';
import './App.css';
// import './Flaticon.css'
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Classes from './pages/Classes';
import Services from './pages/Services';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Proudct from './Proudct';
import Login from './pages/Login';




function App() {
  return (
    <>
      <Header />
      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Proudct />} />

      </Routes>
    </>
  );
}

export default App;
