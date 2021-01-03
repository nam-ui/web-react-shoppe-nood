import React, { Component } from "react";
import { Product } from "../../model/Product";
import { Cart } from "../../model/Cart";
import { productService } from "../../service/ProductService";
import { cartService } from "../../service/CartService";
class ProductItem extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className='productCard'>
        <img src={this.props.images} alt='' />
        {console.log(this.props)}
        <div className='name'>
          <p> {this.props.name} </p>

        </div>
        <div className='price'>
          <span className='salePrice'> {this.props.salePrice} </span>
          <span className='price'> {this.props.price}</span>
        </div>
        <div
          className='btn btn-primary-solid btn-Rounded btn-default'
          onClick={(event) => {

            cartService.addToCart(this.props.id);
          }}
        >
          Đưa vào giỏ hàng
        </div>
      </div>
    );
  }
}
type Props = Product;

type State = {
};
export default ProductItem;
