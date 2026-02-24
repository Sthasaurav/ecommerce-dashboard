import { IProducts } from "@/type/products.type";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

type CardProps = {
  product: IProducts;
};

const Card = ({ product }: CardProps) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative flex h-48 items-center justify-center bg-gray-50 p-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
        />

        <span className="absolute top-2 left-2 rounded-full bg-[#1235ed]/70 px-2.5 py-1 text-[11px] font-medium tracking-wide text-white uppercase shadow">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h2 className="hover:text-primary transition-color text-primary s mb-1 line-clamp-1 cursor-pointer text-lg font-semibold">
          {product.title}
        </h2>

        <p className="mb-3 line-clamp-2 text-xs text-gray-500">
          {product.description}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <p className="text-lg font-bold text-gray-900">Rs. {product.price}</p>

          <div className="flex items-center gap-1 text-sm text-amber-500">
            <FaStar />
            <span className="text-gray-700">
              {product.rating.rate} ({product.rating.count})
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
