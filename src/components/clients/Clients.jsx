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
      "name": Tnw
  },
  {
      "id": "2",
      "name": Google 
  },
  {
      "id": "3",
      "name": Nike    
  },
  {
      "id": "4",
      "name": Airbnb
  },
  {
      "id": "5",
      "name": Hsbc
  }
]

export const Clients = () => {
  return (
    <Container fluid className="clients-cnt">
      <Row className="pad-cli">
          <div>
            <h5 className="d-flex justify-content-center client-title">clients we worked with</h5>
          </div>
          <div className="brands">
            {
              brands.map(brand => {
                return (
                  <div key={brand.id} className="cnt-brand">
                    <img className="brand" src={brand.name} />
                  </div>
                )})
            } 
          </div>      
      </Row>
      <Row className="posit">
        <Cards />
      </Row>
    </Container>
  )
}
