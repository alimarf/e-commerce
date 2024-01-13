"use client";

import React, { FC, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { Button } from "../ui/button";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";

import SignOutDialog from "../SignOutDialog";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <div>
      {/* MOBILE */}
      {isOpen && (
        <div className="absolute w-full bg-black pb-6 z-10">
          <div className="flex flex-col  text-2xl px-6">
            <Button
              variant={"ghost"}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <MdClose className="text-white w-10 h-10 absolute right-6 top-6" />
            </Button>
            <ul className="mt-10 flex flex-col text-white">
              <li className="mb-4">
                <Link href="/home">Home</Link>
              </li>
              <li className="mb-4">
                <Link href="/products">Products</Link>
              </li>
              <li className="mb-4">
                <Link href="/shopping-conditions">Shopping Conditions</Link>
              </li>
            </ul>

            <Button
              className="mt-6 text-white bg-transparent focus:text-white focus:bg-transparent active:bg-transparent"
              variant="outline"
              onClick={() => {
                router.push("/auth/signin");
              }}
            >
              Sign In
            </Button>
          </div>
        </div>
      )}

      {/* WEB */}
      <div className="flex justify-between flex-row items-center w-full px-4 py-6 lg:px-0 lg:py-4 lg:max-w-6xl lg:mx-auto">
        <h1 className="text-4xl font-bold">Grosir</h1>

        <div className="hidden lg:block">
          <ul className="mt-10 lg:mt-0 flex flex-row items-center justify-center gap-16">
            <li className="text-xl">
              <a href="/home">Home</a>
            </li>
            <li className="text-xl">
              <a href="/products">Products</a>
            </li>
            <li className="text-xl">
              <a href="/shopping-conditions">Shopping Conditions</a>
            </li>
          </ul>
        </div>

        {/* TODO:: UNCOMMENT THIS CODE */}
        {/* <Button
          className="hidden lg:block text-black bg-transparent border-black focus:text-black focus:bg-transparent active:bg-transparent"
          variant="outline"
          onClick={() => {
            router.push("/auth/signin");
          }}
        >
          Sign In
        </Button> */}

        <SignOutDialog>
          <Button
            className="hidden lg:block text-black bg-transparent border-black focus:text-black focus:bg-transparent active:bg-transparent"
            variant="outline"
          >
            Sign Out
          </Button>
        </SignOutDialog>

        <Button
          variant="ghost"
          className="lg:hidden"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <MdMenu className="w-8 h-8" />
        </Button>
      </div>

      <Separator className="w-full bg-slate-300" />
    </div>
  );
};

export default Header;
