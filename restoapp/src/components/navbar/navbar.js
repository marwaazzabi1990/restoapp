import React, { Component } from "react";
import { connect } from "react-redux";
import "./Navbar.css";
import logo from "./logo.png";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Axios from "axios"

const listes = [
  { name: "Menu", link: "/" },
  { name: "commande", link: "/commande" },
  { name: " client", link: "/containeclient" },
  { name: " admin", link: "/containeadmin" },
  { name: "user", link: "/user" },
  { name: "Sing In", link: "/signup" },
  { name: "log", link: "/login" },

];

export class Navbar extends Component {
  logout = () => {
    let tabid = [];
    var count = this.props.commande.length
    tabid = this.props.commande.map(el => el.id)
    for (let i = 0; i < count; i++) {
      Axios.delete(`http://localhost:3004/commande/${tabid[i]}`)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }
    window.location.reload()
    alert("good bye")
    localStorage.clear()

  }
  render() {

    return (
      <div className="nav-bar" >
        <div>
          <img className="logo" src={logo}></img>
        </div>

        <div className="inscription">
          <ul className="nav-listes">
            {listes.map((el) => (
              <Link to={el.link}>{el.name}</Link>
            ))}
          </ul>
          <button onClick={() => this.logout()}>log out </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  commande: state.commande,

  //  totalCommande: state.total,

});

const mapDispatchToProps = (dispatch) => ({
  //getAllCommande: () => dispatch(getCommandeFromApi()),
  //validcmd: (item) => dispatch(vlidcmdFromApi(item))
  //  getALLtotalCommande: () => dispatch(getCommandeTotalFromApi())

});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
