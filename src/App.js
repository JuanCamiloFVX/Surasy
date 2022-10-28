import "./styles/App.css";
import Container from "./components/container-clients";
import ContainerProduct from "./components/container-product";
import Survey from "./components/survey";
import Header from "./components/header";

function App() {
  return (
    
      <div className="App">
        <Header />
        <div className="body">
          <div className="session">
            <div className="tittle-session">Nombre del cliente</div>
            <div className="contents productos">
              <ContainerProduct />
            </div>
          </div>
          <div className="session">
            <div className="contents">
              <Container />
            </div>
          </div>
        </div>
        <div className="survey-service">
          <Survey />
        </div>
      </div>
  );
}

export default App;
