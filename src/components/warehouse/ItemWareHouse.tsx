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
        <img src={this.props.propsProduct.imgProduct} alt='' />
        <div className='nameProduct'>
          <p> {this.props.propsProduct.nameProduct} </p>
          <span> {this.props.propsProduct.percentageDiscount} % </span>
        </div>
        <div className='price'>
          <span className='afterSale'>{this.props.propsProduct.afterSale}</span>
          <span className='beforSale'>{this.props.propsProduct.beforSale}</span>
        </div>
        <div
          className='btn btn-primary-solid btn-Rounded btn-default'
          onClick={() => {
            this.props.onChangeDialogUpdate(true);
            this.props.onEditProduct(this.props.propsProduct.idProduct);
          }}
        >
          Chỉnh sửa
        </div>
        <button
          onClick={(event: any) => {
            productService.remove(this.props.propsProduct.idProduct);
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
