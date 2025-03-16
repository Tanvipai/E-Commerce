import React, { useState } from "react";
import "./navbar.css";

import logo from "../Assets/logo.jpg";
import cart from "../Assets/cart-icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPSMART</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("Appliances");
          }}
        >
          Appliances{menu == "Appliances" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Fashion");
          }}
        >
          Fashion{menu == "Fashion" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Grocery");
          }}
        >
          Grocery{menu == "Grocery" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Cosmetics");
          }}
        >
          Cosmetics{menu == "Cosmetics" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
