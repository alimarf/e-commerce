import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black text-white  py-4">
      <div className="container mx-auto">
        {/* Adjust spacing or styling as needed */}
        <div className="pb-4 lg:flex lg:flex-row lg:gap-x-12">

          <div className="mb-12">
            <h1 className="text-4xl font-bold">Zivana Store</h1>
            <div className="text-gray-500">
              © Zivana store All Rights Reserved 2024.
            </div>
          </div>

          <div className="mb-12">
            <h1 className="text-2xl font-bold">Tentang Kami</h1>
            <div className="text-gray-500">
              Kami adalah toko grosir yang terlengkap di indonesia. <br />
              Kami menyediakan semua produk yang anda cari dan inginkan, seperti
              bahan pangan dan sebagainya
            </div>
          </div>

          <div className="mb-12">
            <h1 className="text-2xl font-bold">Kontak Kami</h1>
            <div className="text-gray-500">
              <div className="flex items-center gap-x-2">
                <FaWhatsapp />
                <div>+62 123 456 789</div>
              </div>
              <div className="flex items-center gap-x-2">
                <FaSquareXTwitter />
                <div>@ZivannaStore</div>
              </div>
              <div className="flex items-center gap-x-2">
                <FaInstagram />
                <div>@ZivannaStore</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <footer className="bg-gray-800 text-white p-4 text-center">
    //   <p>&copy; 2024 Your Company. All rights reserved.</p>
    // </footer>
  );
};

export default Footer;
