import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Sidebar from "@/components/Sidebar";
import { Epilogue } from "next/font/google";
import Header from "@/components/HeaderAdmin";
import NextAuthProvider from "@/context/NextAuthProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zivana Admin",
  description: "Zivana Admin",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await getServerSession(authOptions);

  // console.log("session", session?.user?.name);

  // if (session === null) {
  //   return redirect("/auth/signin");
  // }

  return (
    <html lang="en">
      <body className={epilogue.className}>
        <main>
          {/* <NextAuthProvider>
       
          </NextAuthProvider> */}

          <div className="border-t">
            <div className="bg-background">
              <div className="flex flex-row">
                <div className="hidden lg:block w-[18%]">
                  <Sidebar />
                </div>
                <div className="col-span-3 overflow-auto lg:col-span-5 lg:border-l w-[82%]">
                  <div className="px-6 py-6 lg:px-8">
                    <Header />
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
