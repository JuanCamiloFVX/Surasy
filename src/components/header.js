import Logo from "../assets/perfil.jpg"
import "../styles/header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <div className="actions">
          <h1 className="logo">SURASY</h1>
        </div>
        <div className="actions">
          <button type="button" className="sign-out">
            Salir
          </button>
          <div className="perfil">
            <img src={Logo} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
