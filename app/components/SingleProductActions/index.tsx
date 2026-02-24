"use client";

import { IProducts } from "@/type/products.type";
import { useCartStore } from "@/store/use-cart-store";

export default function SingleProductActions({
  product,
}: {
  product: IProducts;
}) {
  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);

  const isInCart = cart.some((item) => item.productId === product.id);

  return (
    <div className="mt-4 flex flex-wrap items-center gap-3">
      <button
        disabled={isInCart}
        onClick={() =>
          addToCart({
            ...product,
            productId: product.id,
            productQuantity: 1,
          })
        }
        className={`rounded-xl px-6 py-3 text-sm font-semibold text-white transition ${
          isInCart
            ? "cursor-not-allowed bg-gray-400"
            : "bg-primary hover:bg-gray-800"
        }`}
      >
        {isInCart ? "Added to Cart" : "Add to Cart"}
      </button>

      <button className="rounded-xl border px-6 py-3 text-sm font-semibold transition hover:bg-gray-100">
        Buy Now
      </button>
    </div>
  );
}
