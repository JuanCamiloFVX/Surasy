import { useEffect, useState} from "react";
import Client from "./client";
import "../styles/container-clients.css";

const Container = () => {
  const [clients, setClients] = useState([]);
  useEffect(()=>{
    const getClients = async()=>{
      const url = "https://surasy.herokuapp.com/surasy/consultartrue";
      const response = await fetch(url);
      const data = await response.json();
      setClients(data);
    }
    getClients();
    // eslint-disable-next-line
  },[])
  return (
    <div className="container">
      <div className="clients">
        <div className="titles">
          <div className="title">Nombres</div>
          <div className="title">Contacto</div>
        </div>
        {clients.map((client) => (
          <Client client={client} key={client.idUser}/>
        ))}
      </div>
    </div>
  );
};

export default Container;
