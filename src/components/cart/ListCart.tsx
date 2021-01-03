import React, { Component } from "react";
import CartItem from "../cart/CartItem";
import Item from "../home/ProductItem";
import { Product } from "../../model/Product";
import { Cart } from "../../model/Cart";
import { cartService } from "../../service/CartService";
import { productService } from "../../service/ProductService";
class ListCart extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    let listCart = cartService.list();

    listCart.map((item) => {
      var getPrice = cartService.updateSumPrice(item.id);
      this.state = {
        sumQuantityProduct: 0,
        carts: listCart,
        totalPrice: getPrice,
      };
    })




  }
  componentDidMount() {
    // this.setState({
    //   totalPrice: this.sumPrice(),
    // });
  }
  componentDidUpdate() {
    // this.setState({
    //   totalPrice: this.sumPrice(),
    // });
  }


  render() {
    return (
      <div className='container-card'>
        <h1 className='title'>Giỏ hàng của bạn</h1>
        {this.props.listCart.map((item) => {
          return (
            <CartItem
              {...item}
              id={item.id}
              onQuantityProductsalePrice={(event) => {
                var getPrice = cartService.updateSumPrice(item.id);
                this.setState({ ...this.state, totalPrice: getPrice });
              }}
            />
          );
        })}

        <p>{this.state.totalPrice}</p>
      </div>
    );
  }
}

type Props = {
  listCart: Cart[];
};
type State = {
  sumQuantityProduct: number;
  carts: Cart[];
  totalPrice: number;
};

export default ListCart;
