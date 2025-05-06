import React from 'react'
import { Link, Outlet } from 'react-router-dom';
const Header = () => {
  return (
    <>
    <header className="header-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <div className="logo">
              <Link to="/"><img src="/img/logo.png" alt="logo" /></Link>
            </div>
          </div>
          <div className="col-lg-6">
            <nav className="nav-menu">

            <div className='adm'>
    <a href='/admin'>ADMIN LOGIN</a>
  </div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/classes">Classes</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/team">Profile</Link></li>
                <li><Link to="/contact">Contact</Link></li>
             
                
                
              </ul>
            </nav>
            
          </div>
         
        </div>
      </div>
    </header>

    <Outlet/>


    

    
    </>
  );
};

export default Header;
