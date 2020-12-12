import React, { Component } from "react";
import Header from "../components/home/Header";
import ListCart from "../components/cart/ListCart";
import { Product } from "../model/Product";
import { Cart } from "../model/Cart";
import { productService } from "../service/ProductService";
class yourcart extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      listCart: [],
      true: true,
    };
    let LocalPhone = localStorage.getItem("Cart");
    let LocalShooppe = JSON.parse(LocalPhone || "[]");

    this.state = {
      listCart: LocalShooppe,
      true: true,
    };
    if (LocalShooppe == []) {
      this.state = {
        listCart: LocalShooppe,
        true: false,
      };
    }
  }

  render() {
    return (
      <div className='container-list-cart'>
        <Header></Header>
        {this.state.true == true && (
          <ListCart listCart={this.state.listCart}></ListCart>
        )}
      </div>
    );
  }
}

type State = {
  listCart: Cart[];
  true: boolean;
};

export default yourcart;
