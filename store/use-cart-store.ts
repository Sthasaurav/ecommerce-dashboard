"use client";

import { ICart, ICartItem } from "@/type/cart.type";
import { toast } from "react-toastify";
import { create } from "zustand";

interface State {
  cart: ICartItem[];
  totalItems: number;
  totalPrice: number;
}

interface Actions {
  initializeCart: () => void;
  addToCart: (item: ICartItem) => void;
  removeFromCart: (item: ICartItem) => void;
  increaseItem: (item: ICartItem) => void;
  decreaseItem: (item: ICartItem) => void;
  updateQuantity: (id: number, newQuantity: number) => void;
}

const INITIAL_STATE: State = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

const calculateTotals = (cart: ICartItem[]) => {
  const totalItems = cart.reduce((sum, item) => sum + item.productQuantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.productQuantity,
    0,
  );

  return { totalItems, totalPrice };
};

const persistCart = (cart: ICartItem[]) => {
  const { totalItems, totalPrice } = calculateTotals(cart);
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("totalItem", JSON.stringify(totalItems));
  localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
};

export const useCartStore = create<State & Actions>((set, get) => ({
  ...INITIAL_STATE,

  initializeCart: () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const { totalItems, totalPrice } = calculateTotals(cart);

    set({ cart, totalItems, totalPrice });
  },

  addToCart: async (product) => {
    const { cart } = get();

    const exists = cart.find((item) => item.productId === product.productId);

    const updatedCart = exists
      ? cart.map((item) =>
          item.productId === product.productId
            ? { ...item, productQuantity: item.productQuantity + 1 }
            : item,
        )
      : [...cart, { ...product, productQuantity: 1 }];

    persistCart(updatedCart);
    const totals = calculateTotals(updatedCart);

    set({ cart: updatedCart, ...totals });
  },

  increaseItem: async (product) => {
    const { cart } = get();

    const updatedCart = cart.map((item) =>
      item.productId === product.productId
        ? { ...item, productQuantity: item.productQuantity + 1 }
        : item,
    );

    persistCart(updatedCart);
    const totals = calculateTotals(updatedCart);
    set({ cart: updatedCart, ...totals });
  },

  decreaseItem: async (product) => {
    const { cart } = get();

    const updatedCart = cart
      .map((item) =>
        item.productId === product.productId
          ? { ...item, productQuantity: item.productQuantity - 1 }
          : item,
      )
      .filter((item) => item.productQuantity > 0);

    persistCart(updatedCart);
    const totals = calculateTotals(updatedCart);
    set({ cart: updatedCart, ...totals });
  },

  removeFromCart: async (product) => {
    const { cart } = get();

    const updatedCart = cart.filter(
      (item) => item.productId !== product.productId,
    );

    persistCart(updatedCart);
    const totals = calculateTotals(updatedCart);
    set({ cart: updatedCart, ...totals });
  },

  updateQuantity: (id, newQuantity) => {
    const { cart } = get();

    const updatedCart = cart.map((item) =>
      item.productId === id ? { ...item, productQuantity: newQuantity } : item,
    );

    persistCart(updatedCart);
    const totals = calculateTotals(updatedCart);

    set({ cart: updatedCart, ...totals });
  },
}));
