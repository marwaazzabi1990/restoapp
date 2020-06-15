import React from "react";
import logo from "./logo.svg";
import MenusContainer from "./components/menusContainer";
import Navbar from "./components/navbar/navbar";
import Navbaradmin from "./components/navbar/Navbaradmin"
import CommandeContainer from "./components/commandecontainer";
import MenusContainClient from "./components/menucontainclient"
import Signup from "./components/singin"
import Log from "./components/login"
import Navbarglob from "./components/navbar/navbarglob"
import commandepasse from "./components/commandepasse"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Commandepasse from "./components/commandepasse";

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>

          <Route exact path="/">
            <Navbarglob />
            <Signup />
          </Route >
          <Route exact path="/login">
            <Navbarglob />
            <Log />
          </Route >
          <Route exact path="/containeclient">
            <Navbar />
            <MenusContainClient />
          </Route >
          <Route exact path="/containeadmin">
            <Navbaradmin />
            <MenusContainer />
          </Route >

          <Route exact path="/commande" >
            <Navbar />
            <CommandeContainer />
          </Route>
          <Route exact path="/commandepasse" >
            <Navbaradmin />
            <Commandepasse />
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
