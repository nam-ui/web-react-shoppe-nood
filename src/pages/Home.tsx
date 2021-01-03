import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/home/Slider";
import ProductItems from "../components/home/ProductItems";
import { type } from "os";
import { Product } from "../model/Product";
import { Cart } from "../model/Cart";
import { productService } from "../service/axios/ProductService";
class Home extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      products: [],
    };
    this.state = {
      products: [],
    };

  }
  componentDidMount() {
    productService.list().then(products => {
      console.log(products)
      this.setState({
        products: products
      })
    })
  }



  render() {
    return (
      <div id='home-pages'>
        <Header />
        <Slider />
        <ProductItems products={this.state.products} />

      </div>
    );
  }
}
type State = {
  products: Product[];
};

export default Home;
