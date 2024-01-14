import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import multer from "multer";
import fs, { writeFile } from "fs/promises";
import path from "path";
import { zfd } from "zod-form-data";
import { z } from "zod";
import { NextApiRequest, NextApiResponse } from 'next';




export async function POST(request: Request) {
 
  try {
    const formData = await request.formData();

    const schema = zfd.formData({
      name: zfd.text(),
      description: zfd.text(),
      price: zfd.numeric(z.number()),
      rating: zfd.numeric(z.number().min(1).max(5)),
      image: zfd.file()
    });

    const { name, description, price, rating, image } = schema.parse(await formData);

    const result = await prisma.product.create({
      data: {
        name: name,
        description: description,
        price: price,
        rating: rating,
        image: path.join("public/images", image.name),
      },
    });

   //code for file 
   const file: File | null = formData.get('image') as unknown as File;
   const bytes = await file.arrayBuffer();
   const buffer = Buffer.from(bytes);
   const paths = path.join("public/images", image.name)
   await writeFile(paths, buffer);
    

    return NextResponse.json({
      status: 201,
      message: "Product successfully created",
      data: {
        name: result.name,
        description: result.description,
        price: result.price,
        rating: result.rating,
        image: paths,
      },
    });
  } catch (error) {
    console.error("Product create failed:", error);

    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}
