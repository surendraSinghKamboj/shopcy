import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Howl } from "howler";

const Signup = () => {
  const success = new Howl({
    src: ["/success.wav"],
  });

  const [data, setData] = useState({
    name: "",
    email: "",
    userName: "",
    mobile: "",
    password: "",
  });

  const [alert, setAlert] = useState([
    false,
    "Please change useState init value",
  ]);

  const router = useRouter();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/auth/signup", data);
      setAlert([true, "Account Created Successfull"]);
      success.play();
      setTimeout(() => router.push("/Login"), 1500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="w-[100vw] min-h-screen flex justify-center items-center">
      {alert[0] ? (
        <div className="w-[300px] h-[50px] bottom-7 bg-lime-500 flex justify-center items-center right-5 shadow-xl fixed p-5">
          <h1>{alert[1]}</h1>
        </div>
      ) : null}
      <div className="flex flex-col justify-center items-center w-[60vw] h-[70vh] portrait:w-[90vw] portrait:h-[70vh]  shadow-lg border-2 shadow-lime-500">
        <div className="flex portrait:flex-col my-4 justify-center items-center gap-4">
          <label className="w-[150px] portrait:hidden" htmlFor="name">
            Name :
          </label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="border-2 border-lime-500 w-80 focus:border-lime-600"
          />
        </div>

        <div className="flex portrait:flex-col my-4 justify-center items-center gap-4">
          <label className="w-[150px] portrait:hidden" htmlFor="email">
            E-mail :
          </label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            id="email"
            name="email"
            placeholder="Enter your Email"
            className="border-2 border-lime-500 w-80 focus:border-lime-600"
          />
        </div>

        <div className="flex portrait:flex-col my-4 justify-center items-center gap-4">
          <label className="w-[150px] portrait:hidden" htmlFor="username">
            Username :
          </label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            name="userName"
            id="username"
            placeholder="Enter your username"
            className="border-2 border-lime-500 w-80 focus:border-lime-600"
          />
        </div>

        <div className="flex portrait:flex-col my-4 justify-center items-center gap-4">
          <label className="w-[150px] portrait:hidden" htmlFor="mobile">
            Mobile :
          </label>
          <input
            onChange={(e) => handleChange(e)}
            type="number"
            name="mobile"
            id="mobile"
            placeholder="Enter your phone number"
            className="border-2 border-lime-500 w-80 focus:border-lime-600"
          />
        </div>

        <div className="flex portrait:flex-col my-4 justify-center items-center gap-4">
          <label className="w-[150px] portrait:hidden" htmlFor="password">
            Password :
          </label>
          <input
            onChange={(e) => handleChange(e)}
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="border-2 border-lime-500 w-80 focus:border-lime-600"
          />
        </div>

        <div className="flex justify-start my-4 items-center w-[80%]">
          <p className="text-lime-500">
            <Link href={"/Login"}>Already Regitered Login now</Link>
          </p>
        </div>

        <div className="flex portrait:flex-col my-4 justify-center items-center gap-4">
          <button
            onClick={handleSubmit}
            className="w-[200px] h-[40px] bg-lime-500 hover:bg-white hover:text-lime-500 border-lime-500 border-2"
          >
            Register Now
          </button>
        </div>
      </div>
    </main>
  );
};

export default Signup;
