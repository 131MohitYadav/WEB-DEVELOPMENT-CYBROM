import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';
import { useState } from 'react';



function App() {

 let [count,setCount] = useState(0)

    function decr(){
        if ( count > 0){
            setCount(count - 1)
        }
    }

  return (
    <>
    <Navbar expand="lg" className="navi">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
<div className="head1">
  
<h1>Hello Welcome to Test</h1>

<img src="image.jpg"  />

</div>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, officiis perferendis! Cum ad facere, sapiente nostrum nisi eum minima expedita. Provident saepe deserunt quas fuga hic praesentium doloremque vero optio.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti necessitatibus odit distinctio! Vel, officiis delectus qui beatae dolorum commodi quis praesentium! Accusantium quas laborum nihil ratione dolore tempora voluptatum perspiciatis?
</p>


<h1>Increment and decrement</h1>
    <h2>{count}</h2>

<button onClick={()=>{setCount(count + 1)}}>Inc</button>
<button onClick={decr}>Dec</button>
<button onClick={()=>{setCount(0)}}>Res</button>

<footer>
    <ul>
        <li>home</li>
        <li>about</li>
        <li>contact</li>
        <li>list</li>
    </ul>

    <ul>
        <li>home</li>
        <li>about</li>
        <li>contact</li>
        <li>list</li>
    </ul>
    <ul>
        <li>home</li>
        <li>about</li>
        <li>contact</li>
        <li>list</li>
    </ul>
</footer>
    
    </>

    
    
  );
}

export default App;