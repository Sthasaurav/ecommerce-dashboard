"use client";
import React from "react";
import { useCartStore } from "@/store/use-cart-store";
import useFromStore from "@/hook/use-form-store";
import { IoMdCart } from "react-icons/io";

const CartIcon: React.FC = () => {
  // const cartItems = useCartStore(useCartStore,(state) => state.cart);
  const totalItems = useFromStore(
    useCartStore,
    (state) => state.totalItems,
  ) as number;

  if (totalItems <= 0)
    return (
      <div className="">
        <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#ff641c] text-base font-semibold text-white shadow-lg">
          0
        </span>
        <IoMdCart size={30} />
      </div>
    );

  return (
    <div className="">
      <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#ff641c] text-base font-semibold text-white shadow-lg">
        {totalItems}
      </span>
      <IoMdCart size={30} />
    </div>
  );
};

export default CartIcon;
