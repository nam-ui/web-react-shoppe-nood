import React, { Component } from "react";
import { Product } from "../../model/Product";
import { productService } from "../../service/ProductService";
class UpdateItem extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      id: "",
      afterSale: 1000,
      beforeSale: 0,
      img: "",
      name: "",
      percentageDiscount: 0,
    };
    let LocalShooppe = productService.list();
    LocalShooppe.map((item: any) => {
      this.props.propsProductID == item.id
        ? (this.state = { ...item })
        : console.log(item.name);
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
              id='name'
              name='name'
              defaultValue={this.state.name}
              onChange={(event) => [
                this.setState({ name: event.target.value }),
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
            <label htmlFor='beforeSale'>Giá gốc</label>
            <input
              type='number'
              id='beforeSale'
              name='beforeSale'
              defaultValue={this.state.beforeSale}
              onChange={(event) => [
                this.setState({ beforeSale: event.target.valueAsNumber }),
              ]}
            />
          </div>
          <div className='item'>
            <label htmlFor='img'>Hình ảnh sản phẩm</label>
            <input
              type='url'
              id='img'
              name='img'
              defaultValue={this.state.img}
              onChange={(event) => [
                this.setState({ img: event.target.value }),
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
