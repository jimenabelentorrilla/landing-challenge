import "./our.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopFile, faFileLines, faRulerHorizontal } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

const CardOur = ({ icon , title, parag }) => {
  return (
    <div className="contenedor-card">
      <div className="circle-blue">
        <FontAwesomeIcon icon={icon} size="lg" style={{color: "#FFFFFF",}}/>
      </div>
      <div className="card-text">
        <h4>{title}</h4>
        <p>{parag}</p>
      </div>
      <div>
        <button className="btn btn-outline-secondary btn-lg">Learn more</button>
      </div>
    </div>
  )
}


export const Our = () => {
  return (
    <Container className="cont-our">
      <div className="our-text">
        <h2>Our Services</h2>
        <p>We feel very strong about our skills when it comes to planning, designing <br />
          and coding applications. Here is what we love to do! </p>
      </div>
      <div className="cont-cards">
          <CardOur 
            icon={faFileLines}
            title="Business & Product Concept"
            parag="Analyse business and product concepts at Start-up Workshops or Ongoing Projects Audits and prepare a viable and sensible product roadmap for achieving a perfect market fit."
          />
          <CardOur 
            icon={faLaptopFile}
            title="Web & Mobile Development"
            parag="Plan, develop and test high-quality web-applications using AngularJS, NodeJS, JavaScript, Typescript, HTML5 and SASS/CSS3 frameworks and native mobile languages."
          />
          <CardOur 
            icon={faRulerHorizontal}
            title="UX & UI Design"
            parag="Sketch information architecture and simple mock-ups, convert them into clickable prototypes and finish with usable interface designs to deliver a good and reliable user experience."
          />
      </div>
    </Container>
  )
}
