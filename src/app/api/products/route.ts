import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import multer from "multer";
import fs from "fs/promises";
import path from "path";
import { zfd } from "zod-form-data";
import { z } from "zod";

const upload = multer({
  dest: "public/images/", // Destination folder for storing the uploaded files
});

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const schema = zfd.formData({
      name: zfd.text(),
      description: zfd.text(),
      price: zfd.numeric(z.number()),
      rating: zfd.numeric(z.number().min(1).max(5)),
    });

    const { name, description, price, rating } = schema.parse(await formData);

    const result = await prisma.product.create({
      data: {
        name: name,
        description: description,
        price: price,
        rating: rating,
        image: "test",
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
        image: "dadad",
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
