import React, { Component } from "react";
import { Product } from "../../model/Product";
import { productService } from "../../service/ProductService";
class UpdateItem extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      idProduct: "",
      afterSale: 1000,
      beforSale: 0,
      imgProduct: "",
      nameProduct: "",
      percentageDiscount: 0,
    };
    let LocalPhone = localStorage.getItem("products");
    let LocalShooppe = JSON.parse(LocalPhone || "[]");
    LocalShooppe.map((item: any) => {
      console.log(item);
      this.props.propsProductID == item.idProduct
        ? (this.state = { ...item })
        : console.log(item.nameProduct);
    });
  }
  render() {
    return (
      // display: this.props.showDialogUppdate ? 'block' : 'none'
      <div className='mark' style={{}}>
        <div className='content-updateitem'>
          <h1 className='title'>Chỉnh sửa thông tin sản phẩm</h1>
          <div className='item'>
            <label htmlFor='name'>Tên sản phẩm</label>
            <input
              type='text'
              id='nameProduct'
              name='name'
              defaultValue={this.state.nameProduct}
              onChange={(event) => [
                this.setState({ nameProduct: event.target.value }),
              ]}
            />
          </div>
          <div className='item'>
            <label htmlFor='afterSale'>Giá bán</label>
            <input
              type='number'
              id='afterSale'
              name='afterSale'
              defaultValue={this.state.afterSale}
              onChange={(event) => [
                this.setState({ afterSale: event.target.valueAsNumber }),
              ]}
            />
          </div>
          <div className='item'>
            <label htmlFor='beforSale'>Giá gốc</label>
            <input
              type='number'
              id='beforSale'
              name='beforSale'
              defaultValue={this.state.beforSale}
              onChange={(event) => [
                this.setState({ beforSale: event.target.valueAsNumber }),
              ]}
            />
          </div>
          <div className='item'>
            <label htmlFor='imgProduct'>Hình ảnh sản phẩm</label>
            <input
              type='url'
              id='imgProduct'
              name='imgProduct'
              defaultValue={this.state.imgProduct}
              onChange={(event) => [
                this.setState({ imgProduct: event.target.value }),
              ]}
            />
          </div>
          <div className='button-item'>
            <button
              className='btn btn-primary'
              onClick={() => {
                productService.update(this.props.propsProductID, this.state);
                alert("Chúc mừng mày đả sửa thành công");
                window.location.href = "/ware-house";
              }}
            >
              Lưu
            </button>
            <button
              className='btn btn-outline'
              onClick={(event) => {
                this.props.onChangeExitDiaLogUpdate(true);
              }}
            >
              Hủy
            </button>
          </div>
        </div>
      </div>
    );
  }
}
type Props = {
  onChangeExitDiaLogUpdate(event: boolean): void;
  propsProductID: string;
};
type State = Product;

export default UpdateItem;
