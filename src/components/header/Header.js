import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

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
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className="header"
      style={
        isActive
          ? { backgroundColor: "#fefefe", boxShadow: "0 0 10px rgba(0,0,0,.5)" }
          : { backgroundColor: "transparent" }
      }
    >
      <div>
        <Link to="/">
          <img src={logo} alt="no-logo" className="logo"></img>
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
