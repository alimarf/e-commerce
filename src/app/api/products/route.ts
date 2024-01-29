import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import multer from "multer";
import fs, { writeFile } from "fs/promises";
import path from "path";
import { zfd } from "zod-form-data";
import { z } from "zod";
import { NextApiRequest, NextApiResponse } from "next";

export const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

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
      qty: zfd.numeric(z.number()),
    });

    const { name, description, price, rating, image, qty } = schema.parse(
      await formData
    );

    const result = await prisma.product.create({
      data: {
        name: name,
        description: description,
        price: price,
        rating: rating,
        image: "images/" + image.name,
        qty: qty,
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
        qty: result.qty,
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
// export async function GET(request: NextRequest) {

//   try {
//     const search = request.nextUrl.searchParams.get("search");

//     if (search) {
//       const searchResults = await prisma.product.findMany({
//         where: {
//           OR: [
//             { name: { contains: search as string } },
//             { description: { contains: search as string } },
//           ],
//         },
//       });

//       return NextResponse.json({
//         status: 200,
//         message: "Search results successfully retrieved",
//         data: searchResults,
//       });
//     } else {
//       // If no search query is provided, retrieve all products
//       const products = await prisma.product.findMany();

//       return NextResponse.json({
//         status: 200,
//         message: "Products successfully retrieved",
//         data: products,
//       });
//     }
//   } catch (error) {
//     console.error("Failed to retrieve products:", error);

//     return NextResponse.json({
//       status: 500,
//       message: "Internal Server Error",
//     });
//   }
// }

export async function GET(request: NextRequest) {
  try {
    const search = request.nextUrl.searchParams.get("search");

    if (search) {
      const searchResults = await prisma.product.findMany({
        where: {
          OR: [
            { name: { contains: search as string } },
            { description: { contains: search as string } },
          ],
        },
      });

      const response = new Response(
        JSON.stringify({
          status: 200,
          message: "Search results successfully retrieved",
          data: searchResults,
        }),
        {
          status: 200,
          headers: headers,
        }
      );

      return response;
    } else {
      const products = await prisma.product.findMany();

      const response = new Response(
        JSON.stringify({
          status: 200,
          message: "Products successfully retrieved",
          data: products,
        }),
        {
          status: 200,
          headers: headers,
        }
      );

      return response;
    }
  } catch (error) {
    console.error("Failed to retrieve products:", error);

    const response = new Response(
      JSON.stringify({
        status: 500,
        message: "Internal Server Error",
      }),
      {
        status: 500,
        headers: {},
      }
    );

    return response;
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
      qty: zfd.numeric(z.number()),
    });

    const { name, description, price, rating, image, qty } = schema.parse(
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
        qty: qty || product.qty,
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
      const response = new Response(
        JSON.stringify({
          status: 404,
          message: "Products Not Found",
        }),
        {
          status: 200,
          headers: headers,
        }
      );
      return response
    }

    await prisma.product.delete({
      where: {
        id: productId?.toString(),
      },
    });

    const response = new Response(
      JSON.stringify({
        status: 200,
        message: "Products successfully deleted",
      }),
      {
        status: 200,
        headers: headers,
      }
    );

    return response;
    
  } catch (error) {
    console.error("Failed to deleted products:", error);

    const response = new Response(
      JSON.stringify({
        status: 500,
        message: "Internal Server Error",
      }),
      {
        status: 500,
        headers: {},
      }
    );

    return response;
  }
}
