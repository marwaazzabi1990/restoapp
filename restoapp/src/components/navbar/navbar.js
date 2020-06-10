import React, { Component } from "react";
import "./Navbar.css";
import logo from "./logo.png";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const listes = [
  { name: "Menu", link: "/" },
  { name: "commande", link: "/commande" },
  { name: "Sing In", link: "register" },
  { name: "Sigin", link: "login" },
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