import React, { Component } from "react";
import Item from "./ProductItem";
import { Product } from "../../model/Product";

class productItem extends Component<Props, State> {
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
        {this.state.products.map((item) => {
          return <Item {...item} />;
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

export default productItem;
