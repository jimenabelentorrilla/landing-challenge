import "./nav.css";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Icon from "../../assets/postcard.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const NavComponent = () => {

  const [showOff, setShowOff] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  const handleCloseOff = () => setShowOff(false);
  const handleShowOff = () => setShowOff(true);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);


  return (
    <>
      <Navbar bsPrefix="navbar" expand="lg" className="mb-3" id="home">
          <Container bsPrefix="container">
            <Navbar.Brand bsPrefix="navbar-brand" href="#home">compleet labs</Navbar.Brand>
                <Nav>
                  <div className="menu">
                    <FontAwesomeIcon onClick={handleShowOff} size="2x" icon={faBars} style={{ color: '#FFFFFF'}} />
                  </div>
                  <div className="nav-ul">
                    <Nav.Link bsPrefix="navlink" href="#home" className="me-4">Home</Nav.Link>
                    <Nav.Link bsPrefix="navlink" href="#services" className="me-4">Services</Nav.Link>
                    <Nav.Link bsPrefix="navlink" href="#tech" className="me-4">Technology</Nav.Link>
                    <Nav.Link bsPrefix="navlink" href="#" className="me-4">Case studies</Nav.Link>
                    <Nav.Link bsPrefix="navlink" href="#" className="me-4">About</Nav.Link>
                    <Nav.Link bsPrefix="navlink" href="#" className="wh-hire d-flex align-items-center" onClick={handleShowModal}>
                      <img src={Icon} className="me-2 " />Hire us</Nav.Link>
                  </div>
                </Nav>
            </Container>
        </Navbar>
        <Offcanvas show={showOff} onClick={handleCloseOff}>
          <Offcanvas.Header closeButton><Offcanvas.Title></Offcanvas.Title></Offcanvas.Header>
          <Offcanvas.Body>
              <div className="d-flex align-items-start justify-content-start">
                  <ul className='nav-hm d-flex flex-column gap-3 '>
                      <a href="#services"><li>Services</li></a>
                      <a  href="#tech"><li>Technology</li></a>
                      <a  href="#"><li>Case studies</li></a>
                      <a  href="#"><li>About</li></a>
                      <a className="hire-cta" href="#" onClick={handleShowModal}><li>Hire us!</li></a>
                  </ul>
              </div>
          </Offcanvas.Body>
        </Offcanvas>
        <Modal show={showModal} onHide={handleCloseModal} animation={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Hire us!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel
                  controlId="floatingTextarea"
                  label="Name"
                  className="mb-3"> 
                  <Form.Control type="name" required />
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingTextarea"
                label="Email"
                className="mb-3">
                  <Form.Control type="email" required/>
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingTextarea"
                label="Comments"
                className="mb-3">
                  <Form.Control
                    required  
                    as="textarea" 
                    style={{ height: '100px' }} />
            </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button as="input" type="submit" value="Submit" />
        </Modal.Footer>
      </Modal>
    </>
  )
}

