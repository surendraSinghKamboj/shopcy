import { useRouter } from "next/router";
import React, { useEffect } from "react";
import axios from "axios";

const Order = () => {
  const router = useRouter();

  useEffect(() => {
    const verify = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/api/auth/verify");
      }
      try {
        const response = await axios.get("/api/signup", {
          headers: { Authorization: token },
        });
        console.log(response);
        response.status !== 200 ? router.push("/Login") : null;
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
