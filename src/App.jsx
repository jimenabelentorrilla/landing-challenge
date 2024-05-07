import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavComponent } from "./components/nav/NavComponent";
import { Header } from "./components/header/Header";
import { Our } from "./components/our/Our";
import { Tech } from "./components/tech/Tech";
import { Clients } from "./components/clients/Clients";
import { Cards } from "./components/cards/Cards";
import { Footer } from "./components/footer/Footer";
import Container from 'react-bootstrap/Container';

function App() {

  return (
    <>
       <Container className="contenedor" fluid>
        <div className="bg-img">
          <NavComponent />
          <Header />
        </div>
        <Our />
        <Tech />
        <Clients />
        <Cards />
        <Footer />
      </Container>
    </>
  )
}

export default App
