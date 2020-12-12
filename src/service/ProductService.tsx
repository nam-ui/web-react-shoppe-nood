import { Product } from "../model/Product";

export class ProductService {
  list(): Product[] {
    let jsonProducts = localStorage.getItem("products") || "[]";
    let products = JSON.parse(jsonProducts);
    return products;
  }
  add(product: Product) {
    let objProduct = {
      idProduct: new Date().getTime() + "",
      afterSale: product.afterSale,
      beforSale: product.beforSale,
      imgProduct: product.imgProduct,
      nameProduct: product.nameProduct,
      percentageDiscount: (product.beforSale || 0) * (product.afterSale || 0),
    };
    const updatedProducts = this.list();
    updatedProducts.push(objProduct);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  }

  update(id: string, product: Product) {
    const listProduct = this.list();
    let newArray = new Array();
    listProduct.map((item: any) => {
      item.idProduct == product.idProduct
        ? newArray.push(product)
        : newArray.push(item);
    });
    localStorage.setItem("products", JSON.stringify(newArray));
  }
  remove(id: string) {
    let newArray = new Array();
    const listProduct = this.list();
    listProduct.map((item: any) => {
      item.idProduct == id ? console.log(id) : newArray.push(item);
    });
    localStorage.setItem("products", JSON.stringify(newArray));
  }

  // get(id: string) {
  //   let newArray = new Array();
  //   let jsonProducts = localStorage.getItem("Cart") || "[]";
  //   let products = JSON.parse(jsonProducts);
  //   let quantityProduct = 1;
  //   products.map((item: any) => {
  //     id = item.idProduct
  //       ? (quantityProduct = item.quantityProduct)
  //       : console.log();
  //   });
  //   let ArrayNew = {
  //     idProduct: id,
  //     quantityProduct: quantityProduct,
  //   };
  //   const listProduct = this.list();
  //   listProduct.map((item: any) => {
  //     if (item.idProduct == id) {
  //       item.quantityProduct = item.quantityProduct++;
  //     }
  //   });
  //   let KiemTre = false;
  //   let isExist = false;
  //   listProduct.forEach((item: any) => {
  //     if (item.idProduct == id) {
  //       ArrayNew.quantityProduct = item.quantityProduct++;
  //       localStorage.setItem("Cart", JSON.stringify(listProduct));
  //       alert("Chúc mừng mày đả Tăng thành công");
  //       isExist = true;
  //     }
  //     if (!isExist) {
  //       let objShopee = ArrayNew;
  //       listProduct.push(objShopee);
  //       localStorage.setItem("Cart", JSON.stringify(listProduct));
  //       alert("Chúc mừng mày đả thêm thành công");
  //     }
  //     if (item.idProduct != id) {
  //       KiemTre = true;
  //     }
  //   });
  // }
}

export const productService = new ProductService();
