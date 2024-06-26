import "./tech.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faSass, faJs, faAngular, faPython } from "@fortawesome/free-brands-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const icons = [
  {
      "id": 1,
      "icon": faHtml5
  },
  {
      "id": 2,
      "icon": faCss3Alt 
  },
  {
      "id": 3,
      "icon": faSass    
  },
  {
      "id": 4,
      "icon": faJs
  },
  {
      "id": 5,
      "icon": faAngular
  },
  {
      "id": 6,
      "icon": faPython
  }
]

export const Tech = () => {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
    <Container fluid className="tech-cont d-flex justify-content-center align-items-center" id="tech">
      <Container bsPrefix="container">
        <Row className="mw-tch d-flex align-items-center">
          <Col sm={12} md={12} lg={12} xl={8} xxl={8} className="cnt-cnt" data-aos="zoom-in-right" data-aos-duration="1200">
            <div className="tech-text d-flex flex-column justify-content-center">
              <h2>We use cutting edge technology</h2>
              <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean
              lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae
              elit libero, a pharetra augue. Vestibulum id ligula porta felis
              euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum
              faucibus dolor auctor.</p>
            </div>
          </Col>
          <Col sm={12} md={12} lg={12} xl={4} xxl={4} className="center-skill d-flex justify-content-center" data-aos="zoom-in-left" data-aos-duration="1200">
            <div className="flex-skill-icon d-flex flex-wrap justify-content-center gap-5">
              {
                icons.map(icon  => {
                  return (
                    <div key={icon.id}>
                        <FontAwesomeIcon
                          style={{ color: '#FFFFFF'}}
                          icon={icon.icon}
                          className="icon-tch"
                        />
                    </div>
                  )})
              }
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
    </>
  )
}
