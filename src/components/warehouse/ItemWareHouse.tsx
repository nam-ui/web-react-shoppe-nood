import React, { Component } from "react";
import { Product } from "../../model/Product";
import DeleteIcon from "@material-ui/icons/Delete";
import { productService } from "../../service/ProductService";
class ItemWareHouse extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className='productCard'>
        <img src={this.props.propsProduct.images} alt='' />
        <div className='name'>
          <p> {this.props.propsProduct.name} </p>
          <span> {this.props.propsProduct.percentageDiscount} % </span>
        </div>
        <div className='price'>
          <span className='price'>{this.props.propsProduct.salePrice}</span>
          <span className='salePrice'>{this.props.propsProduct.price}</span>
        </div>
        <div
          className='btn btn-primary-solid btn-Rounded btn-default'
          onClick={() => {
            this.props.onChangeDialogUpdate(true);
            this.props.onEditProduct(this.props.propsProduct.id);
          }} >
          Chỉnh sửa
        </div>
        <button
          onClick={(event: any) => {
            productService.remove(this.props.propsProduct.id);
            window.location.href = "http://localhost:3000/ware-house";
          }}
        >
          <DeleteIcon />
        </button>
      </div>
    );
  }
}
type Props = {
  propsProduct: Product;
  onChangeDialogUpdate(event: boolean): void;
  onEditProduct(id: string): void;
};
type State = Product;
export default ItemWareHouse;
