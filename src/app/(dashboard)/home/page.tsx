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
            <img src="/banner-1.jpg" alt="image1" className="w-100" />
          </div>
          <div>
            <img src="/banner-2.jpg" alt="image2" />
          </div>
          <div>
            <img src="/banner-3.jpg" alt="image3" />
          </div>
        </Carousel>
      </div>
      


      <div className="container mt-10 grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-2 xl:grid-cols-2 gap-10 xl:gap-x-20 xl:gap-y-10 mb-10">

        <div className="relative flex flex-col mt-6 bg-white text-gray-700  shadow-lg bg-clip-border rounded-xl w-100">
          <img className="border border-gray-200 rounded-xl w-full h-auto" src="/banner-zivana1.jpeg" alt="" width={1000} height={6000} />
        </div>

        <div className="relative flex flex-col mt-6 bg-white text-gray-700  shadow-lg bg-clip-border rounded-xl w-100" style={{ height: '300px', display: 'flex', flexDirection: 'column' }}>
          <div className="p-6">
            <b className="mb-5">
              Selamat Datang di Zivana Store
            </b>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea possimus aspernatur tempore ipsa in dolor, eos et quis suscipit distinctio modi nihil nisi minus. Ipsum excepturi voluptas eos aliquam incidunt!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure distinctio dolore hic illum ut delectus perspiciatis ex! Dolore ea beatae ratione ducimus aliquid? Sint distinctio nulla ipsum neque, facere tempore!</p>
          </div>
        </div>


      </div>


      <div className="container pt-10">
        <h2 className="font-medium text-2xl pb-4">Produk Kami</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10 mb-10">
          {error ? (
            <p>Error loading products</p>
          ) : !productsData || !productsData.data ? (
            <p>Loading...</p>
          ) : (
            productsData.data
              .filter((item: Product) => item.qty > 0) // Filter products with qty > 0
              .slice(0,8)
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
