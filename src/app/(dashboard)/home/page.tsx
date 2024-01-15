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
}

const Home = () => {
  const { data: productsData1, error } = useSWR("/api/products", fetcher);

  console.log("data", productsData1);

  const productsData = [
    {
      img: "/jacket-1.jpg",
      title: "Jacket",
      desc: "MEN Yarn Fleece Full-Zip Jacket",
      rating: 4,
      price: "900.000",
    },
    {
      img: "/skirt-1.jpg",
      title: "Skirt",
      desc: "Black Floral Wrap Midi Skirt",
      rating: 5,
      price: "300.000",
    },
    {
      img: "/party-wear-1.jpg",
      title: "Party Wear",
      desc: "Women's Party Wear Shoes",
      rating: 3,
      price: "250.000",
    },
    {
      img: "/shirt-1.jpg",
      title: "Shirt",
      desc: "Pure Garment Dyed Cotton Shirt",
      rating: 4,
      price: "45.00",
    },
    {
      img: "/sports-1.jpg",
      title: "Sports",
      desc: "Trekking & Running Shoes - Black",
      rating: 3,
      price: "58.000",
    },
    {
      img: "/watch-1.jpg",
      title: "Watches",
      desc: "Smart Watches Vital Plus",
      rating: 4,
      price: "100.000",
    },
    {
      img: "/watch-2.jpg",
      title: "Watches",
      desc: "Pocket Watch Leather Pouch",
      rating: 4,
      price: "120.000",
    },
  ];

  return (
    <div>
      <div className="container mt-5">
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          <div>
            <img src="/banner-1.jpg" alt="image1" />
          </div>
          <div>
            <img src="/banner-2.jpg" alt="image2" />
          </div>
          <div>
            <img src="/banner-3.jpg" alt="image3" />
          </div>
        </Carousel>
      </div>

      <div className="container pt-10">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10 mb-10">
          {error ? (
            <p>Error loading products</p>
          ) : !productsData1 || !productsData1.data ? (
            <p>Loading...</p>
          ) : (
            productsData1.data.map((item: Product) => (
              <ProductCard
                key={item.id}
                img={""}
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
