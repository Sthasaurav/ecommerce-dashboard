import { IProducts } from "@/type/products.type";
import Link from "next/link";
import ProductClient from "./productClient";

const PRODUCTS_PER_PAGE = 8;

async function getProducts(
  sort?: "asc" | "desc",
  page = 1,
  limit = PRODUCTS_PER_PAGE,
) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products${sort ? `?sort=${sort}` : ""}`,
      { cache: "no-store" },
    );

    if (!response.ok) {
      console.error("FakeStore API failed:", response.status);
      return { products: [], total: 0 };
    }

    const allProducts: IProducts[] = await response.json();

    const start = (page - 1) * limit;
    const end = start + limit;

    return {
      products: allProducts.slice(start, end),
      total: allProducts.length,
    };
  } catch (error) {
    console.error("Fetch crashed:", error);
    return { products: [], total: 0 };
  }
}

const ProductPage = async ({
  searchParams,
}: {
  searchParams: { sort?: "asc" | "desc"; page?: string };
}) => {
  const sort = searchParams?.sort;
  const page = Number(searchParams?.page) || 1;

  const { products, total } = await getProducts(sort, page, PRODUCTS_PER_PAGE);
  const totalPages = Math.ceil(total / PRODUCTS_PER_PAGE);

  return (
    <div className="py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">Products</h1>
        {total === 0 && (
          <p className="mt-2 text-gray-500">
            Products are temporarily unavailable. Please try again later.
          </p>
        )}
      </div>

      {products.length > 0 && <ProductClient products={products} />}

      {totalPages > 1 && (
        <div className="mt-8 flex flex-wrap justify-center gap-2">
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
      )}
    </div>
  );
};

export default ProductPage;
