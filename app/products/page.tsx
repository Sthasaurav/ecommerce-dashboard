import { IProducts } from "@/type/products.type";
import SortSelect from "../components/sortSelect";
import Link from "next/link";
import ProductClient from "./productClient";

async function getProducts(sort?: "asc" | "desc", page = 1, limit = 8) {
  const response = await fetch(
    `https://fakestoreapi.com/products${sort ? `?sort=${sort}` : ""}`,
    { cache: "no-store" },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const allProducts: IProducts[] = await response.json();

  const start = (page - 1) * limit;
  const end = start + limit;

  return {
    products: allProducts.slice(start, end),
    total: allProducts.length,
  };
}

const ProductPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ sort?: "asc" | "desc"; page?: string }>;
}) => {
  const params = await searchParams;

  const sort = params.sort;
  const page = Number(params.page) || 1;

  const { products, total } = await getProducts(sort, page, 8);
  const totalPages = Math.ceil(total / 8);

  return (
    <div className="py-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">Products</h1>

        <div className="mb-4 flex justify-end gap-4 px-8">
          <SortSelect />
        </div>
      </div>

      <ProductClient products={products} />

      <div className="mt-8 flex justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, i) => {
          const pageNumber = i + 1;
          const query = new URLSearchParams();

          if (sort) query.set("sort", sort);
          query.set("page", pageNumber.toString());

          return (
            <Link
              key={pageNumber}
              href={`?${query.toString()}`}
              className={`rounded border px-3 py-1 text-sm ${
                page === pageNumber
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {pageNumber}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductPage;
