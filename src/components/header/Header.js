import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { SidebarContext } from "../../contexts/SidebarContext";
import { CartContext } from "../../contexts/CartContext";

import logo from "../../assets/image/logo.svg";
import "./Header.css";
function Header() {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(false) : setIsActive(true);
    });
  });
  return (
    <header
      className="header"
      style={
        isActive
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "#fefefe", boxShadow: "0 0 10px rgba(0,0,0,.5)" }
      }
    >
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="no-logo" style={{ width: "40px" }}></img>
        </Link>
      </div>
      <div className="icon_container">
        <FontAwesomeIcon
          className="icon"
          icon={faBagShopping}
          onClick={() => setIsOpen(!isOpen)}
        />
        <div className="item-amount">{itemAmount}</div>
      </div>
    </header>
  );
}

export default Header;
