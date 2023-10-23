import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

import { CartContext } from "../../contexts/CartContext";
import "./CartItem.css";
import { useContext } from "react";
function CartItem({ item }) {
  const { removeProducts, increaseProduct,decreaseProduct } = useContext(CartContext);
  return (
    <div className="cart-product">
      <Link to={`/product/${item.id}`}>
        <img src={item.image} alt="no-cart" className="cart-image"></img>
      </Link>
      <div className="description">
        <div className="cart-title">
          <Link to={`/product/${item.id}`} className="title">
            {item.title}
          </Link>
          <FontAwesomeIcon
            icon={faXmark}
            className="close-icon"
            onClick={() => removeProducts(item.id)}
          />
        </div>
        <div className="price-container">
          <div className="amount">
            <div className="left" onClick={()=>decreaseProduct(item.id)}>
              <FontAwesomeIcon icon={faMinus} />
            </div>
            <div className="number">{item.amount}</div>
            <div className="left" onClick={() => increaseProduct(item.id)}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
          <div className="price item-price">{`$ ${item.price}`}</div>
          <div className="price final-price">{`$ ${parseFloat(
            item.price * item.amount
          ).toFixed(2)}`}</div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
