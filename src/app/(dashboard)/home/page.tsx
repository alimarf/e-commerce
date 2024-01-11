"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "@/components/Slider/Slide";
import ProductCard from "@/components/Product/ProductCard";

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "/banner-1.jpg",
      title: "Trending Item",
      mainTitle: "WOMEN'S LATEST FASHION SALE",
      price: "200.000",
    },
    {
      id: 1,
      img: "/banner-2.jpg",
      title: "Trending Accessories",
      mainTitle: "MODERN SUNGLASSES",
      price: "500.000",
    },
    {
      id: 2,
      img: "/banner-3.jpg",
      title: "Sale Offer",
      mainTitle: "NEW FASHION SUMMER SALE",
      price: "300.000",
    },
  ];

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
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>

      <div className="container pt-10">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10 mb-10">
          {productsData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
