import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("/api/products/getProducts");
      setProducts(data.productList);
    }

    fetchData();
  }, []);

  return <div>{products && products.map((item) => {
    return (
        <div key={item.id}>
            <h3>{item.title}</h3>
        </div>
    )
  })}</div>;
};

export default Products;
