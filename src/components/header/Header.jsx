import { Container } from "react-bootstrap";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <Container className="cnt-cont">
      
      <div className="header-flex">
        <div>
          <h1 className="header-title">We build beautiful and <br />reliable web solutions</h1>
          <p className="header-parag">We strongly believe that communication, trust and transparency <br />
            are the essential elements of successful business relationship.<br /> Ready for the journey?</p>
        </div>
        <div>
          <button className="btn btn-outline-secondary btn-lg me-4">Learn more</button>
          <button className="btn btn-primary btn-lg me-4">Our Projects <FontAwesomeIcon icon={faArrowRightLong} /></button>
        </div>
      </div>
    </Container>
  )
}
