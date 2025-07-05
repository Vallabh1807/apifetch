import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  id,
  title,
  rating = {},
  image,
  category,
  description,
  price,
}) => {
  const rate = rating?.rate ?? 0;
  const stars = [];
  const maxStars = 5;

  for (let i = 1; i <= maxStars; i++) {
    if (i <= Math.floor(rate)) {
      stars.push(<span key={i}>★</span>); // full star
    } else if (i === Math.ceil(rate) && rate % 1 !== 0) {
      stars.push(<span key={i}>☆</span>); // half star placeholder
    } else {
      stars.push(<span key={i}>☆</span>); // empty star
    }
  }
  const navigate = useNavigate()

  const handleSinglePage = ()=>{
      navigate(`/products/${id}`)
  }

  return (
    <div className="w-full sm:w-1/2 md:w-1/5 lg:w-1/5 mt-10 mx-4  cursor-pointer" onClick={handleSinglePage}>
      <div className="bg-white shadow-xl border rounded-xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-42 w-full object-contain shadow-xl"
        />
        <div className="text-center p-2">
          <h1 className="text-md font-bold">{title.slice(0,25)}...</h1>
          <h4 className="text-xs text-gray-500">{category}</h4>
          <p className="text-sm line-clamp-2">{description.slice(0,60)}...</p>
          <div className="mt-2 text-yellow-500">{stars} <span className="text-black">{rating.count}</span></div>
          <div className="flex justify-center gap-4 mt-3">
            <p className="text-lg font-semibold">${price}</p>
            <button className="bg-green-400 px-3 py-1 text-white rounded-xl">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
