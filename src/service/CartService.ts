import { Cart } from "../model/Cart";
import { productService } from "../service/ProductService";
import {Product } from "../model/Product";

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
      id != item.id) {
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
      id : "" ,
      quantityProduct : 1
    }
    listProduct.map((item: any) => {
      item.id == id ? (newArray = item) : console.log(id);
    });
    return newArray;
  }
  update(id: string, product: Product , props : any , quantityProduct : number) {
    let MangMS = new Array();
    const listCart = cartService.list();
    listCart.map((item: any) => {
        if (item.id == id) {
          item.quantityProduct = quantityProduct;
          MangMS.push(item);
          localStorage.setItem("Cart", JSON.stringify(MangMS));
        }
        if (item.id != id) {
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

  setList(listCart : Cart[]) {localStorage.setItem("Cart", JSON.stringify(listCart));}
  addToCart(productId:string ){
    const listCart = cartService.list();
    let isExist = false;
    
    let cart = {
      id: productId  ,
      quantityProduct: 1
    }
    if( listCart.length == 0) {
      listCart.push(cart)
      this.setList(listCart)
      return productId
    }
    listCart.find((item , index)=>{
      if(item.id == productId) {
         item.quantityProduct ++ ;
      let newlist = new Array
      listCart.map( cart =>{newlist.push(cart)});
      this.setList(newlist);
      isExist = true;
      }
      })
      if (!isExist) {
        listCart.push(cart);
        this.setList(listCart);
        alert("Chúc mừng mày đả thêm thành công");
      }
    }

    updateSumPrice(id : string) : any{
    let total = 0;
    let listItems = cartService.list();
    total = listItems
      .map((item: any) => {
        let infoProduct = productService.get(item.id);
        return Number((infoProduct.afterSale  || 1)* item.quantityProduct);
      })
      .reduce((x: number, y: number) => {
        return x + y;
      });
    return total;
    }
    getItemCart(id : string){
      const listCart = this.list();
      let newArray: Cart = {
        id: id,
        quantityProduct : 1
      };
      listCart.map((item: any) => {
        item.id == id ? (newArray = item) : console.log(id);
      });
      return newArray;
    }
  }

export const cartService = new CartService();

