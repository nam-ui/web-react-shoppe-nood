import { Product } from "../model/Product";


export class ProductService {
  list(): Product[] {
    let jsonProducts = localStorage.getItem("products") || "[]";
    let products = JSON.parse(jsonProducts);
    return products;
  }
  add(product: Product) {
    let objProduct = {
      id: new Date().getTime() + "",
      afterSale: product.afterSale,
      beforeSale: product.beforeSale,
      img: product.img,
      name: product.name,
      percentageDiscount: (product.beforeSale || 0) * (product.afterSale || 0),
    };
    const updatedProducts = this.list();
    updatedProducts.push(objProduct);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  }

  update(id: string, product: Product) {
    const listProduct = this.list();
    let newArray = new Array();
    listProduct.map((item: any) => {
      item.id == product.id
        ? newArray.push(product)
        : newArray.push(item);
    });
    localStorage.setItem("products", JSON.stringify(newArray));
  }
  remove(id: string) {
    let newArray = new Array();
    const listProduct = this.list();
    listProduct.map((item: any) => {
      item.id == id ? console.log(id) : newArray.push(item);
    });
    localStorage.setItem("products", JSON.stringify(newArray));
  }

  get(id: string): Product {
    const listProduct = this.list();
    let newArray: Product = {
      id: id,
    };
    listProduct.map((item: any) => {
      item.id == id ? (newArray = item) : console.log(id);
    });
    return newArray;
  }
}

export const productService = new ProductService();
