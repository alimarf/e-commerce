import React, { FC } from 'react'
import ProductCard from '@/components/Product/ProductCard';
import { BsSearch } from "react-icons/bs";

interface ProductsProps {

}

const Products: FC<ProductsProps> = ({ }) => {
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
      price: "450.000",
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
  )
}

export default Products;