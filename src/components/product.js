import "../styles/product.css";

const Product = ({ product, info }) => {
  if (info === undefined) {
    return <h1>hola</h1>;
  } else {
    return (
      <div className="container-product">
        <div className="container-info">
          <h4 className="info">{product.nombre}</h4>
          <h4 className="info">{info.avg}%</h4>
        </div>
        <button className="button-mas"/>
      </div>
    );
  }
};

export default Product;
