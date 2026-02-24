import { IProducts } from "@/type/products.type";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaStar, FaRegStar } from "react-icons/fa";
import Card from "@/app/components/card";
import SingleProductActions from "@/app/components/SingleProductActions";

async function getProductDetails(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return (await res.json()) as IProducts;
}

async function getAllProducts() {
  const res = await fetch(`https://fakestoreapi.com/products`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return (await res.json()) as IProducts[];
}

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  if (!id) {
    throw new Error("Missing product id");
  }

  const product = await getProductDetails(id);
  const allProducts = await getAllProducts();
  console.log(allProducts, "all the products");
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <nav className="mb-6">
        <ul className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500">
          <li className="hover:text-black">
            <Link href="/">Home</Link>
          </li>
          <MdKeyboardArrowRight size={16} />
          <li className="hover:text-black">
            <Link href="/products">Products</Link>
          </li>
          <MdKeyboardArrowRight size={16} />
          <li className="text-primary line-clamp-1 font-medium">
            {product.title}
          </li>
        </ul>
      </nav>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex items-center justify-center rounded-2xl border bg-gray-50 p-6 shadow-sm">
          <img
            src={product.image}
            alt={product.title}
            className="h-72 object-contain transition hover:scale-105"
          />
        </div>

        <div className="flex flex-col gap-4">
          <p className="w-fit rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
            {product.category}
          </p>

          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {product.title}
          </h1>

          <div className="flex items-center gap-2">
            <div className="flex items-center text-yellow-500">
              {Array.from({ length: 5 }).map((_, i) =>
                i < Math.round(Number(product.rating.rate)) ? (
                  <FaStar key={i} />
                ) : (
                  <FaRegStar key={i} />
                ),
              )}
            </div>
            <p className="text-sm text-gray-600">
              {product.rating.rate} / 5 ({product.rating.count} reviews)
            </p>
          </div>

          <p className="text-primary text-3xl font-bold">Rs. {product.price}</p>

          <div>
            <h2 className="mb-1 text-lg font-semibold text-gray-800">
              Description
            </h2>
            <p className="text-sm leading-relaxed text-gray-600">
              {product.description}
            </p>
          </div>

          {/* <div className="mt-4 flex flex-wrap gap-3">
            <button className="bg-primary rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-gray-800">
              Add to Cart
            </button>
            <button className="rounded-xl border px-6 py-3 text-sm font-semibold transition hover:bg-gray-100">
              Buy Now
            </button>
          </div> */}

          <SingleProductActions product={product} />

          <div className="mt-3 rounded-xl border bg-gray-50 p-4 text-sm text-gray-600">
            <p>✔ Free delivery within Kathmandu Valley</p>
            <p>✔ 7 days return policy</p>
            <p>✔ Secure payment</p>
          </div>
        </div>
      </div>

      <div className="mt-12 mb-8">
        <h3 className="text-primary mb-4 text-2xl font-bold">
          You May Also Like
        </h3>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {allProducts
            .filter(
              (item) =>
                item.id !== product.id && item.category === product.category,
            )
            .slice(0, 4)
            .map((item) => (
              <div key={item.id} className="px-2">
                <Card product={item} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
