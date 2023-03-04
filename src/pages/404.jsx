import Link from "next/link";
import React from "react";
import { TfiFaceSad } from "react-icons/tfi";

const Notfound = () => {
  return (
    <div className="w-[100vw] h-[77vh] flex flex-col justify-center items-center">
      <TfiFaceSad className="text-lime-500 text-9xl my-6" />
      <h1 className="text-6xl text-center portrait:text-3xl">
        Requested Page Not Found
      </h1>
      <Link href={"/"}>
        <button className="w-[200px] h-[40px] text-lg my-6 bg-lime-500 hover:bg-white hover:text-lime-500 hover:border-4 hover:border-lime-500">
          Homepage
        </button>
      </Link>
    </div>
  );
};

export default Notfound;
