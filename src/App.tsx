import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { FaBeer } from "react-icons/fa";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { type } from "os";
import Home from "../../shopee/src/pages/Home";
import YouCart from "../../shopee/src/pages/YourCart";
import WareHouse from "../../shopee/src/pages/WareHouse";
import "./Component.css";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/ware-house'>
            <WareHouse />
          </Route>
          <Route path='/you-cart'>
            <YouCart />
          </Route>

          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
