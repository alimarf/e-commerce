import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import multer from "multer";
import fs, { writeFile } from "fs/promises";
import path from "path";
import { zfd } from "zod-form-data";
import { z } from "zod";
import { NextApiRequest, NextApiResponse } from "next";

//Create Data Products
export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const schema = zfd.formData({
      name: zfd.text(),
      description: zfd.text(),
      price: zfd.numeric(z.number()),
      rating: zfd.numeric(z.number().min(1).max(5)),
      image: zfd.file(),
    });

    const { name, description, price, rating, image } = schema.parse(
      await formData
    );

    const result = await prisma.product.create({
      data: {
        name: name,
        description: description,
        price: price,
        rating: rating,
        image: "images/" + image.name,
      },
    });

    //code for file
    const file: File | null = formData.get("image") as unknown as File;
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const paths = path.join("public/images", image.name);
    await writeFile(paths, buffer);

    return NextResponse.json({
      status: 201,
      message: "Product successfully created",
      data: {
        name: result.name,
        description: result.description,
        price: result.price,
        rating: result.rating,
        image: "images/" + image.name,
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

// READ Data Products
export async function GET(request: NextApiRequest, response: NextApiResponse) {
  try {
    const products = await prisma.product.findMany();

    return NextResponse.json({
      status: 200,
      message: "Products successfully retrieved",
      data: products,
    });
  } catch (error) {
    console.error("Failed to retrieve products:", error);

    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}

//UPDATE Data Product --> masih error
export async function PUT(request: Request) {
  try {
    const formData = await request.formData();
    const productId = formData.get("id");

    const product = await prisma.product.findUnique({
      where: {
        id: productId?.toString(),
      },
    });

    if (!product) {
      return NextResponse.json({
        status: 404,
        message: "Product not found",
      });
    }

    const schema = zfd.formData({
      name: zfd.text(),
      description: zfd.text(),
      price: zfd.numeric(z.number()),
      rating: zfd.numeric(z.number().min(1).max(5)),
      image: zfd.file(),
    });

    const { name, description, price, rating, image } = schema.parse(
      await formData
    );

    const updatedProduct = await prisma.product.update({
      where: {
        id: productId?.toString(),
      },
      data: {
        name: name || product.name,
        description: description || product.description,
        price: price || product.price,
        rating: rating || product.rating,
        image: image ? "images/" + image.name : product.image,
      },
    });

    if (image) {
      const file: File | null = formData.get("image") as unknown as File;
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const imagePath = path.join("public/images", image.name);
      await writeFile(imagePath, buffer);
    }

    return NextResponse.json({
      status: 200,
      message: "Product successfully updated",
      data: updatedProduct,
    });
  } catch (error) {
    console.error("Product update failed:", error);

    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}

export async function DELETE(request: Request) {
  try {
    const formData = await request.formData();

    const productId = formData.get("id");

    if (!productId) {
      return NextResponse.json({
        status: 404,
        message: "Product not found",
      });
    }

    await prisma.product.delete({
      where: {
        id: productId?.toString(),
      },
    });

    return NextResponse.json({
      status: 200,
      message: "Product successfully deleted",
    });
  } catch (error) {
    console.error("Product deletion failed:", error);

    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}
