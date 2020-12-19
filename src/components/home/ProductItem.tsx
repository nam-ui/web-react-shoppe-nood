import React, { Component } from "react";
import { Product } from "../../model/Product";
import { Cart } from "../../model/Cart";
import { productService } from "../../service/ProductService";
import { cartService } from "../../service/CartService";
class Item extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      cartItem: {
        idProduct: this.props.idProduct,
        quantityProduct: 1,
      },
      objItem: {
        idProduct: this.props.idProduct,
        afterSale: this.props.afterSale,
        beforSale: this.props.beforSale,
        imgProduct: this.props.imgProduct,
        nameProduct: this.props.nameProduct,
        percentageDiscount: this.props.percentageDiscount,
      },
    };
    let LocalShooppeCart = cartService.list();
    LocalShooppeCart.map((item: any) => {
      if (item == this.state.cartItem.idProduct) {
        this.state = {
          cartItem: {
            idProduct: this.props.idProduct,
            quantityProduct: item.quantityProduct,
          },
          objItem: {
            idProduct: this.props.idProduct,
            afterSale: this.props.afterSale,
            beforSale: this.props.beforSale,
            imgProduct: this.props.imgProduct,
            nameProduct: this.props.nameProduct,
            percentageDiscount: this.props.percentageDiscount,
          },
        };
      }
    });
  }

  render() {
    return (
      <div className='productCard'>
        <img src={this.props.imgProduct} alt='' />
        <div className='nameProduct'>
          <p> {this.props.nameProduct} </p>
          <p>{this.props.idProduct} </p>
        </div>
        <div className='price'>
          <span className='afterSale'> {this.props.afterSale} </span>
          <span className='beforSale'> {this.props.beforSale}</span>
        </div>
        <div
          className='btn btn-primary-solid btn-Rounded btn-default'
          onClick={(event) => {
            cartService.updateQuantityCart(this.state.cartItem, this.props);
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
  objItem: Product;
  cartItem: Cart;
};
export default Item;
