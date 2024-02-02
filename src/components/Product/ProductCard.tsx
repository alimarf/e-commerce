import { formatRupiah } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface propsType {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
  id: string;
}

const ProductCard: React.FC<propsType> = ({
  img,
  title,
  desc,
  rating,
  price,
  id,
}) => {
  const { data: session } = useSession();
  const router = useRouter();
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
    <div className="border border-gray-200 rounded-xl" style={{ height: '500px', display: 'flex', flexDirection: 'column' }}>
      <div>
        <Image
          className="border border-gray-200  rounded-xl w-full h-auto"
          src={`/${img}`}
          width={200}
          height={300}
          alt={title}
        />
      </div>

      <div className="px-2 space-y-2 py-2 flex-grow">
        <h2 className="text-black font-medium text-rose-400">{title}</h2>
        <p className="text-gray-500 text-xs">{desc}</p>
        <div>{generateRating(rating)}</div>
        <div className="font-bold flex gap-4">
          {formatRupiah(parseInt(price))}
        </div>
      </div>

      {session === null ? (
        <Link
          href="/auth/signin"
          className="bg-primary text-white text-[14px] md:text-[16px] p-2 px-4 m-2 rounded-lg inline-block cursor-pointer hover:bg-blackish"
        >
          Pesan Sekarang
        </Link>
      ) : (
        
        <button
          onClick={() => {
            router.push(`/product-detail/${id}`)
          }}
          className="bg-primary text-white text-[14px] md:text-[16px] p-2 px-6 m-2 rounded-lg inline-block cursor-pointer hover:bg-blackish"
        >
          Pesan Sekarang
        </button>
      )}
    </div>


    // <div className="max-w-sm rounded overflow-hidden shadow-lg">
    //   <img className="w-full px-2" src={`/${img}`} alt="Sunset in the mountains" />
    //   <div className="px-3">
    //     <div className="px-2 space-y-2 py-2 flex-grow">
    //       <h2 className="text-black font-medium text-rose-400">{title}</h2>
    //       <p className="text-gray-500 text-xs">{desc}</p>
    //       <div>{generateRating(rating)}</div>
    //       <div className="font-bold flex gap-4">
    //         {formatRupiah(parseInt(price))}
    //       </div>
    //     </div>
    //   </div>
    //   {session === null ? (
    //     <Link
    //       href="/auth/signin"
    //       className="bg-primary text-white text-[14px] md:text-[16px] p-2 px-4 m-2 rounded-lg inline-block cursor-pointer hover:bg-blackish"
    //     >
    //       Pesan Sekarang
    //     </Link>
    //   ) : (
    //     <button
    //       onClick={() => {
    //         router.push(`/product-detail/${id}`)
    //       }}
    //       className="bg-primary text-white text-[14px] md:text-[16px] p-2 px-6 m-2 rounded-lg inline-block cursor-pointer hover:bg-blackish"
    //     >
    //       Pesan Sekarang
    //     </button>
    //   )}
    // </div>
  );

};

export default ProductCard;
