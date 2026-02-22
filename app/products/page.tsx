import { IProducts } from "@/type/products.type";
import React from "react";
import Card from "../components/card";

async function getProducts() {
  const response = await fetch(`https://fakestoreapi.com/products`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

const ProductPage = async () => {
  const data: IProducts[] = await getProducts();

  console.log(data, "from getProduct");

  return (
    <div>
      <h1 className="text-center text-4xl font-extrabold text-gray-800">
        Products
      </h1>
      <div className="grid grid-cols-2 gap-4 p-2 sm:grid-cols-3 sm:p-8 md:grid-cols-4">
        {data.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
