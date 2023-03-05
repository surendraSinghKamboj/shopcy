import React, { useState as hook } from "react";

const admin = () => {
  const [data, setData] = hook({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(data);
  };

  return (
    <main className="flex justify-center items-center w-[100vw] h-[100vh] flex-col sm:flex-row">
      <div className="flex justify-center items-center w-[80vw] h-[80vh] flex-col shadow-lg shadow-lime-500">
        {/* userName */}
        <div className="my-6">
          <label htmlFor="userName" className="hidden sm:inline w-[100px] mx-5">
            Username :
          </label>
          <input
            onChange={(e) => handleChange(e)}
            className="w-[300px] h-[40px] focus:outline-lime-500 border-2 border-lime-500 text-lg"
            type="text"
            id="userName"
            name="userName"
            placeholder="User Name"
          />
        </div>
        {/* Password */}
        <div className="my-6">
          <label htmlFor="password" className="hidden sm:inline mx-5">
            Password :
          </label>
          <input
            onChange={(e) => handleChange(e)}
            className="w-[300px] h-[40px] focus:outline-lime-500 border-2 border-lime-500 text-lg"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>

        <div className="flex justify-center items center">
          <button
            onClick={() => handleSubmit()}
            className="w-[200px] h-10 bg-lime-500 border-2 border-lime-500 hover:bg-white hover:text-lime-500 text-lg"
          >
            Login
          </button>
        </div>
      </div>
    </main>
  );
};

export default admin;
