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
    <Container fluid className="tech-cont">
      <Row className="mw-tch">
        <Col sm={12} md={12} lg={12} xl={8} xxl={8}>
          <div className="tech-text">
            <h2>We use cutting edge technology</h2>
            <p>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Quae omnis itaque eaque obcaecati,
              unde, vero dolor nemo volitaque eaque uptates cumque,
              quisquamitaque eaque itaque eaeaque itaque eaeaque itaque 
              eaeaque itaque eaeaque ique itaque eaque  dignissimos 
              nesciunt ullam? Id debitis autem quibusdam ipsam animi expedita!</p>
          </div>
        </Col>
        <Col sm={12} md={12} lg={12} xl={4} xxl={4} className="center-skill">
          <div className="flex-skill-icon">
            {
              icons.map(icon => {
                return (
                  <div >
                    <div>
                      <FontAwesomeIcon
                        key={icon.id} 
                        style={{ color: '#FFFFFF'}}
                        icon={icon.icon}
                        size="4x"
                        />
                    </div>
                  </div>
                )})
            }
          </div>
        </Col>
      </Row>
    </Container>
  )
}
