import React, { Component } from "react";
import ProductItem from "./ProductItem";
import { Product } from "../../model/Product";

class ProductItems extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      products: this.props.products,
    };
    console.log(this.state.products);
  }

  render() {
    return (
      <div className='products'>
        {this.props.products.map((item) => {
          return <ProductItem {...item} />;
        })}
      </div>
    );
  }
}
type State = {
  products: Product[];
};
type Props = {
  products: Product[];
};

export default ProductItems;
