import { useRouter } from "next/router";
import React, { useEffect } from "react";
import axios from "axios";

const Order = () => {
  const router = useRouter();

  useEffect(() => {
    const verify = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/Login");
      }
      try {
        const response = await axios.get("/api/signup", {
          headers: { Authorization: `Bearer ${token}` },
        });
      } catch (error) {
        console.error(error);
        router.push("/Login");
      }
    };
    verify();
  }, []);

  

  return <div>Order</div>;
};

export default Order;
