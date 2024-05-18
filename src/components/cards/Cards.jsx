import { Col } from "react-bootstrap";
import "./cards.css";
import Phone from "../../assets/phone-proj.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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

  useEffect(() => {
    Aos.init()
  }, [])

  return (
      <>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} className="col-rg" data-aos="fade-right" data-aos-duration="1200">
          <CardBlue
            title="Get in touch with us"
            btn="Hire us"
          />
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} className="col-lf" data-aos="fade-left" data-aos-duration="1200">
          <CardBlue
            title="Our Projects"
            btn="See Projects"
            img={Phone}
          />
        </Col>
      </>
  )
}
