import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import "bootstrap-icons/font/bootstrap-icons.css";


function CollapsibleExample(props) {
    
  return (
    <>
    <Navbar collapseOnSelect expand="md" className="bg-body-tertiary sticky-top" bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand as={Link} to="/Home"><img src={logo} alt="logo" height={50} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
          <Nav>
            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
            <Nav.Link as={Link} to="/Location">Location</Nav.Link>
            <Nav.Link as={Link} to="/ParkingSpot">Parking Spot</Nav.Link>
            <Nav.Link as={Link} to="/MakeParkingAdmin">Make Parking Admin</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/" ><Button variant="outline-dark">Logout</Button></Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
}

export default CollapsibleExample;