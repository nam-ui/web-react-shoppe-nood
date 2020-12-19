import { Cart } from "../model/Cart";
import { Product } from "../model/Product";

export class CartService {
  list(): Cart[] {
    let jsonCart = localStorage.getItem("Cart") || "[]";
    let listCart = JSON.parse(jsonCart);
    return listCart;
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


  updateQuantityCart(cart : Cart , props : Product ){
    const listCart = cartService.list();
    let ArrayNew = {
      idProduct: cart.idProduct,
      quantityProduct: cart.quantityProduct,
    };
    let listShopee = cartService.list();
    listShopee.map((item: any) => {
      if (item.idProduct == props.idProduct) {
        item.quantityProduct = item.quantityProduct++;
      }
    });
    let KiemTre = false;
    let isExist = false;
    listShopee.forEach((item: any) => {
      if (item.idProduct == props.idProduct) {
        ArrayNew.quantityProduct = item.quantityProduct++;
        localStorage.setItem("Cart", JSON.stringify(listShopee));
        alert("Chúc mừng mày đả Tăng thành công");
        isExist = true;
      }
      if (item.idProduct != props.idProduct) {
        KiemTre = true;
      }
    });
    if (!isExist) {
      let objShopee = ArrayNew;
      listShopee.push(objShopee);
      localStorage.setItem("Cart", JSON.stringify(listShopee));
      alert("Chúc mừng mày đả thêm thành công");
    }
    
    
  }
    






  }






export const cartService = new CartService();

