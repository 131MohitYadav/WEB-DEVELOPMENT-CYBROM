import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
   <>

   <nav>
    <div className='navbar'>
<h1>LOGO</h1>
<ul>
    <li><Link style={{textDecoration:"none"}} to="/"> </Link>Home</li>
    <li><Link style={{textDecoration:"none"}} to="/about"> </Link>About</li>
    <li><Link style={{textDecoration:"none"}} to="/contact"> </Link>Contact</li>
    {/* <li><Link style={{textDecoration:'none'}} to="/"> </Link>Home</li> */}
</ul>

    </div>
   </nav>

   <Outlet/>
   <footer>
    <ul>
        <li>home</li>
        <li>aajfd</li>
        <li>adfa</li>
        <li>adfafa</li>
    </ul>
   </footer>
   
   </>
  )
}

export default Navbar
