
import { Link } from "lucide-react";
import React, { FC } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import prisma from "../../../../../lib/prisma";
import { formatRupiah } from "@/lib/utils";
import Image from "next/image";


type paramsType = {
  id: string;
};

interface ProductDetailProps {
  params: paramsType;
}

async function getDetailProduct(id: string) {
  const product = await prisma.product.findFirst({
    where: {
      id: id,
    },
  });

  return product;
}

const ProductDetail: FC<ProductDetailProps> = async ({ params }) => {
  const product = await getDetailProduct(params.id);
  const generateRating = (rating: number) => {
    switch (rating) {
      case 1:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 2:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 3:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
      case 5:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex">
      <div className="w-1/2 p-20">
        <Image
          className="w-full h-auto"
          src={`/${product?.image}`}
          width={200}
          height={300}
          alt={product?.name!}
        />
      </div>
      <div className="w-1/2 p-20">
        <h1 className="text-2xl font-bold mb-2">{product?.name}</h1>
        <h3 className="text-2m mb-2">{product?.description}</h3>
        <div>{generateRating(product?.rating!)}</div>
        <p className="text-lg mb-4">{formatRupiah(product?.price!)} </p>
        {/* Add more details here */}


     
        <div className="bg-primary text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-blackish">
          <a href="https://wa.me/6289686946758?text=Hi%2C%20I%20want%20to%20order%20" target="blank">Order Now</a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
