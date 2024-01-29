"use client";

import React, { FC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { Product } from "@prisma/client";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";

interface ProductsPageProps {}

const ProductsPage: FC<ProductsPageProps> = ({}) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const {
    data: productsData,
    isLoading,
    error,
  } = useSWR(`${apiUrl}/products`, fetcher);

  console.log("PRODUCTS", productsData);

  const data = [
    {
      id: "a",
      name: "ha",
      description: "had",
      image: "ah",
      qty: 20,
      price: 20000,
      rating: 5,
      createdAt: null,
    },
    {
      id: "b",
      name: "ha1",
      description: "had1",
      image: "ah1",
      qty: 30,
      price: 130000,
      rating: 5,
      createdAt: null,
    },
    {
      id: "c",
      name: "ha2",
      description: "had2",
      image: "ah2",
      qty: 40,
      price: 350000,
      rating: 5,
      createdAt: null,
    },
    // Add more data as needed
  ];

  return (
    // <div>
    //   <h1>Products</h1>
    //   <Table>
    //     <TableHeader>
    //       <TableRow>
    //         <TableHead>No</TableHead>
    //         <TableHead>Name</TableHead>
    //         <TableHead>Price</TableHead>
    //         <TableHead>Rating</TableHead>
    //         <TableHead>Qty</TableHead>

    //       </TableRow>
    //     </TableHeader>
    //     <TableBody>
    //       {data.map((item) => (
    //         <TableRow key={item.id}>
    //           <TableCell>{item.id}</TableCell>
    //           <TableCell>{item.name}</TableCell>
    //           <TableCell>{item.price}</TableCell>
    //           <TableCell>{item.rating}</TableCell>
    //           <TableCell>{item.qty}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>

    //   </Table>
    // </div>
    <div>
      <div className="container mx-auto py-10">
        {error ? (
          <p>Error loading products</p>
        ) : !productsData || !productsData.data ? (
          <p></p>
        ) : (
          <DataTable columns={columns} data={productsData.data} />
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
