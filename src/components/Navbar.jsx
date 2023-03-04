import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex flex-col md:flex-row md:justify-between items-center sticky top-0 bg-lime-500 py-2">
      <div className="w-full md:w-auto">
        <h1 className="m-2 mx-2 text-lg text-white cursor-pointer hover:text-teal-300 md:w-auto md:mx-0">
          Shopcy
        </h1>
      </div>
      <nav className="w-full md:w-auto">
        <ul className="flex justify-center md:justify-end mx-2">
          <Link href={"/"}>
            <li className="m-2 mx-3 hover:bg-white hover:text-lime-500 p-1 cursor-pointer">
              Homepage
            </li>
          </Link>

          <Link href={"#about"}>
            <li className="m-2 mx-3 hover:bg-white hover:text-lime-500 p-1 cursor-pointer">
              About
            </li>
          </Link>

          <Link href={"#services"}>
            <li className="m-2 mx-3 hover:bg-white hover:text-lime-500 p-1 cursor-pointer">
              Services
            </li>
          </Link>

          <Link href={"/products"}>
            <li className="m-2 mx-3 hover:bg-white hover:text-lime-500 p-1 cursor-pointer">
              Product
            </li>
          </Link>

          <Link href={"/contact"}>
            <li className="m-2 mx-3 hover:bg-white hover:text-lime-500 p-1 cursor-pointer">
              Contact us
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
