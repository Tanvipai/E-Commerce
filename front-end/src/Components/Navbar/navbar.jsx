import React from "react";
import "./navbar.css";

import logo from "../Assets/logo.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li>Appliances</li>
        <li>Fashion</li>
        <li>Grocery</li>
        <li>Cosmetics</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
