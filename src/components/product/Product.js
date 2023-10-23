// import { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { faPlus, faEye } from "@fortawesome/free-solid-svg-icons";

import { CartContext } from "../../contexts/CartContext";

import "./Product.css";
function Product({ product }) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="product">
      {/* image of product */}
      <div className="top">
        {/* <Link to={`/product/${product.id}`} > */}
        <Link to={`/product/${product.id}`} className="cart">
          <img src={product.image} alt="no-product"></img>
        </Link>
        {/* </Link> */}
        <div className="buttons">
          <div className="add" onClick={() => addToCart(product, product.id)}>
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <Link to={`/product/${product.id}`} className="more">
            <FontAwesomeIcon icon={faEye} />
          </Link>
        </div>
      </div>
      {/*  */}

      {/* info of product */}
      <div className="bottom">
        <p className="category">{product.category}</p>
        <p className="product-title">{product.title}</p>
        <span>
          $<p className="price">{product.price}</p>
        </span>
      </div>
      {/*  */}
    </div>
  );
}

export default Product;
