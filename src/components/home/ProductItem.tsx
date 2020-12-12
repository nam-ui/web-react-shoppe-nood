import React, { Component } from 'react';
import { Product } from '../../model/Product';
import { Cart } from '../../model/Cart';


class Item extends Component<Props, State>  {
    constructor(props: Props) {
        super(props);
        this.state = {
            cartItem: {
                idProduct: this.props.idProduct,
                quantityProduct: 1
            },
            objItem: {
                idProduct: this.props.idProduct, afterSale: this.props.afterSale, beforSale: this.props.beforSale, imgProduct: this.props.imgProduct, nameProduct: this.props.nameProduct, percentageDiscount: this.props.percentageDiscount
            }
        }
        let LocalPhoneCart = localStorage.getItem('Cart');
        let LocalShooppeCart = JSON.parse(LocalPhoneCart || '[]');
        console.log(LocalShooppeCart)
        LocalShooppeCart.map((item: any) => {
            if (item == this.state.cartItem.idProduct) {
                this.state = {
                    cartItem: {
                        idProduct: this.props.idProduct,
                        quantityProduct: item.quantityProduct
                    },
                    objItem: {
                        idProduct: this.props.idProduct, afterSale: this.props.afterSale, beforSale: this.props.beforSale, imgProduct: this.props.imgProduct, nameProduct: this.props.nameProduct, percentageDiscount: this.props.percentageDiscount
                    }
                }
            }
        })






    }

    render() {
        return (
            <div className="productCard">
                <img src={this.props.imgProduct} alt="" />
                <div className="nameProduct">
                    <p> {this.props.nameProduct}  </p>
                    <p>{this.props.idProduct}  </p>
                </div>
                <div className="price">

                    <span className="afterSale"> {this.props.afterSale} </span>
                    <span className="beforSale"> {this.props.beforSale}</span>

                </div>
                <div className="btn btn-primary-solid btn-Rounded btn-default" onClick={(event) => {
                    let MangMS = []
                    let ArrayNew = {
                        idProduct: this.state.cartItem.idProduct,
                        quantityProduct: this.state.cartItem.quantityProduct
                    }
                    let localForMe = localStorage.getItem("Cart");
                    let listShopee = JSON.parse(localForMe || "[]");
                    listShopee.map((item: any) => {
                        if (item.idProduct == this.props.idProduct) {
                            item.quantityProduct = item.quantityProduct++
                        }
                    })
                    let KiemTre = false;
                    let isExist = false;
                    listShopee.forEach((item: any) => {
                        if (item.idProduct == this.props.idProduct) {
                            ArrayNew.quantityProduct = item.quantityProduct++
                            localStorage.setItem("Cart", JSON.stringify(listShopee));
                            alert('Chúc mừng mày đả Tăng thành công');
                            isExist = true;
                        }
                        if(item.idProduct != this.props.idProduct){  KiemTre = true }
                    })
                        if(!isExist){
                            let objShopee = ArrayNew
                            listShopee.push(objShopee)
                            localStorage.setItem("Cart", JSON.stringify(listShopee));
                            alert('Chúc mừng mày đả thêm thành công')
                        }
                    // window.location.href = "http://localhost:3000/"
                }}>
                    Đưa vào giỏ hàng

                </div>
            </div>
        );
    }
}
type Props = Product
type State = {
    objItem: Product
    cartItem: Cart
}
export default Item;