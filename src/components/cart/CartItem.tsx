import React, { Component } from "react";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";

class CartItem extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    let LocalPhone = localStorage.getItem("Shopee");
    let LocalShooppe = JSON.parse(LocalPhone || "[]");
    LocalShooppe.map((item: any, index: number) => {
      if (this.props.idProduct == item.idProduct) {
        this.state = {
          idProduct: item.idProduct,
          quantityProduct: this.props.quantityProduct,
          nameProduct: item.nameProduct,
          imgProduct: item.imgProduct,
          beforSale: item.beforSale,
          afterSale: item.afterSale,
          percentageDiscount: item.percentageDiscount,
        };
      }
    });
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
                <img src={this.state.imgProduct} alt='' className='img' />
              </div>
            </div>
            <div className='detailInfor'>
              <span>{this.state.nameProduct}</span>
            </div>
            <div className='detailInfor'>
              <span className='afterSale'>{this.state.afterSale} đ</span>
              <span className='beforSale'> {this.state.beforSale} đ</span>
            </div>
            <div className='detailInfor'>
              <input
                type='number'
                min={1}
                id='quantityProduct'
                defaultValue={this.state.quantityProduct}
                onChange={(event) => {
                  this.setState({
                    quantityProduct: event.target.valueAsNumber,
                  });
                  let MangMS = new Array();
                  let localForMe = localStorage.getItem("Cart");
                  let listShopee = JSON.parse(localForMe || "[]");
                  listShopee.map((item: any) => {
                    if (item.idProduct == this.state.idProduct) {
                      item.quantityProduct = this.state.quantityProduct;
                      MangMS.push(item);
                      localStorage.setItem("Cart", JSON.stringify(MangMS));
                    }
                    if (item.idProduct != this.state.idProduct) {
                      MangMS.push(item);
                      localStorage.setItem("Cart", JSON.stringify(MangMS));
                    }

                    {
                      this.props.onQuantityProductAfterSale(
                        (this.state.quantityProduct || 0) *
                          (this.state.afterSale || 0)
                      );
                    }
                  });
                }}
              />
            </div>
            <div className='detailInfor'>
              <span>
                {(this.state.quantityProduct || 0) *
                  (this.state.afterSale || 0)}
              </span>
            </div>
            <div className='detailInfor'>
              <i className='fas fa-trash' aria-hidden='true' />
            </div>
          </div>
          <div className='cart'>
            <div className='detailInfor'>{/* <h1>Tổng</h1> */}</div>
            <div className='detailInfor' id='totalAmounts'>
              {/* <h1>{(this.state.quantityProduct || 0) * (this.state.afterSale || 0)}</h1> */}
            </div>
            <div className='detailInfor' />
            <div
              className='item-delete'
              onClick={() => {
                let NewArray = new Array();
                let LocalPhone = localStorage.getItem("Cart");
                let LocalShooppe = JSON.parse(LocalPhone || "[]");
                LocalShooppe.map((item: any) => {
                  if (this.props.idProduct != item.idProduct) {
                    NewArray.push(item);
                    console.log(NewArray);
                  }
                  localStorage.setItem("Cart", JSON.stringify(NewArray));
                  alert("Chúc mừng mày DELTE thêm thành công");
                  window.location.href = "http://localhost:3000/YouCart";
                });
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
  idProduct?: string;
  quantityProduct?: number;
  nameProduct?: string;
  imgProduct?: string;
  beforSale?: number;
  afterSale?: number;
  percentageDiscount?: number;
};

export default CartItem;
