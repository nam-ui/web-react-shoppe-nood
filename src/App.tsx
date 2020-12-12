import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { FaBeer } from "react-icons/fa";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { type } from "os";
import HomeShopee from "../../shopee/src/pages/Home";
import YouCart from "../../shopee/src/pages/YourCart";
import WareHouse from "../../shopee/src/pages/WareHouse";
import "./Component.css";

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/ware-house'>
            <WareHouse />
          </Route>
          <Route path='/you-cart'>
            <YouCart />
          </Route>

          <Route exact path='/'>
            <HomeShopee />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
