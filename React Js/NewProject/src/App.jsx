
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';



import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';



import Card from 'react-bootstrap/Card';



function App() {
  

  return (
    <>
        <Navbar expand="lg" className="nav">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Carousel>
      <Carousel.Item>
        <img src='image1.jpeg' width="100%" height="600px" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='image2.jpeg'  width="100%" height="600px" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='image3.jpeg'  width="100%" height="600px"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

<p className='cardd'> 
    <Card  style={{ width: '18rem'}}>
      <Card.Img variant="top" src="image1.jpeg" /> 
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    
    <Card className='cad' style={{ width: '18rem'}}>
      <Card.Img variant="top" src="image1.jpeg" /> 
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
    <Card className='cad' style={{ width: '18rem'}}>
      <Card.Img variant="top" src="image1.jpeg" /> 
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
</p>
    <hr />

    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis ut suscipit ea expedita id sit architecto quaerat ad. Nesciunt voluptatum eligendi, perferendis maiores numquam vero praesentium iure debitis. Veniam, quo!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex possimus quasi illum optio a voluptas placeat eaque sint voluptates labore est ratione iure hic non, ad quos eius soluta provident!
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa dolores labore iste in, dolor ea maiores pariatur consequatur vitae quam, sequi iusto ratione omnis natus, dicta corporis? Eaque, provident praesentium.
    </p>

    <footer>
      <ul>
        <li>HOlj</li>
        <li>jojdfs</li>
        <li>sfhhsfd</li>
        <li>lajfd</li>
      </ul>

      <ul>
        <li>HOlj</li>
        <li>jojdfs</li>
        <li>sfhhsfd</li>
        <li>lajfd</li>
      </ul>
      <ul>
        <li>HOlj</li>
        <li>jojdfs</li>
        <li>sfhhsfd</li>
        <li>lajfd</li>
      </ul>
      <ul>
        <li>HOlj</li>
        <li>jojdfs</li>
        <li>sfhhsfd</li>
        <li>lajfd</li>
      </ul>


    </footer>


   





    </>
  )
}

export default App
