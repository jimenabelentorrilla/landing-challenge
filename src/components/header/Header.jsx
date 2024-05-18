import { useEffect } from "react";
import { Container } from "react-bootstrap";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";


export const Header = () => {
     
    useEffect(() => {
        Aos.init()
      }, [])

  return (
    <Container className="cnt-cont d-flex justify-content-start align-items-center">
      <div className="header-flex d-flex flex-column align-items-start justify-content-between gap-3" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300">
        <div>
          <h1 className="header-title">We build beautiful and <br />reliable web solutions</h1>
          <p className="header-parag">We strongly believe that communication, trust and transparency <br />
            are the essential elements of successful business relationship.<br /> Ready for the journey?</p>
        </div>
        <div className="cta-header-flex d-flex gap-3">
          <button className="btn btn-outline-secondary btn-lg me-4">Learn more</button>
          <button className="btn btn-primary btn-lg me-4">Our Projects <FontAwesomeIcon icon={faArrowRightLong} /></button>
        </div>
      </div>
    </Container>
  )
}
