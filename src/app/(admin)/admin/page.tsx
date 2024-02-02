"use client";

import React, { FC, useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTable } from "../data-table";
import { columns } from "../columns";
import { Product } from "@prisma/client";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { redirect, useRouter } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface ProductsPageProps {}

async function fetchCheckAdmin() {
  const session = await getServerSession(authOptions);

  console.log("session", session?.user);
  const response = await fetch(
    `/api/check-admin`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: session?.user?.name }),
    }
  );
  

  if (response.ok) {
    console.log('MASUK')
    const result = await response.json();
    // console.log("Bro", result.data);
    // if (result.data === false) {
    //   redirect("/admin");
    // } else if (result.data === true) {
    //   redirect("/");
    // }

    return result;
  } else {
    console.error("Error checking admin status");
  }
}

const ProductsPage: FC<ProductsPageProps> = ({}) => {
  useEffect(() => {
    fetchCheckAdmin();
  }, []);

  const {
    data: productsData,
    isLoading,
    error,
  } = useSWR(`api/products`, fetcher);

  return (
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
