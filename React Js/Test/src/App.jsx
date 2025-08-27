import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Classes from './pages/Classes';
import Services from './pages/Services';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Proudct from './Proudct';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import Appoint1 from './pages/Appoint1';
import Fetchapi1 from './pages/Fetchapi1';


function App() {
  const location = useLocation();

  // Hide Header on login/register pages
  const isAuthPage =
    location.pathname === '/' ||
    location.pathname === '/login' ||
    location.pathname === '/register';

  return (
    <>
      {!isAuthPage && <Header />}

      <Routes>
        <Route path="/" element={<Register />} />        
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/about-us" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Proudct />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path='/appoint1' element={<Appoint1 />} />
        <Route path='/fetchapi1' element={<Fetchapi1 />} />

      </Routes>
    </>
  );
}

export default App;
