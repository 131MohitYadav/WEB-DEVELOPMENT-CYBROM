import { Link, Outlet } from 'react-router-dom';
import './App.css';


function Navbar(){
    return(
        <>
        <nav>
            <h1>LOGO</h1>
            <ul>
                <li> <Link style={{textDecoration : "none" }} to="/">Home </Link></li>
                <li> <Link style={{textDecoration : "none"}} to="/about">About </Link></li>
                <li> <Link style={{textDecoration :"none"}} to="/service">Services </Link></li>
                <li> <Link style={{textDecoration:"none"}} to="/contact">Contact </Link></li>
                <li> <Link style={{textDecoration: "none"}} to="/profile">Profile </Link></li>
                
            </ul>
        </nav>
        <Outlet/>

        <footer><h1>
            Hello This is Footer</h1></footer>
        </>
    )
}

export default Navbar