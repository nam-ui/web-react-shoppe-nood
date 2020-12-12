import { Cart } from "../model/Cart";

export class CartService {
  list(): Cart[] {
    return [];
  }


}

export const productService = new CartService();
