import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { NavComponent } from "./components/nav/NavComponent";
import { Header } from "./components/header/Header";
import { Our } from "./components/our/Our";
import { Tech } from "./components/tech/Tech";
import { Clients } from "./components/clients/Clients";
import { Cards } from "./components/cards/Cards";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <Container className="contenedor" fluid>
        <NavComponent />
        <Header />
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
