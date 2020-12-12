import React, { Component } from "react";
import Header from "../components/home/Header";
import Pooter from "../components/home/Pooter";
import Slider from "../components/home/Slider";
import ProductItem from "../components/home/ProductItems";
import { type } from "os";
import { Product } from "../model/Product";
import { Cart } from "../model/Cart";

class home extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      products: [],
    };
    let LocalPhone = localStorage.getItem("Shopee");
    let LocalShooppe = JSON.parse(LocalPhone || "[]");
    this.state = {
      products: LocalShooppe,
    };
    console.log(this.state.products);
  }

  render() {
    return (
      <div id='home-pages'>
        <Header />
        <Slider />
        <ProductItem products={this.state.products} />
        <Pooter />
      </div>
    );
  }
}
type State = {
  products: Product[];
};

export default home;
