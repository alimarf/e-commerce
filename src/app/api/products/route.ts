import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import multer from "multer";
import fs from "fs/promises";
import path from "path";

const upload = multer({
  dest: "public/images/", // Destination folder for storing the uploaded files
});

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.name || !data.price || !data.rating) {
      return NextResponse.json({
        status: 400,
        message: "Missing required fields",
      });
    } else {
      const result = await prisma.product.create({
        data: {
          name: data.name,
          description: data.description,
          price: data.price,
          rating: data.rating,
          image: data.image,
        },
      });

      return NextResponse.json({
        status: 201,
        message: "Product successfully created",
        data: {
          name: result.name,
          description: result.description,
          price: result.price,
          rating: result.rating,
          image: result.image,
        },
      });
    }
  } catch (error) {
    console.error("Product create failed:", error);

    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}
