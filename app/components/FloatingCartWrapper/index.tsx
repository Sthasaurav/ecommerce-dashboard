"use client";

import { useEffect, useState } from "react";
import { useCartStore } from "@/store/use-cart-store";
import CartIcon from "../floating-cart";

export default function FloatingCartWrapper() {
  const [open, setOpen] = useState(false);

  const {
    cart,
    totalPrice,
    initializeCart,
    increaseItem,
    decreaseItem,
    removeFromCart,
  } = useCartStore();

  useEffect(() => {
    initializeCart();
  }, [initializeCart]);

  return (
    <>
      {/* Floating Button */}
      <div className="group fixed right-6 bottom-6 z-50 space-y-14">
        <button
          onClick={() => setOpen(true)}
          className="bg-primary flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/20 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95"
        >
          <CartIcon />
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40">
          <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold">Your Cart</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-xl font-bold hover:text-red-500"
              >
                ✕
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="text-center text-gray-500">Your cart is empty</p>
            ) : (
              <>
                <div className="max-h-[60vh] space-y-3 overflow-y-auto">
                  {cart.map((item) => (
                    <div
                      key={item.productId}
                      className="flex items-center justify-between space-x-4 rounded-lg border p-3"
                    >
                      {/* <div className="flex items-center justify-center rounded-2xl border bg-gray-50 p-6 shadow-sm"> */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-12 object-contain transition hover:scale-105"
                      />
                      {/* </div> */}
                      <div className="flex-1">
                        <p className="line-clamp-1 text-sm font-medium">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          Rs. {item.price}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => decreaseItem(item)}
                          disabled={item.productQuantity === 1}
                          className="h-6 w-6 rounded border hover:bg-gray-100 disabled:opacity-40"
                        >
                          -
                        </button>

                        <span className="w-6 text-center text-sm">
                          {item.productQuantity}
                        </span>

                        <button
                          onClick={() => increaseItem(item)}
                          className="h-6 w-6 rounded border hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item)}
                        className="rounded bg-red-500 px-3 py-1 text-xs text-white"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between border-t pt-3">
                  <p className="font-semibold">Total:</p>
                  <p className="text-primary font-bold">
                    Rs. {totalPrice.toFixed(2)}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
