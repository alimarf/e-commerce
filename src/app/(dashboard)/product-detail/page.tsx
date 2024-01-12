// pages/ProductDetail.tsx

import { Link } from 'lucide-react';
import React, { FC } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface ProductDetailProps {
    name: string;
    price: string;
    imageUrl: string;
}

const ProductDetail: FC<ProductDetailProps> = ({ name, price, imageUrl }) => {
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
            <div className="w-1/2 p-4">
                <img src="/jacket-1.jpg" alt={name} className="max-w-full h-auto" />
            </div>
            <div className="w-1/2 p-4">
                <h1 className="text-2xl font-bold mb-2">Jaket</h1>
                <h3 className='text-2m mb-2'>MEN Yarn Fleece Full-Zip Jacket</h3>
                <div>{generateRating(4)}</div>
                <p className="text-lg mb-4">Rp. 120.000 </p>
                {/* Add more details here */}


                <div className="bg-primary text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-blackish">
                    Order Now
                </div>
            </div>



        </div>
    );
};

export default ProductDetail;
