import React, { Component } from "react";
import Header from "../components/Header";
import ListCart from "../components/cart/ListCart";
import { Cart } from "../model/Cart";
import { cartService } from "../service/CartService";
import { Product } from "../model/Product";
import { productService } from "../service/ProductService";

class yourcart extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    let listCart = cartService.list();
    this.state = {
      listCart: listCart,
      true: true,
    };
    if (listCart == []) {
      this.state = {
        listCart: listCart,
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
