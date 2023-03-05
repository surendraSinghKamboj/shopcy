import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/auth/login", data);
      console.info(response);
    } catch (error) {
      console.log(error);
    }
  };


  
  return (
    <main className="w-[100vw] min-h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-[60vw] h-[70vh] portrait:w-[90vw] portrait:h-[70vh]  shadow-lg border-2 shadow-lime-500">
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
            <Link href={"/Signup"}>New User Signup now</Link>
          </p>
        </div>

        <div className="flex portrait:flex-col my-4 justify-center items-center gap-4">
          <button
            onClick={handleSubmit}
            className="w-[200px] h-[40px] bg-lime-500 hover:bg-white hover:text-lime-500 border-lime-500 border-2"
          >
            Login Now
          </button>
        </div>
      </div>
    </main>
  );
};

export default Login;
