import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  if (!product) return <h2 className="mt-10 text-center">Loading…</h2>;
  return (
    <div className="mt-5 flex w-screen">
      <div className="h-[80vh] w-1/2 m-10 shadow-xl flex items-center justify-center">
        <img
          src={product.image}
          alt=""
          className="h-full object-contain bg-zinc-200"
        />
      </div>
      <div className="m-30 w-1/2">
        <h1 className="text-4xl mb-2 font-bold text-fuchsia-950">
          {product.title}
        </h1>
        <h1 className="text-xl mb-3">{product.category}</h1>
        <p className="text-lg mb-3">{product.description}</p>
        <p className="font-semibold text-lg mb-10">
          Price: <span className="text-green-500"> ${product.price}</span>
        </p>
        {/* <p className="font-semibold text-lg mb-10">
          Rating: {rate} ⭐ ({count} reviews)
        </p> */}
        <button className="px-4 py-1 bg-green-600/80 rounded-3xl text-white ml-30 mr-20">
          Buy now
        </button>
        <button className="px-4 py-1 bg-yellow-600/80 rounded-3xl text-white">
          Add to cart{" "}
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
