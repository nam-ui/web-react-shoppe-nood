import { Cart } from "../model/Cart";
import { Product } from "../model/Product";

export class CartService {
  list(): Cart[] {
    let jsonCart = localStorage.getItem("Cart") || "[]";
    let listCart = JSON.parse(jsonCart);
    return listCart;
  }

  updateQuantityCart(id: string){

  }
  remove(id: string) {
    let NewArray  = new Array();
    const listCart = this.list()
    listCart.map((item : Cart) =>{  if (
      id != item.idProduct) {
      NewArray.push(item);
    }})
    localStorage.setItem("Cart", JSON.stringify(NewArray));
    alert("Chúc mừng mày DELTE thêm thành công");
    window.location.href = "http://localhost:3000/you-cart";
    return NewArray;
  }
  get(id: string): Cart {
    const listProduct = this.list();
    let newArray: Cart = {
      idProduct : "" ,
      quantityProduct : 1
    }
    listProduct.map((item: any) => {
      item.idProduct == id ? (newArray = item) : console.log(id);
    });
    return newArray;
  }
  update(id: string, product: Product , props : any , quantityProduct : number) {
    let MangMS = new Array();
    const listCart = cartService.list();
    listCart.map((item: any) => {
        if (item.idProduct == id) {
          item.quantityProduct = quantityProduct;
          MangMS.push(item);
          localStorage.setItem("Cart", JSON.stringify(MangMS));
        }
        if (item.idProduct != id) {
          MangMS.push(item);
          localStorage.setItem("Cart", JSON.stringify(MangMS));
        }
        {
          props.onQuantityProductAfterSale(
            (quantityProduct || 0) *
              (product.afterSale || 0)
          );
        }
      });

  }
}




// let MangMS = new Array();
// let listCart = cartService.list();
// listCart.map((item: any) => {
//   if (item.idProduct == this.state.product.idProduct) {
//     item.quantityProduct = this.state.quantity;
//     MangMS.push(item);
//     localStorage.setItem("Cart", JSON.stringify(MangMS));
//   }
//   if (item.idProduct != this.state.product.idProduct) {
//     MangMS.push(item);
//     localStorage.setItem("Cart", JSON.stringify(MangMS));
//   }
//   {
//     this.props.onQuantityProductAfterSale(
//       (this.state.quantity || 0) *
//         (this.state.product.afterSale || 0)
//     );
//   }
// });

export const cartService = new CartService();

