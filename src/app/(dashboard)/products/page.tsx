"use client";

import React, { FC } from "react";
import ProductCard from "@/components/Product/ProductCard";
import { BsSearch } from "react-icons/bs";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";

interface ProductsProps {}

interface Product {
  id: string;
  createdAt: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
}

const Products: FC<ProductsProps> = ({}) => {
  const {
    data: product,
    error,
    isLoading,
  } = useSWR("/api/products", fetcher);

  console.log("PRODUCT", product);

  return (
    <div>
      <div className="container pt-5">
        <div className="w-full sm:w-[300px] md:w-[100%] relative">
          <input
            className="border-gray-200 border p-2 px-4 rounded-lg w-full"
            type="text"
            placeholder="Enter any product name..."
          />

          <BsSearch
            className="absolute right-0 top-0 mr-3 mt-3 text-gray-400"
            size={20}
          />
        </div>
      </div>
      <div className="container pt-10">
        <h2 className="font-medium text-2xl pb-4">All Products</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10 mb-10">
        {error ? (
            <p>Error loading products</p>
          ) : !product || !product.data ? (
            <p>Loading...</p>
          ) : (
            product.data.map((item: Product) => (
              <ProductCard
                key={item.id}
                img={item.image}
                title={item.name}
                desc={item.description}
                rating={item.rating}
                price={item.price.toString()}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
