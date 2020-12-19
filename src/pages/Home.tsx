import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/home/Slider";
import ProductItems from "../components/home/ProductItems";
import { type } from "os";
import { Product } from "../model/Product";
import { Cart } from "../model/Cart";
import { productService } from "../service/ProductService";
class Home extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      products: [],
    };
    let localShooppe = productService.list();
    this.state = {
      products: localShooppe,
    };
    console.log(this.state.products);
  }
  render() {
    return (
      <div id='home-pages'>
        <Header />
        <Slider />
        <ProductItems products={this.state.products} />
        <Footer />
      </div>
    );
  }
}
type State = {
  products: Product[];
};

export default Home;
