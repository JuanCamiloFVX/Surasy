import { useContext } from "react";
import useContextGobal from "../context/useContext/useContextGobal";
import "../styles/client.css";

const Client = ({ client }) => {
  const {saveIduser}=useContext(useContextGobal)
  return (
    <div className="container-client">
      <div className="attribute">
        <h3 className="text">{client.nombre}</h3>
      </div>
      <div className="line" />
      <div className="attribute">
        <h3 className="text">{client.telefono}</h3>
      </div>
      <button onClick={()=>saveIduser(client.idUser)}></button>
    </div>
  );
};

export default Client;
