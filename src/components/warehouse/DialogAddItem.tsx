import { type } from "os";
import React, { Component } from "react";
import { Product } from "../../model/Product";
import { productService } from "../../service/axios/ProductService";
class DialogAddItem extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      id: "",
      salePrice: 1000,
      price: 0,
      images: "",
      name: "",
      percentageDiscount: 0,
    };
  }
  render() {
    return (
      <div>
        <div
          className='mark'
          style={{ display: this.props.showDialog ? "block" : "none" }}
        >
          <div className='dialog-add-shopee'>
            <h1 className='title'>Nhập thông tin sản phẩm</h1>
            <div className='item'>
              <label htmlFor='name'>Tên sản phẩm</label>
              <input
                onChange={(event) => {
                  this.setState({
                    name: event.target.value,
                  });
                }}
                type='text'
                id='name'
                name='name'
                placeholder='Nhập tên sản phẩm'
              />
            </div>
            <div className='item'>
              <label htmlFor='salePrice'>Giá bán</label>
              <input
                onChange={(event) => {
                  this.setState({
                    price: event.target.valueAsNumber,
                  });
                }}
                type='number'
                id='salePrice'
                name='salePrice'
                placeholder='Nhập giá bán'
              />
            </div>
            <div className='item'>
              <label htmlFor='price'>Giá gốc</label>
              <input
                onChange={(event) => {
                  this.setState({
                    salePrice: event.target.valueAsNumber,
                  });
                }}
                type='number'
                id='price'
                name='price'
                placeholder='Nhập giá gốc'
              />
            </div>
            <div className='item'>
              <label htmlFor='images'>Hình ảnh sản phẩm</label>
              <input
                onChange={(event) => {
                  this.setState({
                    images: event.target.value,
                  });
                }}
                type='url'
                id='images'
                name='images'
                placeholder='Nhập link hình ảnh sản phẩm (Khuyến khích ảnh dạng hình vuông)'
              />
            </div>
            <div className='button-item'>
              <button
                className='btn btn-primary'
                onClick={(event) => {
                  productService.add(this.state);
                  alert("Chúc mừng mày đả thêm thành công");
                  window.location.href = "http://localhost:3000/ware-house";
                }}
              >
                Tạo sản phẩm mới
              </button>
              <button
                className='btn btn-outline'
                onClick={() => {
                  this.props.onChangeExit(this.props.showDialog);
                }}
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
type Props = {
  showDialog: boolean;
  onChangeExit(exit: boolean): void;
};
type State = Product;

export default DialogAddItem;
