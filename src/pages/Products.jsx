import React, { useEffect, useState } from "react";
import CreateProduct from "./CreateProduct";
import ProductCard from "../components/ProductCard";
import axios from "axios";

const Products = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setproducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log("products", products);

  return (
    <div className="flex flex-wrap justify-center">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            rating={product.rating}
            image={product.image}
            category={product.category}
            description={product.description}
            price={product.price}
          />
        ))
      ) : (
        <h1>Loding...</h1>
      )}
    </div>
  );
};

export default Products;
