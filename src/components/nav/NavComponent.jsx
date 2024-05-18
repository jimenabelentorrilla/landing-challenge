import "./nav.css";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Icon from "../../assets/postcard.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const NavComponent = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bsPrefix="navbar" expand="lg" className="mb-3" id="home">
          <Container bsPrefix="container">
            <Navbar.Brand bsPrefix="navbar-brand" href="#home">compleet labs</Navbar.Brand>
                <Nav>
                  <div className="menu">
                    <FontAwesomeIcon onClick={handleShow} size="2x" icon={faBars} style={{ color: '#FFFFFF'}} />
                  </div>
                  <div className="nav-ul">
                    <Nav.Link bsPrefix="navlink" href="#home" className="me-4">Home</Nav.Link>
                    <Nav.Link bsPrefix="navlink" href="#services" className="me-4">Services</Nav.Link>
                    <Nav.Link bsPrefix="navlink" href="#tech" className="me-4">Technology</Nav.Link>
                    <Nav.Link bsPrefix="navlink" href="#" className="me-4">Case studies</Nav.Link>
                    <Nav.Link bsPrefix="navlink" href="#" className="me-4">About</Nav.Link>
                    <Nav.Link bsPrefix="navlink" href="#" className="wh-hire d-flex align-items-center">
                      <img src={Icon} className="me-2 " />Hire us</Nav.Link>
                  </div>
                </Nav>
            </Container>
        </Navbar>
        <Offcanvas show={show} onClick={handleClose}>
          <Offcanvas.Header closeButton><Offcanvas.Title></Offcanvas.Title></Offcanvas.Header>
          <Offcanvas.Body>
              <div>
                  <ul className='nav-hm d-flex flex-column'>
                      <a href="#services"><li>Services</li></a>
                      <a  href="#tech"><li>Technology</li></a>
                      <a  href="#"><li>Case studies</li></a>
                      <a  href="#"><li>About</li></a>
                      <a className="hire-cta" href="#"><li>Hire us!</li></a>
                  </ul>
              </div>
          </Offcanvas.Body>
        </Offcanvas>
    </>
  )
}

