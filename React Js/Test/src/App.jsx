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

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/' || location.pathname === '/login';

  return (
    <>
      {!isLoginPage && <Header />}

      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Proudct />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
