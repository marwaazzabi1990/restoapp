import React from "react";
import logo from "./logo.svg";
import MenusContainer from "./components/menusContainer";
import Navbar from "./components/navbar/navbar";
import CommandeContainer from "./components/commandecontainer";
import MenusContainClient from "./components/menucontainclient"
import ss from "./store.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <MenusContainClient />
          </Route >
          <Route exact path="/containeadmin">
            <Navbar />
            <MenusContainer />
          </Route >

          <Route exact path="/commande" >
            <Navbar />
            <CommandeContainer />
          </Route>
          <Route exact path="/commande" >
            <Navbar />
            <CommandeContainer />
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
