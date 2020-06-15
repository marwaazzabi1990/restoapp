import React, { Component } from "react";
import "./Navbar.css";
import { MDBBtn } from "mdbreact";
import logo from "./logo.png";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const listes = [
    { name: "Menu", link: "/containeadmin" },

    { name: "Commande", link: "/Commandepasse" },


    { name: "Deconnexion", link: "/login" }



];

function Navbaradmin(props) {
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
            <Link to="/login"  >  <MDBBtn color="primary" onClick={() => this.logout()}>Deconexion</MDBBtn></Link>
        </div>
    );
}

export default Navbaradmin;
