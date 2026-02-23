"use client";

import { useEffect, useMemo, useState } from "react";
import { IProducts } from "@/type/products.type";
import Card from "../components/card";
import SortSelect from "../components/sortSelect";

type Props = {
  products: IProducts[];
};

export default function ProductClient({ products }: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [priceSort, setPriceSort] = useState<"high" | "low" | "none">("none");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let result = products.filter((p) => {
      const matchesName = p.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        category === "all" ? true : p.category === category;

      return matchesName && matchesCategory;
    });

    if (priceSort === "high") {
      result = [...result].sort((a, b) => Number(b.price) - Number(a.price));
    }

    if (priceSort === "low") {
      result = [...result].sort((a, b) => Number(a.price) - Number(b.price));
    }

    return result;
  }, [products, search, category, priceSort]);

  return (
    <>
      <div className="mb-6 grid grid-cols-1 gap-4 rounded-xl p-4 sm:grid-cols-5">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded border p-2"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded border p-2"
        >
          <option value="all">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select
          value={priceSort}
          onChange={(e) => setPriceSort(e.target.value )}
          className="rounded border p-2"
        >
          <option value="none">Price: None</option>
          <option value="high">Price: High → Low</option>
          <option value="low">Price: Low → High</option>
        </select>

        <SortSelect />
      </div>

      {filteredAndSortedProducts.length === 0 ? (
        <p className="text-center text-gray-500">No products found</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 p-2 sm:grid-cols-3 sm:p-8 md:grid-cols-4">
          {filteredAndSortedProducts.map((item) => (
            <Card key={item.id} product={item} />
          ))}
        </div>
      )}
    </>
  );
}
