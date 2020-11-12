import React, { Component } from 'react';
import { Product } from '../../model/Product';



class Item extends Component<Props, State>  {
    constructor(props: Props) {
        super(props);

    }

    render() {
        return (
            <div className="productCard">
                <img src="https://assets.swappie.com/iPhone-8-Plus-256GB-Gold-1-1.png" alt="" />
                <div className="nameProduct">
                    <p>Sản phẩm 1</p>
                </div>
                <div className="price">

                    <span className="afterSale">3.000.000đ</span>
                    <span className="beforSale">5.000.000đ</span>

                </div>
                <div className="btn btn-primary-solid btn-Rounded btn-default">
                    Đưa vào giỏ
                </div>
            </div>
        );
    }
}
type Props = Product
type State = Product
export default Item;