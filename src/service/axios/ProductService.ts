import { Product } from "../model/../../model/Product";
import axios from 'axios';


export class ProductService {
  list(): Promise< Product[]> {
    return  axios.get('http://localhost:5030/product').then(res =>{
      return res.data
    })
  }
  add(product: Product)  : Promise<Product> {
    return axios.post('http://localhost:5030/product/', product)
  }

  update(id: string, product: Product) {
    return axios.put(`http://localhost:5030/product/` , product).then(res =>{
      return res.data
    })
  //   return axios.put(
  //     'http://localhost:5030/' + 'product/' + `${id}` , 
  //     product, 
  //     {
  //         headers: product
  //     }
  // ).then(response => {
  //  return response.data
  // })

  }
  remove(id: string) {
    return axios.delete(`http://localhost:5030/product/${id}`)
  }
  getById(id : string ) :Promise<Product> {
    return axios.get(`http://localhost:5030/product/${id}` ).then(res=>{return res.data})
  }

}

export const productService = new ProductService();
