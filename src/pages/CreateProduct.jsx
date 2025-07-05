import axios from "axios";
import React, { useState } from "react";

const CreateProduct = () => {
  const [product, setProduct] = useState({
    image: "",
    title: "",
    description: "",
    price: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("https://fakestoreapi.co  m/products/",{
      title:product.title,
      description:product.description,
      image:product.image,
    }).then((res)=>console.log(res.data))
  };
  return (
    <div className="flex flex-col w-full h-[100vh] items-center justify-center">
      <h1 className="text-4xl font-bold ">Create New Product</h1>
      <form className="flex flex-col mt-5" onSubmit={submitHandler}>
        Enter the Image URL:{" "}
        <input
          type="url"
          name=""
          id=""
          placeholder="Paste the url"
          value={product.image}
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
        />
        <br />
        Enter the Title :{" "}
        <input
          type="text"
          placeholder="Title"
          value={product.title}
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
        />
        <br />
        Enter the Description :{" "}
        <input
          type="text"
          placeholder="Description"
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        />
        <br />
        Enter the Price :{" "}
        <input
          type="text"
          placeholder="Price"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <br />
        <button className="px-4 py-1 bg-green-500">Submit</button>
      </form>
    </div>
  );
};

export default CreateProduct;
