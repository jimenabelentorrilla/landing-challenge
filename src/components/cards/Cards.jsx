import { Col, Container, Row } from "react-bootstrap";
import "./cards.css";
import Phone from "../../assets/phone-proj.png";

const CardBlue = ({ title, btn, img }) => {
  return (
    <div className="d-flex align-content-center justify-content-space-between tarjeta">
      <div className="card-flex">
        <h4>{title}</h4>
        <p>Maecenas sed diam eget risus varius <br /> blandit sit amet non magna.</p>
        <div>
          <button bsPrefix="btn-crd" className="btn btn-outline-secondary btn-lg">{btn}</button>
        </div>
      </div>
      <div>
        <img src={img}/>
      </div>
    </div>
  )
}

export const Cards = () => {
  return (
    <Container>
      <Row>
        <Col>
          <CardBlue
            title="Get in touch with us"
            btn="Hire us"
          />
        </Col>
        <Col>
          <CardBlue
            title="Our Projects"
            btn="See Projects"
            img={Phone}
          />
        </Col>
      </Row>
    </Container>
  )
}
