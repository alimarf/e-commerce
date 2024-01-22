import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import HeaderTop from "@/components/Header/HeaderTop";

import Footer from "@/components/Footer";
import NextAuthProvider from "@/context/NextAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zivana Store",
  description: "zivana Store",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <NextAuthProvider>
            <div>
              <Header />
              {children}
              <Footer />
            </div>
          </NextAuthProvider>
        </main>
      </body>
    </html>
  );
}
