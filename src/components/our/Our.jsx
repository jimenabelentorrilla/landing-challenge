import "./our.css";
import { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopFile, faFileLines, faRulerHorizontal } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";


const CardOur = ({ icon , title, parag }) => {
  return (
    <div className="contenedor-card d-flex justify-content-between flex-column align-items-center gap-2">
      <div className="circle-blue d-flex justify-content-center align-items-center">
        <FontAwesomeIcon icon={icon} className="icon-card" style={{color: "#FFFFFF",}}/>
      </div>
      <div className="card-text">
        <h4>{title}</h4>
        <p>{parag}</p>
      </div>
      <div>
        <button className="btn btn-outline-secondary btn-lg cta-card">Learn more</button>
      </div>
    </div>
  )
}

export const Our = () => {

  useEffect(() => {
    Aos.init()
  }, []) 

  return (
    <Container className="cont-our d-flex flex-column justify-content-between align-items-center gap-3" id="services">
      <Row>
        <div className="our-text d-flex justify-content-center flex-column align-items-center">
          <h2>Our Services</h2>
          <p>We feel very strong about our skills when it comes to planning, designing <br />
            and coding applications. Here is what we love to do! </p>
        </div>
      </Row>
      <Row className="mb-6 row-center"> 
        <Col sm={12} md={12} lg={4} xl={4} xxl={4} className="flex" data-aos="zoom-in-down" data-aos-duration="1200" data-aos-delay="300">
          <div className="width-card">
            <CardOur 
            icon={faFileLines}
            title="Business & Product Concept"
            parag="Analyse business and product concepts at Start-up Workshops or Ongoing Projects Audits and prepare a viable and sensible product roadmap for achieving a perfect market fit."
          />
          </div>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4} xxl={4} className="d-flex justify-content-center" data-aos="zoom-in-down" data-aos-duration="1200" data-aos-delay="500">
          <div className="width-card">
            <CardOur 
            icon={faLaptopFile}
            title="Web & Mobile Development"
            parag="Plan, develop and test high-quality web-applications using AngularJS, NodeJS, JavaScript, Typescript, HTML5 and SASS/CSS3 frameworks and native mobile languages."
          />
          </div>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4} xxl={4} className="d-flex justify-content-center" data-aos="zoom-in-down" data-aos-duration="1200" data-aos-delay="700">
          <div className="width-card">
            <CardOur 
            icon={faRulerHorizontal}
            title="UX & UI Design"
            parag="Sketch information architecture and simple mock-ups, convert them into clickable prototypes and finish with usable interface designs to deliver a good and reliable user experience."
          />
          </div>
        </Col>
      </Row>
    </Container>
  )
}
