import React, { Component } from "react";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import { productService } from "../../service/ProductService";
import { Product } from "../../model/Product";
import { Cart } from "../../model/Cart";
import { cartService } from "../../service/CartService";
class CartItem extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      product: productService.get(this.props.idProduct),
      quantity: this.props.quantityProduct,
    };
  }
  render() {
    return (
      <div className='content'>
        <div className='headList'>
          <div className='item-headList' />
          <div className='item-headList'>
            <span>Sản phẩm</span>
          </div>
          <div className='item-headList'>
            <span>Đơn giá</span>
          </div>
          <div className='item-headList'>
            <span>Số lượng</span>
          </div>
          <div className='item-headList'>
            <span>Tổng tiền</span>
          </div>
          <div className='item-headList'>
            <span>Thao tác</span>
          </div>
        </div>
        <div className='productInfor' id='carts'>
          <div className='cart'>
            <div className='detailInfor'>
              <div className='img-item'>
                <img
                  src={this.state.product.imgProduct}
                  alt=''
                  className='img'
                />
              </div>
            </div>
            <div className='detailInfor'>
              <span>{this.state.product.nameProduct}</span>
            </div>
            <div className='detailInfor'>
              <span className='afterSale'>
                {this.state.product.afterSale} đ
              </span>
              <span className='beforSale'>
                {" "}
                {this.state.product.beforSale} đ
              </span>
            </div>
            <div className='detailInfor'>
              <input
                type='number'
                min={1}
                id='quantityProduct'
                defaultValue={this.state.quantity}
                onChange={(event) => {
                  this.setState({
                    quantity: event.target.valueAsNumber,
                  });
                  let MangMS = new Array();
                  let listCart = cartService.list();
                  listCart.map((item: any) => {
                    if (item.idProduct == this.state.product.idProduct) {
                      item.quantityProduct = this.state.quantity;
                      MangMS.push(item);
                      localStorage.setItem("Cart", JSON.stringify(MangMS));
                    }
                    if (item.idProduct != this.state.product.idProduct) {
                      MangMS.push(item);
                      localStorage.setItem("Cart", JSON.stringify(MangMS));
                    }
                    {
                      this.props.onQuantityProductAfterSale(
                        (this.state.quantity || 0) *
                          (this.state.product.afterSale || 0)
                      );
                    }
                  });
                }}
              />
            </div>
            <div className='detailInfor'>
              <span>
                {(this.state.quantity || 0) *
                  (this.state.product.afterSale || 0)}
              </span>
            </div>
            <div className='detailInfor'>
              <i className='fas fa-trash' aria-hidden='true' />
            </div>
          </div>
          <div className='cart'>
            <div className='detailInfor'></div>
            <div className='detailInfor' id='totalAmounts'></div>
            <div className='detailInfor' />
            <div
              className='item-delete'
              onClick={() => {
                cartService.remove(this.props.idProduct);
              }}
            >
              <DeleteSweepIcon></DeleteSweepIcon>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
type Props = {
  idProduct: string;
  quantityProduct: number;
  onQuantityProductAfterSale(event: number): void;
};
type State = {
  product: Product;
  quantity: number;
};

export default CartItem;
