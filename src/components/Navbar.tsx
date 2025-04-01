"use client"
import Image from "next/image";
import nav_logo from "@/../../public/images/nav_logo.png";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="px-[8vw] sm:px-[10vw] lg:px-[20vw] py-12 flex flex-row items-center justify-between z-50 absolute top-0 left-0 w-full">
        <div className="md:hidden flex w-full justify-between items-center">
          {/* Hamburger menu */}
          <div className="relative -mt-3">
            <button onClick={toggleMenu} className="focus:outline-none">
              <div className="w-6 flex flex-col items-end">
                <span className="block w-full h-[3px] hamburger-gradient rounded-2xl mb-0.5"></span>
                <span className="block w-full h-[3.9px] hamburger-gradient rounded-2xl mb-0.5"></span>
                <span className="block w-full h-[3px] hamburger-gradient rounded-2xl"></span>
              </div>
            </button>

            {/* Dropdown menu */}
            {menuOpen && (
              <div className="absolute top-11 left-0 py-2 w-48 bg-black border border-gray-800 rounded-md shadow-xl">
                <Link href={"/about-us"}>
                  <div className="px-4 py-2 hover:bg-gray-900">
                    <div className="gradient-text">About Us</div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          <div>
            <Link href={"/"}>
              <Image src={nav_logo} alt="Logo not found!" className="w-[180px]" />
            </Link>
          </div>
        </div>

        <div className="hidden md:flex w-full justify-between items-center">
          <div>
            <Link href={"/"}>
              <Image src={nav_logo} alt="Logo not found!" className="w-[200px]" />
            </Link>
          </div>

          <div>
            <Link href={"/about-us"}>
              <div className="group cursor-pointer">
                <div className="gradient-text text-xl">About Us</div>
                <div
                  style={{
                    background:
                      "linear-gradient(89.26deg, #F7E57E -36%, #B28238 -18.69%, #B98D40 -10.04%, #CEAB55 2.94%, #E6CD6D 15.91%, #F5EBA8 48.36%, #FFFFD0 72.15%, #FAF1A6 98.11%, #F8E888 121.9%, #F7E57E 134.88%, #F3DF78 141.37%, #E9CF69 152.19%, #D8B450 163%, #C08E2C 175.98%)",
                  }}
                  className="w-0 h-1 group-hover:w-full transition-all duration-200"
                ></div>
              </div>
            </Link>
          </div>
        </div>

        <style>
          {`
          .gradient-text {
            background: linear-gradient(90deg, #F7E57E 0%, #CEAB55 13.5%, #E6CD6D 28%);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            -webkit-text-fill-color: transparent;
          }
          
          .hamburger-gradient {
            background: linear-gradient(90deg, #F7E57E 0%, #CEAB55 13.5%, #E6CD6D 28%);
          }
        `}
        </style>
      </div>
    </>
  );
};

export default Navbar;