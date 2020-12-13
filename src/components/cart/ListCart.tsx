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
    this.state = {
      sumQuantityProduct: 0,
      carts: listCart,
      totalPrice: 0,
    };
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
  findProductByID = (id: string) => {
    let listProduct = JSON.parse(localStorage.getItem("products") || "");
    let product = listProduct.find((item: any) => {
      return item.id === id;
    });
    return product;
  };

  sumPrice = () => {
    let total = 0;
    let listItems = cartService.list();
    total = listItems
      .map((item: any) => {
        let infoProduct = this.findProductByID(item.id);
        return Number(infoProduct.afterSale * item.quantityProduct);
      })
      .reduce((x: number, y: number) => {
        return x + y;
      });
    return total;
  };

  render() {
    return (
      <div className='container-card'>
        <h1 className='title'>Giỏ hàng của bạn</h1>
        {this.props.listCart.map((Item) => {
          return (
            <CartItem
              {...Item}
              idProduct={Item.idProduct}
              onQuantityProductAfterSale={(event) => {
                var getPrice = this.sumPrice();
                this.setState({ ...this.state, totalPrice: getPrice });
              }}
            />
          );
        })}

        <p>{this.sumPrice()}</p>
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
