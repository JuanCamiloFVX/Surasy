import { useState, useEffect, useContext } from "react";
import Product from "./product";
import "../styles/container-products.css";
import ClientAxios from "../config/axios";
import useContextGobal from "../context/useContext/useContextGobal";

const ContainerProduct = () => {
  const { iduser } = useContext(useContextGobal);
  const [info, setInfo] = useState([]);
  const [products, setProducts] = useState([]);
  const [arrayId, setArrayId] = useState([]);
  useEffect(() => {
    const getProductos = async () => {
      const url = "https://surasy.herokuapp.com/surasy/consultarProductos";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      let id = await Promise.all(
        data.map(async (e) => {
          return e.idProducto;
        })
      );
      setProducts(data);
      setArrayId(id);
    };
    getProductos();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const getProduct = async () => {
      if (arrayId === []) {
        return;
      } else {
        ClientAxios.post(`/predecir`, {
          user_id: [iduser],
          product_id: arrayId,
        }).then(function (response) {
          const data = JSON.parse(response.request.response);
          setInfo(data);
        });
      }
    };
    getProduct();
    // eslint-disable-next-line
  }, [arrayId, iduser]);

  useEffect(() => {
    console.log(arrayId);
    // eslint-disable-next-line
  }, [info]);
  return (
    <div className="container-products">
      {products.map((product, index) => (
        <Product
          product={product}
          key={product.idProducto}
          info={info[index]}
          index={index}
        />
      ))}
    </div>
  );
};

export default ContainerProduct;
