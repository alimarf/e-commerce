import React from "react";

import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header_top__icon_wrapper">
              <a href="http://">
                <BsFacebook />
              </a>

            </div>
            <div className="header_top__icon_wrapper">
              <a href="http://">
              <BsTwitter />
              </a>
            
            </div>
            <div className="header_top__icon_wrapper">
              <a href="http://">
              <BsInstagram />
              </a>
              
            </div>
           
          </div>

          <div className="text-gray-500 text-[12px]">

          </div>

          <div className="flex gap-4">

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
