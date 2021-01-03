import React, { Component } from "react";
import { Product } from "../../model/Product";
import { productService } from "../../service/axios/ProductService";
class UpdateItem extends Component<Props, State> {
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
  componentDidMount() {
    productService.getById(this.props.propsProductID).then(product => {
      console.log(product)
      this.setState(product)
    })
  }

  render() {
    return (
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
          {console.log(this.state)}
          <div className='item'>
            <label htmlFor='salePrice'>Giá bán</label>
            <input
              type='number'
              id='salePrice'
              name='salePrice'
              value={this.state.salePrice}
              onChange={(event) => [
                this.setState({ salePrice: event.target.valueAsNumber }),
              ]}
            />
          </div>
          <div className='item'>
            <label htmlFor='price'>Giá gốc</label>
            <input
              type='number'
              id='price'
              name='price'
              value={this.state.price}
              onChange={(event) => [
                this.setState({ price: event.target.valueAsNumber }),
              ]}
            />
          </div>
          <div className='item'>
            <label htmlFor='images'>Hình ảnh sản phẩm</label>
            <input
              type='url'
              id='images'
              name='images'
              defaultValue={this.state.images}
              onChange={(event) => [
                this.setState({ images: event.target.value }),
              ]}
            />
          </div>
          <div className='button-item'>
            <button
              className='btn btn-primary'
              onClick={() => {
                console.log(this.state)
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
