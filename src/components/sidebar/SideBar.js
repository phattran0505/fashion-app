import { useContext } from "react";
import { SidebarContext } from "../../contexts/SidebarContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SideBar.css";
import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "../cartItem/CartItem";
import { Link } from "react-router-dom";
function SideBar() {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearProducts, total } = useContext(CartContext);
  return (
    <div className={isOpen ? "side-bar" : "side-bar close"}>
      <div className="header_sidebar">
        <span>Shoping bag (0)</span>
        <FontAwesomeIcon
          className="icon"
          icon={faArrowRight}
          onClick={handleClose}
        />
      </div>
      <div className="body">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <div className="footer_sidebar">
        <div className="total">
          <div className="total_money">
            total:<span>$ {parseFloat(total).toFixed(2)}</span>
          </div>
          <div className="delete_icon" onClick={() => clearProducts()}>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>

        
        <div className="links">
          <Link to='/' className="view-cart">View cart</Link>
          <Link to='/' className="checkout">Checkout</Link>
        </div>
      </div>
      </div>
  );
}

export default SideBar;
