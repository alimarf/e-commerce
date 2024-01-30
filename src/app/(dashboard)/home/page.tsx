"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "@/components/Slider/Slide";
import ProductCard from "@/components/Product/ProductCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";

interface Product {
  id: string;
  createdAt: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  qty: number;
}

const Home = () => {
  const { data: productsData, error } = useSWR("/api/products", fetcher);

  console.log("data", productsData);

  return (
    <div>
      <div className="container mt-5">
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          <div>
            <img src="/banner-zivana1.jpeg" alt="image1" />

          </div>
          <div>
            <img src="/banner-zivana2.jpeg" alt="image2" />
          </div>
          {/* <div>
            <img src="/banner-3.jpg" alt="image3" />
          </div> */}
        </Carousel>
      </div>

      <div className="container pt-10">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10 mb-10">
          {error ? (
            <p>Error loading products</p>
          ) : !productsData || !productsData.data ? (
            <p>Loading...</p>
          ) : (
            productsData.data
            .filter((item: Product) => item.qty > 0) // Filter products with qty > 0
            .map((item: Product) => (
              <ProductCard
                key={item.id}
                id={item.id}
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

export default Home;
