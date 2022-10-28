import svg from "../assets/svg.png";
import "../styles/survey.css";

const Survey = () => {
  return (
    <div className="container-survey">
      <div className="part">
        <div className="session-survey">
          <h1>Venta exitosa</h1>
          <div className="option">
            <div className="radius" />
            <h2>Si</h2>
          </div>
          <div className="option">
            <div className="radius" />
            <h2>No</h2>
          </div>
        </div>
        <div className="session-survey">
          <h1>Motivo</h1>
          <div className="colletion-option motivo">
            <div className="select">
              <h2>Economico</h2>
              <img src={svg} alt="svg" />
            </div>
          </div>
        </div>
        <div className="session-survey">
          <h1>Valoracion</h1>
          <div className="colletion-option">
            <div className="option valoracion">
              <h2>1</h2>
              <div className="radius" />
            </div>
            <div className="option valoracion">
              <h2>2</h2>
              <div className="radius" />
            </div>
            <div className="option valoracion">
              <h2>3</h2>
              <div className="radius" />
            </div>
            <div className="option valoracion">
              <h2>4</h2>
              <div className="radius" />
            </div>
            <div className="option valoracion">
              <h2>5</h2>
              <div className="radius" />
            </div>
          </div>
        </div>
      </div>
      <div className="part submit">
        <button type="button">Enviar</button>
      </div>
    </div>
  );
};

export default Survey;
