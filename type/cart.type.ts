export interface ICart {
  id: number;
  productId: number;
  netPrice: string;
  cartItems: ICartItem[];
}

export interface ICartItem {
  productId: number;
  title: string;
  price: string;
  image: string;
  productQuantity: number;
}
