import React from "react";
import logo from "./logo.svg";
import MenusContainer from "./components/menusContainer";
import Navbar from "./components/navbar/navbar";
import EdithItem from "./components/edithItem";
import ss from "./store.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>resto app</h1>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <MenusContainer />
          </Route >
          <Route exact path="/edit" >
            <EdithItem />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
