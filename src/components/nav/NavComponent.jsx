import { Container } from "react-bootstrap";
import "./nav.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Icon from "../../assets/postcard.png";


export const NavComponent = () => {
  return (
    <>
        <Navbar bsPrefix="navbar" expand="lg" className="mb-3">
          <Container>
            <Navbar.Brand bsPrefix="navbar-brand">compleet labs</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-lg"
              aria-labelledby="offcanvasNavbarLabel-expand-lg"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                  compleet labs
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="justify-content-end">
                <Nav>
                  <Nav.Link bsPrefix="navlink" href="#home" className="me-4">Home</Nav.Link>
                  <Nav.Link bsPrefix="navlink" href="#services" className="me-4">Services</Nav.Link>
                  <Nav.Link bsPrefix="navlink" href="#technology" className="me-4">Technology</Nav.Link>
                  <Nav.Link bsPrefix="navlink" href="#case-studies" className="me-4">Case studies</Nav.Link>
                  <Nav.Link bsPrefix="navlink" href="#about" className="me-4">About</Nav.Link>
                  <Nav.Link bsPrefix="navlink" href="#hire-us" className="me-4 d-flex align-items-center wh-hire">
                    <img src={Icon} className="me-2 " />Hire us</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            </Container>
        </Navbar>
    </>
  )
}

