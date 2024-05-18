import { Col } from "react-bootstrap";
import "./cards.css";
import Phone from "../../assets/phone-proj.png";

const CardBlue = ({ title, btn, img }) => {
  return (
    <>
      <div className="tarjeta">
        <div className="card-flex">
          <h4>{title}</h4>
          <p>Maecenas sed diam eget risus varius <br /> blandit sit amet non magna.</p>
          <div>
            <button className="card-btn">{btn}</button>
          </div>
        </div>
        <div className="cnt-ph">
          <img src={img} className="img-fluid"/>
        </div>
      </div>
    </>
  )
}

export const Cards = () => {
  return (
    
      <>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} className="col-rg">
          <CardBlue
            title="Get in touch with us"
            btn="Hire us"
          />
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} className="col-lf">
          <CardBlue
            title="Our Projects"
            btn="See Projects"
            img={Phone}
          />
        </Col>
      </>
  )
}
