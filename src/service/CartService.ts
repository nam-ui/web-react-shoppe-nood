import { Cart } from "../model/Cart";
export class CartService {
  list(): Cart[] {
    let jsonCart = localStorage.getItem("Cart") || "[]";
    let listCart = JSON.parse(jsonCart);
    return listCart;
  }
  update(id: string, product: Cart) {
    
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
}

export const cartService = new CartService();

