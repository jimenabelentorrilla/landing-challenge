import "./tech.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faSass, faJs, faAngular, faPython } from "@fortawesome/free-brands-svg-icons";
import { Col, Container, Row } from "react-bootstrap";

const icons = [
  {
      "id": "1",
      "icon": faHtml5
  },
  {
      "id": "2",
      "icon": faCss3Alt 
  },
  {
      "id": "3",
      "icon": faSass    
  },
  {
      "id": "4",
      "icon": faJs
  },
  {
      "id": "5",
      "icon": faAngular
  },
  {
      "id": "6",
      "icon": faPython
  }
]

export const Tech = () => {
  return (
    <Container fluid className="tech-cont" id="tech">
      <Container >
        <Row className="mw-tch">
          <Col sm={12} md={12} lg={12} xl={8} xxl={8} className="d-flex justify-content-center">
            <div className="tech-text">
              <h2>We use cutting edge technology</h2>
              <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean
              lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae
              elit libero, a pharetra augue. Vestibulum id ligula porta felis
              euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum
              faucibus dolor auctor.</p>
            </div>
          </Col>
          <Col sm={12} md={12} lg={12} xl={4} xxl={4} className="center-skill">
            <div className="flex-skill-icon">
              {
                icons.map(icon => {
                  return (
                    <div>
                        <FontAwesomeIcon
                          key={icon.id} 
                          style={{ color: '#FFFFFF'}}
                          icon={icon.icon}
                          size="4x"
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
  )
}
