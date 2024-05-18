import { Container, Row} from "react-bootstrap";
import "./clients.css";
import Tnw from "../../assets/tnw.svg";
import Google from "../../assets/google.png";
import Nike from "../../assets/nike.png";
import Airbnb from "../../assets/airbnb.png";
import Hsbc from "../../assets/hsbc.svg";
import { Cards } from "../cards/Cards";

const brands = [
  {
      "id": "1",
      "name": Tnw,
      "link": "https://thenextweb.com/"
  },
  {
      "id": "2",
      "name": Google,
      "link": "https://www.google.com/?hl=es" 
  },
  {
      "id": "3",
      "name": Nike,
      "link": "https://www.nike.com.ar/"    
  },
  {
      "id": "4",
      "name": Airbnb,
      "link": "https://www.airbnb.com.ar/"
  },
  {
      "id": "5",
      "name": Hsbc,
      "link": "https://www.hsbc.com.ar/"
  }
]

export const Clients = () => {
  return (
    <Container fluid className="clients-cnt">
      <Container bsPrefix="container">
        <Row className="pad-cli">
            <div>
              <h5 className="d-flex justify-content-center client-title">clients we worked with</h5>
            </div>
            <div className="brands">
              {
                brands.map(brand => {
                  return (
                    <a href={brand.link} target="_blank" key={brand.id} className="cnt-brand">
                      <img className="brand" src={brand.name} />
                    </a>
                  )})
              } 
            </div>      
        </Row>
        <Row className="posit">
          <Cards />
        </Row>
      </Container>
    </Container>
  )
}
