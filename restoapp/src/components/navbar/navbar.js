import React, { Component } from "react";
import "./Navbar.css";
import logo from "./logo.png";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MenusContainerClient } from "../menucontainclient";

const listes = [
  { name: "Menu", link: "/" },
  { name: "commande", link: "/commande" },
  { name: " client", link: "/containeclient" },
  { name: " admin", link: "/containeadmin" },
  { name: "user", link: "/user" },
  { name: "Sing In", link: "/signup" },
  { name: "log", link: "/login" },
];

function Navbar(props) {
  return (
    <div className="nav-bar">
      <div>
        <img className="logo" src={logo}></img>
      </div>

      <div className="inscription">
        <ul className="nav-listes">
          {listes.map((el) => (
            <Link to={el.link}>{el.name}</Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
