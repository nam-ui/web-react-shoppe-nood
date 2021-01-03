import React, { Component } from "react";
import ItemWareHouse from "../../components/warehouse/ItemWareHouse";
import { Product } from "../../model/Product";
import { Cart } from "../../model/Cart";
import Item from "../home/ProductItem";

class WareHouseProduct extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      products: this.props.products,
      propsShowDiaLogUpdate: false,
      onChangeDialogUpdate: "",
    };
  }

  render() {
    return (
      <div className='products'>
        {this.props.products.map((item) => {

          return (
            < ItemWareHouse
              propsProduct={item}
              onEditProduct={(event) => {
                this.props.onChangeDialogID(event);
              }}
              onChangeDialogUpdate={(event) => {
                event = true;
                this.props.onChangeDialogUpdate(event);
              }}
            />
          );
        })}
      </div>
    );
  }
}
type State = {
  products: Product[];
  propsShowDiaLogUpdate: boolean;
  onChangeDialogUpdate: string;
};
type Props = {
  products: Product[];
  onChangeDialogUpdate(event: boolean): void;
  onChangeDialogID(event: string): void;
};

export default WareHouseProduct;
