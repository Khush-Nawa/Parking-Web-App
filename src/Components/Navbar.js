import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import "bootstrap-icons/font/bootstrap-icons.css";


function CollapsibleExample() {
    
  return (
    <>
    <Navbar collapseOnSelect expand="md" className="bg-body-tertiary sticky-top" bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand as={Link} to="/Parking-Web-App/Home"><img src={logo} alt="logo" height={50} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
          <Nav>
            <Nav.Link as={Link} to="/Parking-Web-App/Home">Home</Nav.Link>
            <Nav.Link as={Link} to="/Parking-Web-App/Location">Location</Nav.Link>
            <Nav.Link as={Link} to="/Parking-Web-App/ParkingSpot">Parking Spot</Nav.Link>
            <Nav.Link as={Link} to="/Parking-Web-App/MakeParkingAdmin">Make Parking Admin</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/Parking-Web-App/" ><Button variant="outline-dark">Logout</Button></Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
}

export default CollapsibleExample;