import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header class="flex flex-col md:flex-row md:justify-between items-center sticky top-0 bg-lime-500 py-2">
      <div class="w-full md:w-auto">
        <h1 class="m-2 mx-2 text-lg text-white cursor-pointer hover:text-teal-300 md:w-auto md:mx-0">
          Shopcy
        </h1>
      </div>
      <nav class="w-full md:w-auto">
        <ul class="flex justify-center md:justify-end mx-2">
          <Link href={"/"}>
            <li class="m-2 mx-3 hover:bg-white hover:text-lime-500 p-1 cursor-pointer">
              Homepage
            </li>
          </Link>

          <Link href={"#about"}>
            <li class="m-2 mx-3 hover:bg-white hover:text-lime-500 p-1 cursor-pointer">
              About
            </li>
          </Link>

          <Link href={"#services"}>
            <li class="m-2 mx-3 hover:bg-white hover:text-lime-500 p-1 cursor-pointer">
              Services
            </li>
          </Link>

          <Link href={"/products"}>
            <li class="m-2 mx-3 hover:bg-white hover:text-lime-500 p-1 cursor-pointer">
              Product
            </li>
          </Link>

          <Link href={"/contact"}>
            <li class="m-2 mx-3 hover:bg-white hover:text-lime-500 p-1 cursor-pointer">
              Contact us
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
