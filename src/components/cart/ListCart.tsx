import React, { Component } from "react";
import CartItem from "../cart/CartItem";
import Item from "../home/ProductItem";
import { Product } from "../../model/Product";
import { Cart } from "../../model/Cart";
class ListCart extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    let LocalPhoneCart = localStorage.getItem("Cart");
    let LocalShooppeCart = JSON.parse(LocalPhoneCart || "[]");

    this.state = {
      sumQuantityProduct: 0,
      carts: LocalShooppeCart,
      totalPrice: 0,
    };
    // let MangMS = new Array();
    // LocalShooppeCart.map((item: any) => {
    //   MangMS.push(item);
    // });
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
    let listProduct = JSON.parse(localStorage.getItem("Shopee") || "");

    let product = listProduct.find((item: any) => {
      return item.id === id;
    });

    return product;
  };

  sumPrice = () => {
    let total = 0;
    let listItems = JSON.parse(localStorage.getItem("Cart") || "");

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
        {console.log(this.state)}
        {
          // this.onChangeOBJRoomString(100)
        }
        <h1 className='title'>Giỏ hàng của bạn</h1>
        {this.props.listCart.map((Item) => {
          return (
            <CartItem
              {...Item}
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
